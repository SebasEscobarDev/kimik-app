
import bgFondo from "@/assets/images/fondo.webp";
import bgWhite from "@/assets/images/bg-white.webp";
import srcFacebook from "@/assets/svgs/facebook.svg";
import srcInstagram from "@/assets/svgs/instagram.svg";

import ChatKimik from "./ChatKimik";
import ChatUser from "./ChatUser";
import ChatMenuLeft from "./ChatMenuLeft";
import srcClose from "@/assets/svgs/close.svg";
import HeaderPrincipal from "@/components/menu/HeaderPrincipal";
import "@/styles/ChatWindow.css";
import { useGlobal } from "@/context/GlobalContext"
import { useEffect, useState } from "react";
import { getCookie } from "@/utils/cookies";
import { cadena } from "@/consts";

const ChatWindow = () => {

    const { refDivChat, refDivKimik, refHeaderButtons, refDivCloseKimik, refBtnCloseKimik } = useGlobal();

    const handleCloseKimik = () => {
        refDivChat.current.classList.remove("md:w-3/5");
        refDivChat.current.classList.add("md:w-4/5");
        refDivKimik.current.classList.add("hidden");
        refHeaderButtons.current.classList.add("w-full");
        refHeaderButtons.current.classList.remove("w-4/5");
        refDivCloseKimik.current.classList.add("hidden");
    }

    useEffect(() => {
        const auth = getCookie("AuthToken");
        const user = getCookie("User");
        if (auth != undefined && user != undefined) {
        } else {
            window.location.href = "/";
        }
    }, []);

    const { mode, languageText } = useGlobal();
    const [srcImg, setSrcImg] = useState(bgFondo.src);
    useEffect(() => {
        setSrcImg(mode === 'dark' ? bgFondo.src : bgWhite.src);
    }, [mode]);

    return (
        <div
            style={{ backgroundColor: 'white', backgroundImage: `url(${srcImg})` }}
            className="flex flex-col items-start h-screen w-full min-h-screen md:p-10 bg-contain"
        >
            <div className="flex w-full">
                <HeaderPrincipal id="headerButtons" back={true} refBtn={refHeaderButtons} />
                <div
                    ref={refDivCloseKimik}
                    id="divCloseKimik"
                    className="hidden w-1/5 flex justify-end transition-all"
                >
                    <button type="button" id="btnCloseKimik" ref={refBtnCloseKimik} onClick={handleCloseKimik}>
                        <img src={srcClose.src} width={45} alt="Close" />
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row min-h-[85%] max-h-[85%]">
                <ChatMenuLeft />
                <ChatUser />
                <ChatKimik />
            </div>

            <div className="flex w-full justify-center py-2">
                <h4 className="text-white">{cadena.txtCopyrigth[languageText]} 2024</h4>
                <img src={srcInstagram.src} width={20} alt="Instagram" className="ml-2" />
                <img src={srcFacebook.src} width={20} alt="Facebook" className="ml-2" />
            </div>
        </div>
    )
};

export default ChatWindow;
