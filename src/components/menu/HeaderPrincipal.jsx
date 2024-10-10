import srcBack from "@/assets/images/back.png";
import srcSettings from "@/assets/images/settings.png";
import { useRef, useState } from "react";
import socket from "@/utils/socket";
import { setCookie } from "@/utils/cookies";
import { useGlobal } from "@/context/GlobalContext";
import { cadena } from "@/consts";


const HeaderPrincipal = ({ id, back, refBtn }) => {

    const justify = back ? "justify-between" : "justify-end";

    const handleLogout = () => {
        setCookie("AuthToken", "");
        setCookie("User", "");
        socket.disconnect();
        window.location.href = "/";
    };

    const { setShowModalSettings, showModalSettings, bgClass4, borderClass, textClass, imgClass, setVentanaUser, ventanaUser, isMobile, languageText } = useGlobal();

    return (

        <header id={id} ref={refBtn} className={`${justify} w-full flex pl-4 md:pl-0 pr-4 md:pr-0 mt-4 md:mt-0 mb-4 transition-all`}>
            {
                back && (
                    <a type="button" className="icon-left" href="/citas/blop">
                        <img className={imgClass} src={srcBack.src} width={45} alt="Volver" />
                    </a>
                )
            }
            {/* {
                back && ventanaUser == 2 && (
                    <button type="button" className="icon-left" onClick={() => { setVentanaUser(1) }}>
                        <img className={imgClass} src={srcBack.src} width={45} alt="Volver" />
                    </button>
                )
            }
            {
                back && ventanaUser == 3 && (
                    <button type="button" className="icon-left" onClick={() => { setVentanaUser(2) }}>
                        <img className={imgClass} src={srcBack.src} width={45} alt="Volver" />
                    </button>
                )
            } */}
            {
                back === false && (
                    <div className="w-full text-left">
                        <div className="inline-block">
                            <a id="btnLogout" onClick={handleLogout} type="button" className={`${bgClass4} border ${borderClass} flex boder-white rounded-[15px] items-center`} href="/"><span className={`px-4 py-2 pop-regular ${textClass}`}>{cadena.txtLogout[languageText]}</span></a>
                        </div>
                    </div>
                )
            }
            <button id="btnModalSettings" type="button" className="flex relative flex-row-reverse w-[47px] align-right" onClick={() => setShowModalSettings(!showModalSettings)}>
                <img
                    className={imgClass}
                    src={srcSettings.src}
                    width={45}
                    alt="Configuraciones"
                />
            </button>
        </header>
    );
}

export default HeaderPrincipal;
