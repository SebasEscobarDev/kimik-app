import bgFondo from "@/assets/images/fondo.webp";
import bgWhite from "@/assets/images/bg-white.webp";
import srcLogo2 from "@/assets/images/logo.webp";
import srcLogoWhite from "@/assets/images/logo_white.png";
import HeaderPrincipal from "@/components/menu/HeaderPrincipal";
import CardPerfilHorizontal from "@/components/global/CardPerfilHorizontal";
import "@/styles/circles.css";
import { getCookie } from "@/utils/cookies";
import ProfilesContainer from "@/components/blop/ProfilesContainer";
import { useGlobal } from "@/context/GlobalContext";
import { useEffect, useState } from "react";
import IconKimik from "./IconKimik";

const Blop = () => {
    const { refHeaderButtonsNull } = useGlobal();
    useEffect(() => {
        const auth = getCookie("AuthToken");
        const user = getCookie("User");
        if (auth != undefined && user != undefined) {
        } else {
            window.location.href = "/";
        }
    }, []);

    const { mode, textClass, borderClass } = useGlobal();
    const [srcImg, setSrcImg] = useState(bgFondo.src);
    useEffect(() => {
        setSrcImg(mode === 'dark' ? bgFondo.src : bgWhite.src);
    }, [mode]);

    const [show, setShow] = useState('');
    const [show2, setShow2] = useState('');
    useEffect(() => {
        setShow(mode === 'light' ? 'hidden' : '');
        setShow2(mode === 'dark' ? 'hidden' : '');
    }, [mode]);

    return (
        <div
            style={{ backgroundColor: 'white', backgroundImage: `url(${srcImg})` }}
            className="flex flex-col items-start h-screen w-full min-h-screen md:p-10 bg-contain"
        >
            <HeaderPrincipal id="headerButtonsBlob" back={false} refBtn={refHeaderButtonsNull} />
            <div className="w-full flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[500px] flex flex-col z-20 md:pr-2 pt-[1px]">
                    <CardPerfilHorizontal
                        btnChat={true}
                        btnNotify={true}
                        maxw={true}
                    />
                </div>
                <div className="w-full z-10 gap-4 pt-4 md:pt-0 md:px-40 md:pl-2 flex flex-col">
                    <div
                        className="hidden md:flex w-full items-center justify-center mb-[-5px] md:mt-[-103px]"
                    >
                        <div className="relative inline-block overflow-hidden">
                            <img src={srcLogo2.src} width={150} alt="Logo Kimik" className={`${show} mb-[-50px]`} />
                            <img src={srcLogoWhite.src} width={150} alt="Logo Kimik" className={`${show2}`} />
                        </div>
                    </div>
                    <div className="flex px-4 flex-between justify-center mb-4">
                        <button
                            type="button"
                            className={`flex ${borderClass} ${textClass} w-auto md:min-w-[130px] h-12 px-6 items-center mx-4 bg-transparent hover:bg-white hover:text-black justify-center rounded-[15px] border`}
                        >Tocs</button>
                        <button
                            type="button"
                            className={`flex ${borderClass} ${textClass} w-auto md:min-w-[130px] h-12 px-6 items-center mx-4 bg-transparent hover:bg-white hover:text-black justify-center rounded-[15px] border`}
                        >Fresh</button>
                        <button
                            type="button"
                            className={`flex ${borderClass} ${textClass} w-auto md:min-w-[130px] h-12 px-6 items-center mx-4 bg-transparent hover:bg-white hover:text-black justify-center rounded-[15px] border`}
                        >Quizá</button>
                    </div>
                </div>
            </div>
            <ProfilesContainer />
            <IconKimik />
        </div>
    );
};

export default Blop;