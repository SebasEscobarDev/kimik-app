import { cadena, CLASSES } from "@/consts";
import { useGlobal } from "@/context/GlobalContext";
import { useEffect, useRef } from "react";


const MenuWeb = () => {
    const refConoce = useRef(null);
    const refMenuWeb = useRef(null);
    const { languageText } = useGlobal();
    useEffect(() => {
        setTimeout(() => {
            refConoce.current?.classList.add('hidden');
        }, 5000);
        //refMenuWeb add event listener
        refMenuWeb.current.addEventListener('mouseover', () => {
            refConoce.current.classList.add('hidden');
        });
    }, []);
    return (
        <div ref={refMenuWeb} className="w-full items-center justify-center text-center flex menu-web-animated">
            <a href="/website#1" className={`${CLASSES.bgSecondary} w-[20px] h-[20px] rounded-full border-2 border-white`}>
                <span>{cadena.txtInicio[languageText]}</span>
            </a>
            <a href="/website#2" className={`bg-gray-600 w-[20px] h-[20px] rounded-full border-2 border-white`}>
                <span>{cadena.txtNosotros[languageText]}</span>
            </a>
            <a href="/website#3" className={`${CLASSES.bgSecondary} w-[20px] h-[20px] rounded-full border-2 border-white`}>
                <span>{cadena.txtComencemos[languageText]}!</span>
            </a>
            <a href="/website#4" className={`bg-[#FFCC00] w-[20px] h-[20px] rounded-full border-2 border-white`}>
                <span>{cadena.txtDescarga[languageText]}</span>
            </a>
            <a href="/website#5" className={`${CLASSES.bgSecondary} w-[20px] h-[20px] rounded-full border-2 border-white`}>
                <span>kimik</span>
                <div ref={refConoce} className="conoce absolute">
                    <span className="conoce-mas">{cadena.txtKimik[languageText]}</span>
                </div>
            </a>
        </div>
    )
}

export default MenuWeb;