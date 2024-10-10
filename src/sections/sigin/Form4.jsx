import srcSix from "@/assets/images/Recurso 6.png";
import srcSeven from "@/assets/images/Recurso 7.png";
import srcEigth from "@/assets/images/Recurso 8.png";
import srcImgForm4 from "@/assets/images/img-form4.jpg";

import PrimaryButton from "@/components/global/PrimaryButton";
import { cadena, CLASSES } from "@/consts";
import Modal from "@/components/register/Modal";
import { useForm } from "@/context/FormContext";
import { useRef, useState } from "react";
import { showAlert } from "@/utils/swalert";

import srcPlus from "@/assets/svgs/plus.svg";
import srcUpload from "@/assets/svgs/upload.svg";
import useSigin from "@/hooks/useSigin";
import { useGlobal } from "@/context/GlobalContext";

const Form4 = () => {

    const { form, setForm, file, setFile, previewUrl, setPreviewUrl } = useForm();

    const { refAlertForm, refForm3, refForm4, refForm6 } = useSigin();

    const refInputFoto = useRef(null);
    const handleBtnFoto = () => {
        refInputFoto.current.click();
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            setFile(selectedFile);
            const previewUrl = URL.createObjectURL(selectedFile);
            setPreviewUrl(previewUrl);
        } else {
            alert('Please select a valid image file');
            setFile(null);
            setPreviewUrl(null);
        }
    };


    const handleNext = () => {
        //validar que los campos no esten vacios
        if (!file) {
            return showAlert('error', 'Error!', 'Debe ingresar todos los campos para continuar')
        }
        //si todo es correcto, pasar al siguiente formulario
        refForm4.current.classList.add("hidden")
        refForm6.current.classList.remove("hidden")
    }

    const handleBack = () => {
        refForm4.current.classList.add("hidden")
        refForm3.current.classList.remove("hidden")
    }

    const { isMobile, languageText } = useGlobal();

    return (
        <Modal id="box-form-4" ref={refForm4}>
            <div className="relative inline-block overflow-hidden mb-2">
                <h3 className={`${CLASSES.h3}`}>{cadena.txtFormDos1[languageText]}</h3>
            </div>
            <div className="flex">
                <div
                    className="flex w-[100%] md:w-[750px] border-[1.5px] border-white bg-white py-4 px-4 rounded-[25px] md:rounded-l-[25px] md:rounded-r-[0px]"
                >
                    <div className="w-full">
                        <div className="flex flex-col text-center justify-center mb-3">
                            <div className="flex flex-col px-0 md:px-10 gap-2">
                                {/* <div ref={refAlertForm}></div> */}
                                <label className={`${CLASSES.label}`}>
                                    {cadena.txtFormCuatro1[languageText]}
                                </label>
                                <div className="flex flex-col md:flex-row">
                                    <button
                                        onClick={handleBtnFoto}
                                        title={cadena.txtFormCuatro2[languageText]}
                                        type="button"
                                        className="hidden md:flex bg-white w-full cursor-pointer md:w-2/4 border align-center items-center justify-center border-black rounded-[25px] md:mr-2 mb-4 md:mb-0 py-4"
                                    >
                                        <div className="relative">

                                            <img
                                                className="relative max-w-40 max-h-32 md:max-w-60 md:max-h-44"
                                                id="imgFotoOjos"
                                                src={previewUrl ?? srcSeven.src}
                                                width={245}
                                                height={175}
                                                alt="Subir imagen"
                                            />
                                            {/* <div className="absolute -top-10 -right-5">
                                                <img src={srcPlus.src} width={40} alt="" />
                                            </div> */}
                                        </div>
                                    </button>
                                    <input
                                        ref={refInputFoto}
                                        className="hidden"
                                        type="file"
                                        name="inputFoto"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                    <div
                                        className="flex bg-white w-full md:w-2/4 flex-col justify-center border border-black rounded-[25px] md:ml-2"
                                    >
                                        {/* {isMobile && previewUrl && (<>

                                        </>)} */}
                                        <div
                                            className="p-4 relative h-[160px] overflow-hidden mb-4"
                                        >
                                            <img
                                                className="m-auto mt-[-15px]"
                                                src={srcEigth.src}
                                                alt="Demostracion de foto"
                                            />
                                        </div>
                                        <p
                                            className="text-sm text-left text-black px-4 pb-2 inline-block leading-4"
                                        >
                                            {cadena.txtFormCuatro3[languageText]}
                                        </p>
                                        <p
                                            className="text-sm text-left text-black px-4 pb-2 inline-block leading-4"
                                        >
                                            {cadena.txtFormCuatro4[languageText]}
                                        </p>
                                        <p
                                            className="text-sm text-left text-black px-4 pb-4 inline-block leading-4"
                                        >
                                            {cadena.txtFormCuatro5[languageText]}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex mt-2">
                                    <button
                                        onClick={handleBtnFoto}
                                        className={`${CLASSES.bgPrimary} border border-black w-full justify-between rounded-xl flex items-center px-4 h-[58px] mr-2`}
                                    >
                                        <label className="w-full text-black pop-bold">{previewUrl ? cadena.txtFormCuatro6[languageText] : cadena.txtFormCuatro7[languageText]} {cadena.txtFormCuatro8[languageText]}</label>
                                        <img src={srcUpload.src} className="mr-2" width={30} alt="Upload" />

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    style={{ backgroundImage: `url(${srcImgForm4.src})`, backgroundPosition: `bottom 0px left 0px`, backgroundSize: `105%` }}
                    className="hidden md:flex md:w-[450px] border-[1.5px] border-white bg-white py-4 px-4 md:rounded-r-[25px] md:rounded-l-[0px]"
                >
                </div>
            </div>
            <div className="flex w-full justify-center mt-8">
                <div className="flex mr-4">
                    <PrimaryButton type="btnSecondaryTwo" id="btnBack4" onClick={handleBack}>
                        {cadena.txtBtnBack[languageText]}
                    </PrimaryButton>
                </div>
                <PrimaryButton type="btnSecondary" id="btnNext4" onClick={handleNext}>
                    {cadena.txtBtnNext[languageText]}
                </PrimaryButton>
            </div>
        </Modal>
    );
};

export default Form4;