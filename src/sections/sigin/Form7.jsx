import PrimaryButton from "@/components/global/PrimaryButton";
import { cadena, CLASSES } from "@/consts";
import Modal from "@/components/register/Modal";
import CheckBoxPro from "@/components/register/CheckBoxPro";
import { useForm } from "@/context/FormContext";
import { showAlert } from "@/utils/swalert";
import { getUser, postUserFormData } from "@/api/users";
import { getCookie, setCookie } from "@/utils/cookies";
import { useEffect, useState } from "react";
import { useGlobal } from "@/context/GlobalContext";
import useSigin from "@/hooks/useSigin";


const Form7 = () => {

    const { form, setForm, file, previewUrl } = useForm();
    const { setUserLogin, languageText } = useGlobal();

    const { refAlertForm, refForm6, refForm7 } = useSigin();

    const handleEnd = async () => {

        console.log('form :')
        console.log(form)

        if (!file) {
            alert('Please select a file first');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);



        //validar campos vacios
        if (!form.chkPersonalData || !form.chkTerms) {
            return showAlert('error', 'Error!', cadena.txtFormDos12[languageText])
        }
        //si todo es correcto, guardo la informacion del usuario y paso a la pagina de bienvenida

        const cookieUser = JSON.parse(getCookie("User"));
        let response;

        const user = {
            id: cookieUser.id,
            nombre: form.txtFullName,
            nacimiento_hora: form.txtHoraNacimiento,
            nacimiento_dia: form.txtDia,
            nacimiento_mes: form.txtMes,
            nacimiento_ano: form.txtAnio,
            nacimiento_ciudad: form.txtNacimientoCiudad,
            genero_mostrar: form.chkGender ? 1 : 0,
            genero_identifica: form.slcIdentify,
            genero_interes: form.slcInterest,
            foto: previewUrl,
            acerca: '',
            rango_edad: form.edadMin + ', ' + form.edadMax,
            app: form.txtApp
        };

        console.log(user)

        formData.append('id', user.id);
        formData.append('nombre', user.nombre);
        formData.append('nacimiento_hora', user.nacimiento_hora);
        formData.append('nacimiento_dia', user.nacimiento_dia);
        formData.append('nacimiento_mes', user.nacimiento_mes);
        formData.append('nacimiento_ano', user.nacimiento_ano);
        formData.append('nacimiento_ciudad', user.nacimiento_ciudad);
        formData.append('genero_mostrar', user.genero_mostrar);
        formData.append('genero_identifica', user.genero_identifica);
        formData.append('genero_interes', user.genero_interes);
        formData.append('foto', '');
        formData.append('acerca', user.acerca);
        formData.append('rango_edad', user.rango_edad);
        formData.append('app', user.app);

        response = await postUserFormData(formData);
        console.log(response)

        if (response.status >= 200 && response.status <= 400) {
            setCookie("User", JSON.stringify(response.data));
            await setUserLogin(response.data);
            window.location.href = "/bienvenida";
        } else {
            console.log(response)
            showAlert('error', 'Error!', cadena.txtFormSiete1[languageText])
        }



    }

    const handleBack = () => {
        refForm7.current.classList.add("hidden")
        refForm6.current.classList.remove("hidden")
    }


    return (
        <Modal id="box-form-7" ref={refForm7}>
            <div className="relative inline-block overflow-hidden mb-2">
                <h3 className={`${CLASSES.h3} pb-2`}>{cadena.txtFormDos1[languageText]}</h3>
            </div>
            <div
                className="flex w-[100%] md:w-[750px] border-[1.5px] border-white bg-white py-4 px-4 rounded-[25px]"
            >
                <div className="w-full">
                    <div className="flex flex-col text-center justify-center mb-3">
                        <div className="flex flex-col px-4 gap-2">
                            {/* <div ref={refAlertForm}></div> */}
                            <div
                                className="flex w-full text-left md:text-center justify-start md:justify-center"
                            >
                                <CheckBoxPro
                                    id="chkPersonalData"
                                    text={cadena.txtFormSiete2[languageText]}
                                    form={form}
                                    setForm={setForm}
                                />
                            </div>
                            <div
                                className="flex w-full text-left md:text-center justify-start md:justify-center"
                            >
                                <CheckBoxPro
                                    id="chkTerms"
                                    text={cadena.txtFormSiete3[languageText]}
                                    form={form}
                                    setForm={setForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-center mt-8">
                <div className="flex mr-4">
                    <PrimaryButton type="btnSecondaryTwo" id="btnBack7" onClick={handleBack}>
                        {cadena.txtBtnBack[languageText]}
                    </PrimaryButton>
                </div>
                <PrimaryButton type="btnSecondary" id="btnNext7" onClick={handleEnd}>
                    {cadena.txtBtnEnd[languageText]}
                </PrimaryButton>
            </div>
        </Modal>
    );
}

export default Form7;