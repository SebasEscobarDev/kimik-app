import srcCheck from "@/assets/images/check6.png";
import srcImgForm6 from "@/assets/images/img-form6.jpg";

import PrimaryButton from "@/components/global/PrimaryButton";
import { cadena, CLASSES } from "@/consts";
import Modal from "@/components/register/Modal";
import Tooltip from "@/components/register/Tooltip";

import "@/styles/Form6.css";
import { useForm } from "@/context/FormContext";
import useSigin from "@/hooks/useSigin";
import { useGlobal } from "@/context/GlobalContext";


{/*
// Seleccionar todos los botones dentro del componente
const buttons = this.querySelectorAll("button");
const input = this.querySelector("input");

// Iterar sobre cada botón y agregar un event listener de clic
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        buttons.forEach((button) => {
            button.classList.remove("bg-[#FFCC00]");
        });
        button.classList.add("bg-[#FFCC00]");
        input.value = button.textContent;
    });
});
*/}

const Form6 = () => {

    const { form, setForm } = useForm();

    const { refAlertForm, refForm4, refForm6, refForm7 } = useSigin();

    const { languageText } = useGlobal();

    const handleClickButton = async (event) => {
        const buttons = document.querySelectorAll(".btnOptions");
        buttons.forEach((button) => {
            button.classList.remove("bg-[#FFCC00]");
        });
        event.target.classList.add("bg-[#FFCC00]");
        await setForm((prevForm) => ({ ...prevForm, txtApp: event.target.textContent }))
    }

    const handleNext = () => {
        //validar campos vacios
        if (form.txtApp == '') {
            return showAlert('error', 'Error!', cadena.txtFormDos12[languageText])
        }
        //si todo es correcto, continuo al siguiente form
        refForm6.current.classList.add("hidden")
        refForm7.current.classList.remove("hidden")
    }

    const handleBack = () => {
        refForm6.current.classList.add("hidden")
        refForm4.current.classList.remove("hidden")
    }

    return (
        <Modal id="box-form-6" ref={refForm6}>
            <div className="relative inline-block overflow-hidden mb-2">
                <h3 className={`${CLASSES.h3} pb-2`}>{cadena.txtFormDos1[languageText]}</h3>
            </div>
            <div className="flex flex-col md:flex-row w-full">
                <div
                    style={{ backgroundImage: `url(${srcImgForm6.src})`, backgroundPosition: `bottom 0px right 0px` }}
                    className="flex md:hidden h-36 border-[1.5px] border-white bg-white py-4 px-4 rounded-t-[25px]"
                >
                </div>

                <div
                    className="flex w-full md:w-[750px] border-[1.5px] border-white bg-white py-4 px-4 rounded-b-[25px] md:rounded-l-[25px] md:rounded-r-[0px]"
                >
                    <div className="w-full">
                        <div className="flex flex-col text-center justify-center mb-3">
                            <div className="flex flex-col px-0 md:px-10 gap-2">
                                {/* <div ref={refAlertForm}></div> */}
                                <label htmlFor="txtApp" className={`${CLASSES.label}`}>
                                    {cadena.txtFormSeis1[languageText]}
                                </label>
                                <div className="flex mb-2">
                                    <div
                                        className={`${CLASSES.bgPrimary} bg-[#FFCC00] border border-black min-w-[70px] md:min-w-[90px] justify-center rounded-xl flex items-center px-2 md:px-4 h-[58px] mr-2`}
                                    >
                                        <img
                                            src={srcCheck.src}
                                            width={40}
                                            alt="Logo Check"
                                        />
                                    </div>
                                    <div className="flex flex-row">
                                        <button
                                            onClick={handleClickButton}
                                            className={`${CLASSES.btnOptions} mr-2 btnOptions`}
                                        >
                                            {cadena.txtFormSeis2[languageText]}
                                        </button>
                                        <button
                                            onClick={handleClickButton}
                                            className={`${CLASSES.btnOptions} mr-2 btnOptions`}
                                        >
                                            {cadena.txtFormSeis3[languageText]}
                                        </button>
                                        <span className={`${CLASSES.btnOptions} disabled`}>
                                            {cadena.txtFormSeis4[languageText]}
                                        </span>
                                    </div>
                                    <Tooltip
                                        message={cadena.txtFormSeis5[languageText]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    style={{ backgroundImage: `url(${srcImgForm6.src})`, backgroundPosition: `bottom 0px right 0px` }}
                    className="hidden md:flex md:w-[450px] overflow-hidden border-[1.5px] border-white bg-white py-4 px-4 md:rounded-r-[25px] md:rounded-l-[0px]"
                >
                </div>
            </div>
            <div className="flex w-full justify-center mt-8">
                <div className="flex mr-4">
                    <PrimaryButton type="btnSecondaryTwo" id="btnBack6" onClick={handleBack}>
                        {cadena.txtBtnBack[languageText]}
                    </PrimaryButton>
                </div>
                <PrimaryButton type="btnSecondary" id="btnNext6" onClick={handleNext}>
                    {cadena.txtBtnNext[languageText]}
                </PrimaryButton>
            </div>
        </Modal>
    );
};

export default Form6;