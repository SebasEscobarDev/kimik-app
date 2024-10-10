import svgCaret from "@/assets/svgs/caret-bottom.svg";
import srcCheck from "@/assets/svgs/check.svg";
import "@/styles/SelectPro.css";
import { useEffect, useRef, useState } from "react";

const SelectPro = ({ id, options, multiple, form, setForm }) => {

    const refOptions = useRef(null);
    const refSelectPersonalized = useRef(null);
    const refButton = useRef(null);
    const refSelectedOption = useRef(null);

    const itemsAltos = (options.length + 1) * 41;
    const alto = itemsAltos < 200 ? itemsAltos + "px" : "200px";

    useEffect(() => {
        //add style element in body
        const style = document.createElement("style");
        style.innerHTML = `
            .all-options.show {
                animation: showSelect 0.5s ease;
                opacity: 1;
                height: ${alto};
                display: inline-block;
            }

            @keyframes showSelect {
                from {
                    opacity: 0;
                    height: 0px;
                }
                to {
                    opacity: 1;
                    height: ${alto};
                }
            }`
    }, []);


    const handleOnlyOption = (value) => {
        setForm({ ...form, [id]: value });
        refOptions.current.classList.remove("show");
        refSelectedOption.current.innerHTML = value;
    }

    const handleBtnClick = () => {
        refOptions.current.classList.toggle("opacity-100");
        refOptions.current.classList.toggle("h-auto");
        refOptions.current.classList.toggle("inline-block");

        let visible = refOptions.current.classList.contains("show")
            ? true
            : false;

        //todos los select
        const allSelect = document.getElementsByClassName(
            "select-personalized",
        );
        Array.from(allSelect).forEach((e, i) => {
            e.classList.remove("z-50");
            e.children[1].classList.remove("show");
        });

        if (visible) {
            refSelectPersonalized.current.classList.remove("z-50");
            refOptions.current.classList.remove("show");
        } else {
            refSelectPersonalized.current.classList.add("z-50");
            refOptions.current.classList.add("show");
        }
    }


    const [visibleImages, setVisibleImages] = useState(options.map(() => false));

    const handleMultipleOption = async (value, index) => {
        // Alternar la visibilidad de las imágenes
        setVisibleImages((prev) =>
            prev.map((isVisible, i) => (i === index ? !isVisible : isVisible))
        );
        // Obtener los valores actuales del formulario
        let values = form[id] ? form[id].split(",") : [];

        // Agregar o quitar el valor del array
        if (values.includes(value)) {
            values = values.filter((item) => item !== value);
        } else {
            values.push(value);
        }

        // Concatenar los valores en una sola cadena
        const val = values.join(",");

        // Actualizar el formulario
        await setForm((prevForm) => ({ ...prevForm, [id]: val }));

        // Actualizar el contenido del elemento referenciado
        if (refSelectedOption.current) {
            refSelectedOption.current.innerHTML = `<span>${val}</span>`;
        }
    }

    return (

        <div data-name={id} className="w-full">
            <div
                ref={refSelectPersonalized}
                className={`select-personalized relative bg-[#ECECEC] flex flex-col border border-black rounded-xl w-full max-h-[70px]`}
            >
                <button type="button" ref={refButton} onClick={handleBtnClick} className={`w-full min-h-[50px] md:min-h-[58px] ${multiple ? 'h-auto' : 'h-[50px] md:h-[58px]'} px-2 items-center`}>
                    <span className="text-black flex px-1 md:px-4 justify-between pop-semi">
                        <span ref={refSelectedOption} className={`selected-option ${multiple ? 'multiple' : ''}`}>
                            <span className="text-gray-500 text-sm">
                                {multiple ? 'Elegir una o varias opciones...' : 'Elegir una opción...'}
                            </span>
                        </span>
                        <img src={svgCaret.src} width={20} alt="Caret bottom" />
                    </span>
                </button>
                <div
                    ref={refOptions}
                    className={`all-options absolute w-full left-[0] top-[92%] inline-block`}
                >
                    <div
                        className="absolute max-h-[200px] ml-[-1px] overflow-y-scroll top-0 left-0 bg-[#ECECEC] border-b border-r border-l border-black rounded-b-[15px] px-4 flex flex-col"
                    >
                        {
                            options &&
                            options.map((value, i) => (
                                <button
                                    type="button"
                                    key={i}
                                    onClick={() => { multiple ? handleMultipleOption(value, i) : handleOnlyOption(value) }}
                                    className="flex transition-all text-black hover:bg-white min-h-[41px] cursor-pointer items-center border-t pop-semi border-black"
                                >
                                    {multiple && (
                                        <span className="boxSelect">
                                            <img
                                                className={`${visibleImages[i] ? '' : 'invisible'} inline-block mt-[-8px]`}
                                                src={srcCheck.src}
                                                alt="checked"
                                                width={15}
                                            />
                                        </span>
                                    )}
                                    <span className="ml-2 mb-[-2px]">{value}</span>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectPro;