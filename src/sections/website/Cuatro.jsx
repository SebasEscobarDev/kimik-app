import { cadena, CLASSES } from "@/consts";
import srcLogo from "@/assets/images/logo.webp";
import srcIos from "@/assets/images/download-ios.png";
import srcAndroid from "@/assets/images/download-android.png";
import { useWebsite } from "@/context/WebsiteContext";
import { useEffect, useState } from "react";
import HeartSvg from "@/components/svgs/HeartSvg";
import { useGlobal } from "@/context/GlobalContext";
// import Splash from "./Splash";


const Cuatro = ({ page }) => {

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
        <div className={`${current === page ? 'container mx-auto' : 'z-20'}`}>
            <div id="section-tres" className={`${classes} dev-card flex pb-10 gap-10 h-[80vh] transition-all`}>
                <div className={` ${current === page ? '' : 'hidden'} icons left-[250px] top-[20vh] absolute min-w-full min-h-[80vh]`}>
                    <span className="absolute top-[12%] left-[-5%]">
                        <HeartSvg width={80} height={80} color={`#e20612`} />
                    </span>
                    <span className="absolute bottom-[12%] left-[-1%]">
                        <HeartSvg width={80} height={80} color={`#e20612`} />
                    </span>
                    <span className="absolute top-[22%] right-[26%]">
                        <HeartSvg width={80} height={80} color={`#e20612`} />
                    </span>
                </div>
                <button type="button" onClick={() => setCurrent(page)} className={`${current === page ? '' : 'h-[50vh] mt-[13vh]'} ${CLASSES.bgPrimary} flex flex-col items-center justify-center text-center rounded-[25px] w-full`}>
                    <img src={srcLogo.src} width={250} alt="Logo" />
                    <h1 className="text-[#dd4369] text-4xl pop-bold mt-4 z-10">{cadena.txtWebCuatro1[languageText]}</h1>
                    <h2 className="text-black text-2xl mb-14 z-10">{cadena.txtWebCuatro2[languageText]}</h2>
                    <span className={`inline-block relative p-1 border-[1.5px] border-black rounded-[50px] min-w-[180px] z-10`}>
                        <span className={`inline-block bg-black text-white rounded-[50px] w-full px-4 py-3 text-1xl`}>
                            <b>{cadena.txtWebCuatro3[languageText]}</b>
                        </span>
                    </span>
                    <div className="flex w-full justify-center mt-6 z-50">
                        <div className="flex rounded p-2 mr-2">
                            <a href="/" target="_blank" id="downloadIos">
                                <img className="mr-2" src={srcIos.src} width={150} alt="Logo Mac" />
                            </a>
                        </div>
                        <div className="flex rounded p-2">
                            <a href="/" target="_blank" id="downloadAndroid">
                                <img
                                    className="mr-2"
                                    src={srcAndroid.src}
                                    width={150}
                                    alt="Logo PlayStore"
                                />
                            </a>
                        </div>
                    </div>
                </button>
            </div>
        </div >
    )
}

export default Cuatro;
