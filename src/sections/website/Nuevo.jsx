import srcChatIcon from "@/assets/images/chat_icon.png";
import { CLASSES } from "@/consts";
import { useWebsite } from "@/context/WebsiteContext";
import Home from "./Home";
import Dos from "./Dos";
import Tres from "./Tres";
import Cuatro from "./Cuatro";
import Cinco from "./Cinco";
import { useEffect, useState } from "react";
import { useGlobal } from "@/context/GlobalContext";

import bgFondo from "@/assets/images/fondo.webp";
import bgWhite from "@/assets/images/bg-white.webp";
import MenuWebsite from "@/components/website/MenuWebsite";
// import Splash from "./Splash";


const Nuevo = () => {

    const { current, setCurrent } = useWebsite();

    useEffect(() => {
        //validar almohadilla
        if (window.location.hash) {
            const hash = window.location.hash.replace('#', '');
            if (parseInt(hash)) {
                setCurrent(parseInt(hash));
            }
        }
    }, []);
    const { mode } = useGlobal();
    const [srcImg, setSrcImg] = useState(bgFondo.src);
    useEffect(() => {
        setSrcImg(mode === 'dark' ? bgFondo.src : bgWhite.src);
    }, [mode]);

    return (
        <div
            style={{ backgroundColor: 'white', backgroundImage: `url(${srcImg})` }}
            className="flex w-full bg-contain"
        >
            <div className="flex w-full flex-col bg-transparent h-screen min-h-screen">
                <div className="container mx-auto">
                    <div className="flex justify-between w-full h-[20vh] items-center z-50">
                        <MenuWebsite />
                    </div>
                </div>
                <div className="flex w-full h-[80vh] z-10">
                    <div className="flex w-full">
                        <Home page={1} />
                        <Dos page={2} />
                        <Tres page={3} />
                        <Cuatro page={4} />
                        <Cinco page={5} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nuevo;
