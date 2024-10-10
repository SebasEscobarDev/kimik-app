import bgScreen from "@/assets/images/backgrounds/pc/1.webp";
import bgScreen2 from "@/assets/images/backgrounds/pc/2.webp";
import bgScreen3 from "@/assets/images/backgrounds/pc/3.webp";
import bgScreen4 from "@/assets/images/backgrounds/pc/4.webp";
import bgScreen5 from "@/assets/images/backgrounds/pc/5.webp";
import bgScreen6 from "@/assets/images/backgrounds/pc/6.webp";
import bgScreen7 from "@/assets/images/backgrounds/pc/7.webp";
import bgScreen8 from "@/assets/images/backgrounds/pc/8.webp";
import bgScreen9 from "@/assets/images/backgrounds/pc/9.webp";
import bgScreen10 from "@/assets/images/backgrounds/pc/10.webp";
import bgScreenMobile from "@/assets/images/backgrounds/mobile/1.webp";
import bgScreenMobile2 from "@/assets/images/backgrounds/mobile/2.webp";
import bgScreenMobile3 from "@/assets/images/backgrounds/mobile/3.webp";
import bgScreenMobile4 from "@/assets/images/backgrounds/mobile/4.webp";
import bgScreenMobile5 from "@/assets/images/backgrounds/mobile/5.webp";
import bgScreenMobile6 from "@/assets/images/backgrounds/mobile/6.webp";
import bgScreenMobile7 from "@/assets/images/backgrounds/mobile/7.webp";
import bgScreenMobile8 from "@/assets/images/backgrounds/mobile/8.webp";
import bgScreenMobile9 from "@/assets/images/backgrounds/mobile/9.webp";
import bgScreenMobile10 from "@/assets/images/backgrounds/mobile/10.webp";
import { useEffect, useRef, useState } from "react";
import { useGlobal } from "@/context/GlobalContext";
import { getCookie, setCookie } from "@/utils/cookies";
import { showAlert } from "@/utils/swalert";
import { loginUser, postUser } from "@/api/users";
import { useForm } from "@/context/FormContext";
import { cadena } from "@/consts";


//colores
const bgPrimary = 'bg-[#7c69ba]', //morado
    bgSecondary = 'bg-[#FFCC00]', //amarillo
    bgWhite = 'bg-white',
    txtWhite = 'text-white',
    txtBlack = 'text-black';

