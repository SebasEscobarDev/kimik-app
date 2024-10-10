import srcChatIcon from "@/assets/images/chat_icon.png";
import { cadena, CLASSES } from "@/consts";
import { useGlobal } from "@/context/GlobalContext";
import { useWebsite } from "@/context/WebsiteContext";
import { useEffect, useState } from "react";
// import Splash from "./Splash";


const Home = ({ page }) => {

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
        <div className={`${current === page ? 'container mx-auto' : 'flex z-50'}`}>
            <div id="section-home" className={`${classes} dev-card flex pb-10 gap-10 h-[80vh] transition-all`}>
                <button type="button" onClick={() => setCurrent(page)} className={`${CLASSES.bgSecondary} flex flex-col items-center justify-center rounded-[25px] w-full`}>
                    <span className="relative w-full">
                        <span className="absolute shadow-black shadow-2xl rounded-full w-[90px] h-[90px] left-[-35px] top-[-120px]">
                            <img src={srcChatIcon.src} className="w-[90px]" alt="Chat Icon" />
                        </span>
                    </span>
                    <h1 className={`${CLASSES.textPrimary} text-8xl pop-bold w-[550px]`}>{cadena.txtWebUno1[languageText]}</h1>
                    <span className="text-2xl text-left mr-20 text-white">{cadena.txtSigin2[languageText]}</span>
                </button>
                <button type="button" onClick={() => setCurrent(page)} className={`${current === page ? '' : 'h-[70vh] mt-[3vh]'} bg-[#fca001] flex flex-col items-center justify-center rounded-[25px] w-full text-center gap-1`}>
                    <h1 className="text-9xl text-[#dd4369] italic pop-bold">Nock</h1>
                    <h1 className="text-9xl text-[#dd4369] italic pop-bold">Nock</h1>
                    <h1 className="text-9xl text-[#dd4369] italic pop-bold">Nock</h1>
                    <span className="w-full text-center text-black text-2xl">{cadena.txtWebUno2[languageText]}</span>
                </button>
            </div>
        </div>
    )
}

export default Home;
