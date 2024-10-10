import { cadena, CLASSES } from "@/consts";

import srcClose from "@/assets/svgs/close.svg";
import srcLight from "@/assets/svgs/light-mode.svg";
import srcDark from "@/assets/svgs/dark-mode.svg";
import { useGlobal } from "@/context/GlobalContext";
import Smile2Svg from "@/components/svgs/Smile2Svg";
import { useEffect, useState } from "react";
import { getCookie } from "@/utils/cookies";
import { putUser } from "@/api/users";

const idiomas = {
    es: {
        title: "Español",
        subtitle: "Spanish",
    },
    en: {
        title: "Inglés",
        subtitle: "English (USA)",
    },
    pt: {
        title: "Portugues",
        subtitle: "Portuguese (Brasil)",
    },
};

const ModalSettings = ({ home }) => {
    const { showModalSettings, setShowModalSettings, userLogin, mode, setMode } = useGlobal();


    const [showApps, setShowApps] = useState(false);

    useEffect(() => {
        const user = getCookie("User");
        if (user == undefined) return;
        if (JSON.parse(user)?.app == undefined) return;
        const app = JSON.parse(user).app;
        if (app == undefined) return;
        setShowApps(true);
    }, [userLogin]);

    async function handleModoApp(title) {
        const user = getCookie("User");
        if (user == undefined) return;
        const id = JSON.parse(user).id;
        console.log(title)
        if (id == undefined) return;
        const response = await putUser({
            id,
            app: title
        });
        console.log(response)
        if (response.status >= 200 && response.status <= 400) {
            if (title == 'Pareja') {
                window.location.href = "/pareja/registro";
            } else if (title == 'Citas') {
                window.location.href = "/citas/blop";
            } else {
                //no se identifico app seleccionada
                window.location.href = "/";
            }
        }
    }

    const { imgClass,
        bgClass,
        bgClass2,
        bgClass4,
        textClass,
        textClass2,
        borderClass,
        hoverClass,
        color,
        borderActive,
        borderActive2,
        languageText,
        setLanguageText } = useGlobal();

    return (
        <div
            id="modalSettings"
            className={`${showModalSettings ? '' : 'oculto'} ${bgClass} fixed flex z-50 w-full left-0 top-0 min-h-screen px-4 md:px-5 justify-end`}
        >
            <div className={`flex ${home ? 'pr-0 md:pr-[250px]' : 'pr-[10px]'}`}>
                <div className="relative py-10 transition-all">
                    <div className="flex justify-end">
                        <button id="btnCloseSettings" onClick={() => setShowModalSettings(!showModalSettings)} className="mr-2">
                            <img src={srcClose.src} width={45} alt="Close" className={`relative ${imgClass}`} />
                        </button>
                    </div>
                    <div
                        className={`${bgClass} flex flex-col w-[100%] md:w-[700px] border ${borderClass} ${textClass} py-6 md:py-12 px-6 md:px-10 rounded-[25px] mt-5`}
                    >
                        <div className="flex flex-row justify-normal w-full">
                            <div className="inline-block w-[75%] pr-4 mt-0 order-first">
                                <h3 className={`${CLASSES.h3} text-left md:text-left pb-2 md:pb-4 border-b-2 ${borderClass} ${textClass}`}>
                                    {cadena.txtSettings[languageText]}
                                </h3>
                                <div className="grid grid-cols-3 pt-4">
                                    {Object.keys(idiomas).map((idioma) => (
                                        <button
                                            key={idioma}
                                            data-lan={idioma}
                                            onClick={() => setLanguageText(idioma)}
                                            className={`flex flex-col text-left py-2 language ${hoverClass} rounded`}
                                        >
                                            <h5 className={`${CLASSES.h5} ${textClass}`}>{idiomas[idioma].title}</h5>
                                            <h6 className={`${CLASSES.h6} ${textClass} opacity-50`}>{idiomas[idioma].subtitle}</h6>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="inline-block w-[25%] pl-0 order-last">
                                <h3
                                    className={`${CLASSES.h3} ${borderClass} ${textClass} text-right md:pl-10 pb-2 md:pb-4 border-b-2`}
                                >
                                    {cadena.txtSettings2[languageText]}
                                </h3>
                                <div className="grid grid-cols-2 gap-2 text-right pt-2">
                                    <button
                                        onClick={() => setMode('light')}
                                        className={`flex flex-col pt-2 items-center ${borderActive} ${hoverClass} rounded`}
                                    >
                                        <img
                                            src={srcLight.src}
                                            width={30}
                                            className="bg-white rounded-full p-[6px] mb-2"
                                            alt="Light Mode"
                                        />
                                        <h6 className={`${CLASSES.h6} ${textClass}`}>{cadena.txtSettings3[languageText]}</h6>
                                    </button>
                                    <button
                                        onClick={() => setMode('dark')}
                                        className={`flex flex-col pt-2 items-center ${borderActive2} ${hoverClass} rounded`}
                                    >
                                        <img
                                            src={srcDark.src}
                                            width={30}
                                            className={`bg-black border ${borderClass} rounded-full p-[6px] mb-2`}
                                            alt="Dark Mode"
                                        />
                                        <h6 className={`${CLASSES.h6} ${textClass}`}>{cadena.txtSettings4[languageText]}</h6>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {showApps && (
                            <div className="flex justify-normal pt-4 w-full">
                                <div className="inline-block w-full md:w-[75%] pr-4">
                                    <h3 className={`${CLASSES.h3} pb-4 border-b-2 ${textClass} ${borderClass}`}>
                                        {cadena.txtSettings5[languageText]}
                                    </h3>
                                    <div className="grid grid-cols-3 gap-6 pt-6 max-w-full">
                                        {Object.keys(cadena.aplicaciones[languageText]).map((key) => (
                                            <button
                                                key={key}
                                                onClick={() => handleModoApp(cadena.aplicaciones[languageText][key].title)}
                                                className={`btn-apps flex flex-col p-2 md:p-3 text-center justify-center ${bgClass2} ${textClass2} hover:bg-[#FFCC00] border-[1.5px] border-white rounded-2xl`}
                                            >
                                                <span className="pop-semi w-full">
                                                    {cadena.aplicaciones[languageText][key].title}
                                                </span>
                                                <div>
                                                    <div className={`absolute apps-hover left-0 flex w-full max-w-lg mt-12 ${bgClass4} rounded-2xl py-4 px-6 text-sm border-[1.5px] ${textClass} ${borderClass}`}>
                                                        <span className="bg-[#FFCC00] rounded-full p-[5px] mr-6 h-[45px]">
                                                            <Smile2Svg width={'35px'} height={'35px'} color={`${color}`} />
                                                        </span>
                                                        <span className={`text-left ${textClass}`}>
                                                            {cadena.aplicaciones[languageText][key].description}
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}

                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalSettings;