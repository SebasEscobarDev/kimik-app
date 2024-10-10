import srcLogo from "@/assets/images/logo2.webp";
import { cadena, CLASSES } from "@/consts";
import { useGlobal } from "@/context/GlobalContext";
import { useWebsite } from "@/context/WebsiteContext";
import srcLogoWhite from "@/assets/images/logo_white.png";
import { useEffect, useState } from "react";

const MenuWebsite = () => {
    const { current, setCurrent } = useWebsite();
    const { mode, textClass, borderClass, imgClass, languageText } = useGlobal();

    const [show, setShow] = useState('');
    const [show2, setShow2] = useState('');
    useEffect(() => {
        setShow(mode === 'light' ? 'hidden' : '');
        setShow2(mode === 'dark' ? 'hidden' : '');
    }, [mode]);
    return (
        <>
            <a href="/" className="relative z-50 w-[110px] inline-block overflow-hidden mr-20">
                <img src={srcLogo.src} className={`min-w-[200px] ${show2} invert`} alt="Logo" />
                <img src={srcLogoWhite.src} width={200} alt="Logo Kimik" className={`${show}`} />
            </a>
            <div className="menu-website">
                <ul className={`flex ${textClass} gap-20 text-2xl`}>
                    <li><button type="button" onClick={() => setCurrent(1)}>{cadena.txtInicio[languageText]}</button></li>
                    <li><button type="button" onClick={() => setCurrent(2)}>{cadena.txtNosotros[languageText]}</button></li>
                    <li><button type="button" onClick={() => setCurrent(3)}>{cadena.txtComencemos[languageText]}</button></li>
                    <li><button type="button" onClick={() => setCurrent(4)}>{cadena.txtDescarga[languageText]}</button></li>
                    <li><button type="button" onClick={() => setCurrent(5)} className={`pop-bold ${textClass} text-4xl`}>kimik</button></li>
                </ul>
            </div>
            <div className="flex btns-top gap-5">
                <a href="/#iniciar-sesion" className={`inline-block text-center relative p-1 border ${borderClass} rounded-[100px] min-w-[180px]`}>
                    <span className={`inline-block ${CLASSES.bgSecondary} text-white rounded-[50px] w-full px-4 py-3`}>
                        <b>{cadena.txtSigin[languageText]}</b>
                    </span>
                </a>
                <a href="/#registro" className={`inline-block text-center relative p-1 border-[1.5px] ${borderClass} rounded-[50px] min-w-[180px]`}>
                    <span className={`inline-block ${CLASSES.bgPrimary} text-black rounded-[50px] w-full px-4 py-3`}>
                        <b>{cadena.txtUnirte[languageText]}</b>
                    </span>
                </a>
            </div>
        </>
    )
}

export default MenuWebsite;