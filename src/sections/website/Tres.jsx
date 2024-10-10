import srcNotifyIcon from "@/assets/images/notify_icon.png";
import { cadena, CLASSES } from "@/consts";
import { useWebsite } from "@/context/WebsiteContext";
import srcLogo from "@/assets/images/logo.webp";
import srcIos from "@/assets/images/download-ios.png";
import srcAndroid from "@/assets/images/download-android.png";
import HeartSvg from "@/components/svgs/HeartSvg";
import { useEffect, useState } from "react";
import { useGlobal } from "@/context/GlobalContext";
// import Splash from "./Splash";


const Tres = ({ page }) => {

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
        <div className={`${current === page ? 'container mx-auto' : 'z-30'}`}>
            <div id="section-cuatro" className={`${classes} dev-card flex pb-10 gap-10 h-[80vh] transition-all`}>
                <button type="button" onClick={() => setCurrent(page)} className={`${CLASSES.bgSecondary} ${current === page ? '' : 'h-[55vh] mt-[10.5vh]'} flex flex-col items-center justify-center text-center rounded-[25px] w-full`}>
                    <h1 className="text-[#fca001] text-8xl pop-bold">{cadena.txtWebTres1[languageText]}</h1>
                    <h1 className="text-[#fca001] text-8xl pop-bold">{cadena.txtWebTres2[languageText]}</h1>
                    <h1 className={`${CLASSES.textPrimary} text-8xl pop-bold`}>{cadena.txtWebTres3[languageText]}</h1>
                    <span className="text-3xl text-left text-white mb-20">{cadena.txtWebTres4[languageText]}</span>
                    <span className={`inline-block relative p-1 border-[1.5px] border-white rounded-[50px] min-w-[180px]`}>
                        <span className={`inline-block bg-white text-black rounded-[50px] w-full px-4 py-3 text-1xl`}>
                            <b>{cadena.txtWebTres5[languageText]}</b>
                        </span>
                    </span>
                </button>
            </div>
        </div >
    )
}

export default Tres;
