import { Image } from "astro:assets";

import bgFondo from "@/assets/images/bg-welcome-1.webp";
import bgFondo2 from "@/assets/images/bg-welcome-2.webp";
import srcLogo from "@/assets/images/logo2.webp";
import srcFacebook from "@/assets/svgs/facebook.svg";
import srcInstagram from "@/assets/svgs/instagram.svg";

import { cadena, CLASSES } from "@/consts";
import { useEffect, useState } from "react";
import { getCookie } from "@/utils/cookies";

import bgFondoo from "@/assets/images/fondo.webp";
import bgWhite from "@/assets/images/bg-white.webp";
import { useGlobal } from "@/context/GlobalContext";

const Welcome = () => {
    useEffect(() => {
        const auth = getCookie("AuthToken");
        const user = getCookie("User");
        if (auth != undefined && user != undefined) {

            let redirect = '';

            //validate user selected app
            const app = user ? JSON.parse(user).app : null;
            if (app && app == 'Pareja') {
                redirect = "/pareja/registro";
            } else if (app && app == 'Citas') {
                redirect = "/citas/blop";
            } else {
                //no se identifico app seleccionada
                redirect = "/";
            }

            setTimeout(() => {
                window.location.href = redirect;
            }, 2000);
        } else {
            window.location.href = "/";
        }
    }, []);
    const { mode, languageText } = useGlobal();
    const [srcImg, setSrcImg] = useState(bgFondoo.src);
    useEffect(() => {
        setSrcImg(mode === 'dark' ? bgFondoo.src : bgWhite.src);
    }, [mode]);

    return (
        <div
            style={{ backgroundColor: 'white', backgroundImage: `url(${srcImg})` }}
            className="flex flex-col w-full min-h-screen py-12 items-center justify-between text-center bg-contain"
        >
            <div style={{ backgroundImage: `url(${bgFondo2.src})` }} className="flex animar-welcome absolute bg-contain top-0 w-full min-h-screen"></div>
            <img src={srcLogo.src} width={300} alt="Logo Kimik" className="animar-opacidad" />
            <h1
                className={`${CLASSES.textPrimary} animar-opacidad text-5xl md:text-8xl pop-bold italic uppercase`}
            >
                {cadena.txtWelcome[languageText]}
            </h1>
            <div className="flex">
                <h4 className="text-white">{cadena.txtCopyrigth[languageText]} 2024</h4>
                <img src={srcInstagram.src} width={20} alt="Instagram" className="ml-2" />
                <img src={srcFacebook.src} width={20} alt="Facebook" className="ml-2" />
            </div>
        </div>
    );
}

export default Welcome;