import srcSplash from "@/assets/images/splash.webp";
import srcSplashWhite from "@/assets/images/bg-load-white.webp";
import { useEffect, useState } from "react";
import "@/styles/Splash.css";
import { useGlobal } from "@/context/GlobalContext";
import { getCookie } from "@/utils/cookies";

const Splash = () => {
    const [hide, setHide] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setHide(true);
        }, 500);
    }, []);
    // const { mode } = useGlobal();
    const mode = getCookie('mode');
    const [show, setShow] = useState('');
    const [show2, setShow2] = useState('');
    useEffect(() => {
        setShow(mode === 'light' ? 'hidden' : '');
        setShow2(mode === 'dark' ? 'hidden' : '');
    }, []);
    return (
        <div className={`w-full fixed z-50 splash ${hide ? 'ocultar' : ''}`}>

            <div style={{ backgroundImage: `url(${srcSplashWhite.src})`, backgroundPosition: `center center` }} className={`absolute ${show2} top-0 z-50 flex items-center min-h-screen w-full bg-cover`}>
            </div>

            <div style={{ backgroundImage: `url(${srcSplash.src})`, backgroundPosition: `center center` }} className={`absolute ${show} top-0 z-50 flex items-center min-h-screen w-full bg-cover`}>
            </div>
        </div>
    );
}
export default Splash;