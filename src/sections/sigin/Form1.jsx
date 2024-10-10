import srcIos from "@/assets/images/download-ios.png";
import srcAndroid from "@/assets/images/download-android.png";

import PrimaryButton from "@/components/global/PrimaryButton";
import Modal from "@/components/register/Modal";
import { cadena, CLASSES } from "@/consts";
import { useForm } from "@/context/FormContext";
import useSigin from "@/hooks/useSigin";
import { useEffect, useState } from "react";
import { useGlobal } from "@/context/GlobalContext";

const Form1 = () => {
    const { form, setForm } = useForm();
    const { handleSigin, refBtnSigin, refH3Title, refForgiven, refDivRegister, refDivForgiven, refTxtEmailForgiven, refTxtUser, refTxtPassword, refTxtPassConfirm, refAlertForm, refDescriptionForm, refForm1, refForm2, checkUserReact, checkPasswordMatchReact } = useSigin();

    const { borderClass, languageText } = useGlobal();


    const handleForgiven = () => {
        refDivRegister.current.classList.add("hidden")
        refDivForgiven.current.classList.remove("hidden")
    }

    useEffect(() => {
        refTxtUser.current.addEventListener("input", checkUserReact);
        refTxtPassConfirm.current.addEventListener('input', checkPasswordMatchReact);
    }, []);


    return (
        <Modal ref={refForm1} id="box-form-1">
            <div className={`${CLASSES.bgSecondary} flex w-[100%] md:w-[750px] border-[1.5px] ${borderClass} py-6 px-2 md:px-10 rounded-[25px] mt-5`}>
                <div className="w-full" ref={refDivRegister}>
                    <div className="flex flex-col text-center justify-center mb-3">
                        <h3 ref={refH3Title} className={`${CLASSES.h3} pb-2`}>{cadena.txtFormUno1[languageText]}</h3>
                        <p ref={refDescriptionForm} className="text-white text-sm md:text-md pop-regular">
                            {cadena.txtFormUno2[languageText]}<a
                                className="hover:underline"
                                href="/"
                                target="_blank">{cadena.txtFormUno3[languageText]}</a>
                        </p>
                        <div className="flex flex-col px-6 md:px-12 gap-2 pt-4">
                            <input
                                ref={refTxtUser}
                                className={`${CLASSES.input}`}
                                type="email"
                                name="txtUser"
                                placeholder={cadena.txtFormUno4[languageText]}
                                maxLength="260"
                                value={form.txtUser}
                                onChange={(e) => setForm({ ...form, txtUser: e.target.value })}
                                required
                            />
                            <input
                                ref={refTxtPassword}
                                className={`${CLASSES.input}`}
                                type="password"
                                name="txtPassword"
                                placeholder={cadena.txtFormUno5[languageText]}
                                minLength="5"
                                maxLength="260"
                                value={form.txtPassword}
                                onChange={(e) => setForm({ ...form, txtPassword: e.target.value })}
                                required
                            />
                            <input
                                ref={refTxtPassConfirm}
                                className={`${CLASSES.input}`}
                                type="password"
                                name="txtPassConfirm"
                                placeholder={cadena.txtFormUno6[languageText]}
                                minLength="5"
                                maxLength="260"
                                value={form.txtPassConfirm}
                                onChange={(e) => setForm({ ...form, txtPassConfirm: e.target.value })}
                            />
                            <div ref={refAlertForm}>
                            </div>
                            <button
                                ref={refForgiven}
                                type="button"
                                className="flex m-auto hover:underline text-white pop-regular"
                                onClick={handleForgiven}>{cadena.txtFormUno7[languageText]}</button>
                            <div className="flex justify-center pt-4">
                                <PrimaryButton ref={refBtnSigin} id="btnSigin" type="btnSecondary" onClick={handleSigin}>
                                    {cadena.txtBtn2[languageText]}
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-4 hidden" ref={refDivForgiven}>
                    <div className="flex flex-col text-center justify-center mb-3">
                        <h3 className={`${CLASSES.h3} pb-2`}>
                            {cadena.txtFormUno8[languageText]}
                        </h3>
                        <p className="text-white py-2 text-md pop-regular">
                            {cadena.txtFormUno9[languageText]}
                        </p>
                        <div className="flex flex-col px-6 md:px-12 gap-2 pt-4">
                            <input
                                ref={refTxtEmailForgiven}
                                className={`${CLASSES.input}`}
                                type="email"
                                name="txtForgiven"
                                placeholder={cadena.txtFormUno4[languageText]}
                                maxLength="260"
                                value={form.txtForgiven}
                                onChange={(e) => setForm({ ...form, txtForgiven: e.target.value })}
                                required
                            />
                            <div ref={refAlertForm}>
                            </div>
                            <div className="flex justify-center pt-4">
                                <PrimaryButton type="btnSecondary" id="btnForgiven">
                                    {cadena.txtFormUno10[languageText]}
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center mt-6 md:mb-16">
                <div className="flex rounded p-2 mr-4">
                    <a href="/" target="_blank" id="downloadIos">
                        <img className="mr-2" src={srcIos.src} width={200} alt="Logo Mac" />
                    </a>
                </div>
                <div className="flex rounded p-2">
                    <a href="/" target="_blank" id="downloadAndroid">
                        <img
                            className="mr-2"
                            src={srcAndroid.src}
                            width={200}
                            alt="Logo PlayStore"
                        />
                    </a>
                </div>
            </div>
        </Modal>
    );
}

export default Form1;
