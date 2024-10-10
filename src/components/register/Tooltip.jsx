import { CLASSES } from "@/consts";
import srcInfo from "@/assets/images/info.png";
import srcSmile from "@/assets/svgs/smile.svg";
import "@/styles/Tooltip.css";
import { useGlobal } from "@/context/GlobalContext";
import { useEffect, useState } from "react";


const Tooltip = ({ message }) => {
    const { mode, textClass, borderClass } = useGlobal();
    const validateMode = () => {
        return mode === 'dark' ? 'bg-[rgb(0,0,0,0.9)]' : 'bg-[#fc9f01]';
    }
    const validateBg = () => {
        return mode === 'dark' ? CLASSES.bgPrimary : 'bg-white';
    }
    const [modeClass, setModeClass] = useState('');
    const [bgClass, setBgClass] = useState('');
    useEffect(() => {
        setModeClass(validateMode());
        setBgClass(validateBg());
    }, [mode]);
    return (
        <div className="flex relative min-w-[42px] items-center ml-2 tool-tip z-50">
            <img
                className="relative cursor-pointer"
                src={srcInfo.src}
                width={50}
                alt="tool-tip"
            />
            <div
                className={`absolute dev-info flex items-center right-11 ${modeClass} border ${borderClass} px-4 py-4 rounded-[15px]`}
            >
                <div
                    className={`${bgClass} w-[50px] h-[50px] flex rounded-full p-[6px]`}
                >
                    <img className="relative" src={srcSmile.src} alt="smile" />
                </div>
                <p className={`desc-tip w-[250px] py-2 ml-5 ${textClass} text-left text-xs`}>
                    {message}
                </p>
            </div>
        </div>
    );
};

export default Tooltip;