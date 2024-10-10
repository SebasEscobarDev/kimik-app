import srcNotifyIcon from "@/assets/images/notify_icon.png";
import { cadena, CLASSES } from "@/consts";
import { useGlobal } from "@/context/GlobalContext";
import { useWebsite } from "@/context/WebsiteContext";
import { useEffect, useState } from "react";
// import Splash from "./Splash";


const Dos = ({ page }) => {

    const { current, setCurrent, accordeon, principal, oculto } = useWebsite();
    const [classes, setClasses] = useState(principal);

    const { languageText } = useGlobal();

    useEffect(() => {
        if (current === page) {
            setClasses(principal);
        } else if (current > page) {
            setClasses(accordeon);
        } else {
            setClasses(oculto);
        }
    }, [current]);

    return (
        <div className={`${current === page ? 'container mx-auto' : 'z-40'}`}>
            <div id="section-dos" className={`${classes} dev-card flex pb-10 gap-10 h-[80vh] transition-all`}>
                <button type="button" onClick={() => setCurrent(page)} className={`${current === page ? '' : 'h-[65vh] mt-[5.5vh]'} bg-gray-500 flex flex-col items-center justify-center text-center rounded-[25px] w-full`}>
                    <span className="relative w-full text-right">
                        <span className="absolute shadow-black shadow-2xl rounded-full w-[90px] h-[90px] right-[-25px] top-[-120px]">
                            <img src={srcNotifyIcon.src} className="w-[90px]" alt="Chat Icon" />
                        </span>
                    </span>
                    <h1 className={`${CLASSES.textPrimary} text-8xl pop-bold w-[550px]`}>{cadena.txtWebDos1[languageText]}</h1>
                    <h1 className={`${CLASSES.textPrimary} text-8xl pop-bold w-[550px]`}>{cadena.txtWebDos2[languageText]}</h1>
                    <h1 className={`${CLASSES.textPrimary} text-8xl pop-bold w-[550px]`}>{cadena.txtWebDos3[languageText]}</h1>
                    <span className="text-2xl text-left mr-16 mt-[-10px] text-white">{cadena.txtWebDos4[languageText]}</span>
                </button>
                <button type="button" onClick={() => setCurrent(page)} className={`${current === page ? '' : 'h-[60vh] mt-[8vh]'} bg-black flex flex-col items-center justify-center rounded-[25px] w-full text-center gap-8`}>
                    <div className="p-20">
                        <h2 className="w-full text-left text-white text-[26px] leading-[34px] pop-light">{cadena.txtWebDos5[languageText]}</h2>
                        <h2 className="w-full text-left text-white text-3xl">{cadena.txtWebDos6[languageText]}</h2>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Dos;
