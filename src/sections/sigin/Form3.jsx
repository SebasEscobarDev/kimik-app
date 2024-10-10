import srcFour from "@/assets/images/Recurso 4.png";
import srcFive from "@/assets/images/Recurso 5.png";
import srcImgForm3 from "@/assets/images/img-form3.jpg";

import PrimaryButton from "@/components/global/PrimaryButton";
import { cadena, CLASSES } from "@/consts";
import Modal from "@/components/register/Modal";
import SelectPro from "@/components/register/SelectPro";
import { useEffect, useRef, useState } from "react";
import { useForm } from "@/context/FormContext";
import { showAlert } from "@/utils/swalert";
import Tooltip from "@/components/register/Tooltip";
import useSigin from "@/hooks/useSigin";
import { useGlobal } from "@/context/GlobalContext";

const Form3 = () => {

    const refTcPc = useRef(null);
    const refTcMovil = useRef(null);

    const [value1, setValue1] = useState(18);
    const [value2, setValue2] = useState(99);

    useEffect(() => {

        // Crea el elemento script
        const script2 = document.createElement('script');
        script2.src = 'https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/tcrs-generated-labels.min.js';
        script2.async = true;
        document.body.appendChild(script2);
        // Crea el elemento script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/toolcool-range-slider/dist/toolcool-range-slider.min.js';
        script.async = true;
        document.body.appendChild(script);

        const slider = refTcPc.current;
        const slider2 = refTcMovil.current;

        setForm((prevForm) => ({ ...prevForm, edadMin: value1, edadMax: value2 }));

        const onChange = async (evt) => {
            const val1 = evt.detail.value1;
            const val2 = evt.detail.value2;
            await setForm((prevForm) => ({ ...prevForm, edadMin: val1, edadMax: val2 }));
            setValue1(val1);
            setValue2(val2);
        };

        slider?.addEventListener('change', onChange);
        slider2?.addEventListener('change', onChange);

        // Limpia el script cuando el componente se desmonte
        return () => {
            slider?.removeEventListener('change', onChange);
            slider2?.removeEventListener('change', onChange);
        }

    }, []);

    const { form, setForm, optionsGender } = useForm();

    const { refAlertForm, refForm2, refForm3, refForm4 } = useSigin();

    const handleNext = () => {
        //validar que los campos no esten vacios
        if (
            form.slcIdentify == '' ||
            form.slcInterest == '' ||
            form.edadMin == '' ||
            form.edadMax == ''
        ) {
            return showAlert('error', 'Error!', cadena.txtFormDos12[languageText]);
        }
        //si todo es correcto, pasar al siguiente formulario
        refForm3.current.classList.add("hidden")
        refForm4.current.classList.remove("hidden")
    }

    const handleBack = () => {
        refForm3.current.classList.add("hidden")
        refForm2.current.classList.remove("hidden")
    }

    const { borderClass, mode, languageText } = useGlobal();

    useEffect(() => {
        console.log(optionsGender)
    }, [optionsGender]);

    return (

        <Modal id="box-form-3" ref={refForm3}>
            <div className="relative inline-block overflow-hidden mb-2">
                <h3 className={`${CLASSES.h3} pb-2`}>{cadena.txtFormDos1[languageText]}</h3>
            </div>
            <div className="flex flex-col md:flex-row w-full">
                <div
                    style={{ backgroundImage: `url(${srcImgForm3.src})`, backgroundPosition: `top -0px right 50%`, backgroundSize: `cover` }}
                    className={`flex md:hidden h-36 border-[1.5px] ${borderClass} bg-white py-4 px-4 rounded-t-[25px]`}
                >
                </div>

                <div
                    className={`flex w-full md:w-[750px] border-[1.5px] ${borderClass} bg-white py-4 px-4 rounded-b-[25px] md:rounded-l-[25px] md:rounded-r-[0px]`}
                >
                    <div className="w-full">
                        <div className="flex w-full flex-col text-center justify-center mb-3">
                            <div className="flex flex-col px-0 md:px-10 gap-2">
                                {/* <div ref={refAlertForm}></div> */}
                                <label htmlFor="slcIdentify" className={`${CLASSES.label}`}>
                                    {cadena.txtFormTres1[languageText]}
                                </label>
                                <div className="flex mb-2 z-40">
                                    <div
                                        className={`${CLASSES.bgPrimary} bg-[#FFCC00] border border-black min-w-[70px] md:min-w-[90px] justify-center rounded-xl flex items-center px-2 md:px-4 h-[50px] md:h-[58px] mr-2`}
                                    >
                                        <img
                                            src={srcFour.src}
                                            width={30}
                                            alt="logo identifica"
                                        />
                                    </div>
                                    {optionsGender[languageText] && <SelectPro
                                        id="slcIdentify"
                                        options={optionsGender[languageText]}
                                        form={form}
                                        setForm={setForm}
                                    />}
                                </div>
                                <label htmlFor="slcInterest" className={`${CLASSES.label}`}>
                                    {cadena.txtFormTres2[languageText]}
                                </label>
                                <div className="flex mb-2 z-30">
                                    <div
                                        className={`${CLASSES.bgPrimary} bg-[#FFCC00] border border-black min-w-[70px] md:min-w-[90px] justify-center rounded-xl flex items-center px-2 md:px-4 h-[50px] md:h-[58px] mr-2`}
                                    >
                                        <img
                                            src={srcFive.src}
                                            width={35}
                                            alt="logo Interes"
                                        />
                                    </div>
                                    {optionsGender[languageText] && <SelectPro
                                        id="slcInterest"
                                        options={optionsGender[languageText]}
                                        form={form}
                                        setForm={setForm}
                                        multiple={true}
                                    />}
                                    <div className="hidden md:flex">
                                        <Tooltip message={cadena.txtFormTres5[languageText]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    style={{ backgroundImage: `url(${srcImgForm3.src})`, backgroundPosition: `bottom -150px right 0px` }}
                    className={`hidden md:flex md:w-[450px] border-[1.5px] ${borderClass} bg-white py-4 px-4 rounded-b-[25px] md:rounded-b-[0px]  md:rounded-br-[25px] md:rounded-tr-[25px]`}
                >
                </div>
            </div>
            <div className="flex flex-col mt-6">
                <label htmlFor="sliderEdad" className={`${CLASSES.textPrimary} pop-semi`}>
                    {cadena.txtFormTres3[languageText]}
                </label>
                <div className="flex w-full justify-center mb-2 mt-[-5px]">
                    <div className="flex flex-col">
                        <div className="flex justify-between w-full pb-2">
                            <div className={`${CLASSES.textPrimary} pop-semi flex`}>
                                {">"}
                                <div id="value-1">{value1}</div>
                                {/* <input type="hidden" name="edadMin" value={form.edadMin} onChange={(e) => setForm({ ...form, edadMin: e.target.value })} />
                                <input type="hidden" name="edadMax" value={form.edadMax} onChange={(e) => setForm({ ...form, edadMax: e.target.value })} /> */}
                            </div>
                            <div className={`${CLASSES.textPrimary} pop-semi flex`}>
                                {"<"}
                                <div id="value-2">{value2}</div>
                            </div>
                        </div>
                        <div className="hidden md:flex">
                            <tc-range-slider
                                ref={refTcPc}
                                theme="example"
                                css-links="css/example.css"
                                id="sliderEdad"
                                step="1"
                                min="18"
                                max="99"
                                value1="18"
                                value2="99"
                                pointers-min-distance="5"
                                pointer-width="20px"
                                pointer-height="20px"
                                pointer-border="1px solid white"
                                pointer-border-hover="1px solid #FFCC00"
                                pointer-border-focus="1px solid #FFCC00"
                                pointer-bg="transparent"
                                value1-label="#value-1"
                                value2-label="#value-2"
                                slider-height="2px"
                                slider-width="600px"
                                generate-labels="true"></tc-range-slider>
                        </div>
                        <div className="flex md:hidden">
                            <tc-range-slider
                                ref={refTcMovil}
                                theme="example"
                                css-links="css/example.css"
                                id="sliderEdadMovil"
                                step="1"
                                min="18"
                                max="99"
                                value1="18"
                                value2="99"
                                pointers-min-distance="5"
                                pointer-width="20px"
                                pointer-height="20px"
                                pointer-border="1px solid white"
                                pointer-border-hover="1px solid #FFCC00"
                                pointer-border-focus="1px solid #FFCC00"
                                pointer-bg="transparent"
                                value1-label="#value-1"
                                value2-label="#value-2"
                                slider-height="2px"
                                generate-labels="true"></tc-range-slider>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row w-full justify-center mt-8">
                <div className="mr-2 md:mr-4 mb-4 md:mb-0">
                    <PrimaryButton type="btnSecondaryTwo" id="btnBack3" onClick={handleBack}>
                        {cadena.txtBtnBack[languageText]}
                    </PrimaryButton>
                </div>
                <div>
                    <PrimaryButton type="btnSecondary" id="btnNext3" onClick={handleNext}>
                        {cadena.txtBtnNext[languageText]}
                    </PrimaryButton>
                </div>
            </div>
            <style>

            </style>
        </Modal>
    );
};

export default Form3;