const useSigin = () => {

    const { showModalSigin, setShowModalSigin, setUserLogin, languageText } = useGlobal();

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        if (window.location.pathname !== "/") return;

        const imagesPc = [
            `url(${bgScreen2.src})`,
            `url(${bgScreen3.src})`,
            `url(${bgScreen4.src})`,
            `url(${bgScreen5.src})`,
            `url(${bgScreen6.src})`,
            `url(${bgScreen7.src})`,
            `url(${bgScreen8.src})`,
            `url(${bgScreen9.src})`,
            `url(${bgScreen10.src})`,
            `url(${bgScreen.src})`,
        ];

        const imagesMobile = [
            `url(${bgScreenMobile2.src})`,
            `url(${bgScreenMobile3.src})`,
            `url(${bgScreenMobile4.src})`,
            `url(${bgScreenMobile5.src})`,
            `url(${bgScreenMobile6.src})`,
            `url(${bgScreenMobile7.src})`,
            `url(${bgScreenMobile8.src})`,
            `url(${bgScreenMobile9.src})`,
            `url(${bgScreenMobile10.src})`,
            `url(${bgScreenMobile.src})`,
        ];

        const images = window.innerWidth > 767 ? imagesPc : imagesMobile;
        const ref = window.innerWidth > 767 ? "bg-fullpc" : "bg-mobile";

        const changeBackground = () => {
            const element = document.getElementById(ref);
            if (!element) return;
            element.style.transition = "background-image 0.5s ease-in-out";
            element.style.backgroundImage = images[currentIndex];
            setCurrentIndex((currentIndex + 1) % images.length);
            setTimeout(() => {
                element.style.transition = "";
            }, 500);
        };

        const intervalId = setInterval(changeBackground, 3000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);


    const { refModalLogin,
        refBtnSigin,
        refH3Title,
        refForgiven,
        refDivRegister,
        refDivForgiven,
        refTxtEmailForgiven,
        refTxtUser,
        refTxtPassword,
        refTxtPassConfirm,
        refAlertForm,
        refDescriptionForm,
        refForm1,
        refForm2,
        refForm3,
        refForm4,
        refForm6,
        refForm7 } = useForm();



    const handleModalLoginReact = () => {
        setShowModalSigin(true);
        refModalLogin.current.classList.remove("oculto");
        refForm1.current.classList.remove("hidden")
        if (Array.from(refForm1.current.children[2].classList).includes(bgSecondary)) {
            refForm1.current.children[2].classList.remove(bgSecondary)
        }
        if (!Array.from(refForm1.current.children[2].classList).includes(bgPrimary)) {
            refForm1.current.children[2].classList.add(bgPrimary)
        }

        if (Array.from(refBtnSigin.current.classList).includes(bgWhite)) {
            refBtnSigin.current.classList.remove(bgWhite)
        }
        if (Array.from(refBtnSigin.current.classList).includes(bgPrimary)) {
            refBtnSigin.current.classList.remove(bgPrimary)
        }
        if (!Array.from(refBtnSigin.current.classList).includes(bgSecondary)) {
            refBtnSigin.current.classList.add(bgSecondary)
        }
        if (Array.from(refBtnSigin.current.classList).includes(txtWhite)) {
            refBtnSigin.current.classList.remove(txtWhite)
        }
        if (!Array.from(refBtnSigin.current.classList).includes(txtBlack)) {
            refBtnSigin.current.classList.add(txtBlack)
        }

        if (Array.from(refH3Title.current.classList).includes(txtBlack)) {
            refH3Title.current.classList.remove(txtBlack)
        }
        if (!Array.from(refH3Title.current.classList).includes(txtWhite)) {
            refH3Title.current.classList.add(txtWhite)
        }

        if (Array.from(refForgiven.current.classList).includes('hidden')) {
            refForgiven.current.classList.remove('hidden')
        }

        const TXT = cadena.txtFormUno1[languageText]
        refBtnSigin.current.innerHTML = TXT
        refH3Title.current.innerHTML = TXT
        //pintar texto descriptivo
        if (Array.from(refDescriptionForm.current.classList).includes(txtBlack)) {
            refDescriptionForm.current.classList.remove(txtBlack)
        }
        if (!Array.from(refDescriptionForm.current.classList).includes(txtWhite)) {
            refDescriptionForm.current.classList.add(txtWhite)
        }

        //ocultar passconfirm
        if (!refTxtPassConfirm.current.classList.contains("hidden"))
            refTxtPassConfirm.current.classList.add("hidden");
    }

    const handleModalSiginReact = () => {
        console.log('click sigin')
        refForm1.current.classList.remove("hidden")
        refModalLogin.current.classList.remove("oculto");
        setShowModalSigin(true);
        if (Array.from(refForm1.current.children[2].classList).includes(bgPrimary)) {
            refForm1.current.children[2].classList.remove(bgPrimary)
        }
        if (!Array.from(refForm1.current.children[2].classList).includes(bgSecondary)) {
            refForm1.current.children[2].classList.add(bgSecondary)
        }

        if (Array.from(refBtnSigin.current.classList).includes(bgSecondary)) {
            refBtnSigin.current.classList.remove(bgSecondary)
        }
        if (Array.from(refBtnSigin.current.classList).includes(bgPrimary)) {
            refBtnSigin.current.classList.remove(bgPrimary)
        }
        if (!Array.from(refBtnSigin.current.classList).includes(bgWhite)) {
            refBtnSigin.current.classList.add(bgWhite)
        }
        if (Array.from(refBtnSigin.current.classList).includes(txtWhite)) {
            refBtnSigin.current.classList.remove(txtWhite)
        }
        if (!Array.from(refBtnSigin.current.classList).includes(txtBlack)) {
            refBtnSigin.current.classList.add(txtBlack)
        }

        if (Array.from(refH3Title.current.classList).includes(txtWhite)) {
            refH3Title.current.classList.remove(txtWhite)
        }
        if (!Array.from(refH3Title.current.classList).includes(txtBlack)) {
            refH3Title.current.classList.add(txtBlack)
        }

        if (!Array.from(refForgiven.current.classList).includes('hidden')) {
            refForgiven.current.classList.add('hidden')
        }

        const TXT = cadena.txtBtnRegistrar[languageText]
        refBtnSigin.current.innerHTML = TXT
        refH3Title.current.innerHTML = TXT
        //pintar texto descriptivo
        if (Array.from(refDescriptionForm.current.classList).includes(txtWhite)) {
            refDescriptionForm.current.classList.remove(txtWhite)
        }
        if (!Array.from(refDescriptionForm.current.classList).includes(txtBlack)) {
            refDescriptionForm.current.classList.add(txtBlack)
        }
        //mostrar passconfirm
        if (refTxtPassConfirm.current.classList.contains("hidden"))
            refTxtPassConfirm.current.classList.remove("hidden");
    }

    function checkPasswordMatchReact() {
        if (refTxtPassword.current.value !== refTxtPassConfirm.current.value) {
            refTxtPassConfirm.current.style.border = '1px solid #da415d';
            refAlertForm.current.innerHTML = "<p style='color:#da415d'>Las contraseñas deben coincidir!</p>";
            return;
        } else {
            refTxtPassConfirm.current.style.border = 'none';
            refAlertForm.current.innerHTML = "";
        }
    }

    function checkUserReact() {
        // Expresión regular para validar el formato de un correo electrónico
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const inputValue = this.value;

        // Validar el valor del <input> con la expresión regular
        if (emailRegex.test(inputValue)) {
            refAlertForm.current.textContent = "Correo electrónico válido";
            refAlertForm.current.style.color = "#69ba69";
            refTxtUser.current.style.border = "1px solid #69ba69"
            refTxtUser.current.style.color = 'black';
        } else {
            refAlertForm.current.textContent = "Correo electrónico inválido";
            refAlertForm.current.style.color = "#da415d";
            refTxtUser.current.style.border = "1px solid #da415d";
            refTxtUser.current.style.color = '#da415d';
        }
    }


    const handleSigin = async () => {
        const login = refTxtPassConfirm.current.classList.contains("hidden") ? true : false;

        try {

            //validar si los campos estan vacios, mostrar alerta
            //LOGIN
            if (refTxtUser.current.value == '' || refTxtPassword.current.value == '') {
                return showAlert('error', 'Error!', cadena.txtFormDos12[languageText])
            }
            //REGISTER
            if (!login) {
                if (refTxtPassConfirm.current.value == '') {
                    return showAlert('error', 'Error!', cadena.txtFormDos12[languageText])
                }
                if (refTxtPassword.current.value !== refTxtPassConfirm.current.value) {
                    showAlert('error', 'Error!', cadena.txtPassMatch[languageText])
                    refTxtPassConfirm.current.style.border = '1px solid #da415d';
                    refTxtPassConfirm.current.style.color = '#da415d';
                    refAlertForm.current.innerHTML = "<p style='color:#da415d'>" + cadena.txtPassMatch[languageText] + "</p>";
                    return;
                } else {
                    refTxtPassConfirm.current.style.border = 'none';
                    refAlertForm.current.innerHTML = "";
                }
            }

            let response;
            if (login) {
                response = await loginUser({
                    email: refTxtUser.current.value,
                    password: refTxtPassword.current.value,
                });

            } else {
                response = await postUser({
                    email: refTxtUser.current.value,
                    password: refTxtPassword.current.value,
                });
            }

            if (response.status >= 200 && response.status <= 400) {
                setCookie("AuthToken", response.data.token);
                setCookie("User", JSON.stringify(response.data.user));
                await setUserLogin(response.data.user);
            }

            if (login) {
                if (response.status >= 200 && response.status <= 400) {

                    const userLogged = JSON.parse(getCookie("User"));
                    if (userLogged.nombre === null || userLogged.nombre === undefined) {
                        setShowModalSigin(true);
                        refForm1.current.classList.add("hidden");
                        refForm2.current.classList.remove("hidden");
                    } else {
                        //validate user selected app
                        console.log(userLogged.app)
                        const app = userLogged?.app ? userLogged.app : null;
                        if (app && app == 'Pareja') {
                            window.location.href = "/pareja/registro";
                        } else if (app && app == 'Citas') {
                            window.location.href = "/citas/blop";
                        } else {
                            //no se identifico app seleccionada
                            window.location.href = "/";
                        }
                    }
                } else {
                    showAlert('error', 'Error!', cadena.txtFailLogin[languageText])
                }
            } else {
                //ocultar form-1 y mostrar form-2
                if (response.status >= 200 && response.status <= 400) {
                    refForm1.current.classList.add("hidden")
                    refForm2.current.classList.remove("hidden")
                } else {
                    let messageResponse = '';
                    if (response.status >= 400) {
                        if (response.data[0].validatorKey == 'not_unique')
                            messageResponse = cadena.txtEmailExist[languageText];
                    } else {
                        messageResponse = cadena.txtSignUpFail[languageText];
                    }
                    showAlert('error', 'Error!', messageResponse)

                }
            }

        } catch (e) {
            showAlert('error', 'Error!', cadena.txtApiFail[languageText])
            console.log(e)
        }
    }

    return { bgScreen, bgScreenMobile, handleSigin, refBtnSigin, refH3Title, refForgiven, refDivRegister, refDivForgiven, refTxtEmailForgiven, refTxtUser, refTxtPassword, refTxtPassConfirm, refAlertForm, refDescriptionForm, refForm1, refForm2, refForm3, refForm4, refForm6, refForm7, handleModalLoginReact, handleModalSiginReact, checkUserReact, checkPasswordMatchReact }
};
export default useSigin;