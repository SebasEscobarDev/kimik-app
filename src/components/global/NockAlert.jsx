import { cadena, CLASSES } from "@/consts";
import { useRef, useState, useEffect, useContext } from "react";

import '@/styles/NockAlert.css';
import socket from "@/utils/socket";
import { useGlobal } from "@/context/GlobalContext";

const NockAlert = () => {

    const refNock = useRef(null);

    useEffect(() => {

        initSocket();

        return () => {
            socket.off("kimikNock");
            socket.disconnect();
        }
    }, []);

    const [verClase, setVerClase] = useState(false);

    const initSocket = () => {
        socket.connect();
        socket.on("kimikNock", (data) => {
            setVerClase(true);
            setTimeout(() => {
                setVerClase(false);
            }, 2000);
        });
    };

    const { bgClass, languageText } = useGlobal();

    return (
        <div ref={refNock} className={`${verClase ? '' : 'oculto'} flex flex-col knock z-50 ${bgClass} absolute top-0 left-0 w-full min-h-screen justify-center items-center`}>
            <h1 className={`${CLASSES.textPrimary} md:text-7xl 2xl:text-7xl md:leading-[70px] 2xl:leading-[90px] pop-bold w-[580px] italic uppercase text-center`}>{cadena.txtNock[languageText]}</h1>
        </div>
    );
};

export default NockAlert;