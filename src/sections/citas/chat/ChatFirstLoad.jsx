import srcKimikIa from "@/assets/images/kimikiaweb.png";
import { cadena } from "@/consts";
import { useGlobal } from "@/context/GlobalContext";
import { useEffect, useState } from "react";

const ChatFirstLoad = () => {

    const { userLogin, chatToUser, claseFristLoad, languageText } = useGlobal();

    const [clase, setClase] = useState('');

    useEffect(() => {
        if (!claseFristLoad) {
            setClase('hidden')
        }
    }, [claseFristLoad])

    return (
        <div className={`${clase} chat__first-load absolute px-4 bottom-0 top-0 left-0 right-0 items-center flex bg-[#1d1d1b] border-l border-r border-white justify-center pb-[85px] overflow-y-scroll`}>
            <div className="flex flex-col text-center justify-center chat__first-load__content">
                <span className="mb-5">
                    <img src={srcKimikIa.src} width={60} className="inline-block" alt="" />
                </span>
                <span className="bgDegreeSecondaryTwo text-white p-2 rounded-lg mb-3 text-sm">
                    {cadena.txtChatKimik2[languageText]} <b>{userLogin.nombre}</b>
                    <br />
                    {cadena.txtChatKimik[languageText]}
                </span>
                <span className="bgDegreeSecondaryTwo text-white p-2 rounded-lg mb-3 text-sm">
                    {/* {cadena.txtChatKimik3[languageText]} */}
                    Ingresa el número de las opciones para recibir una respuesta de Kimik IA
                </span>

                <span className="items-center flex bgDegreeSecondaryTwo text-white p-2 rounded-lg relative mb-3 pl-10 text-left text-sm">
                    <span className="w-[25px] h-[25px] text-center items-center flex justify-center text-white bg-transparent border border-white rounded-full absolute left-2 pt-1">1</span> <span>Cómo puedo iniciar una conversación con <b>{chatToUser.nombre}</b></span>
                </span>
                <span className="items-center flex bgDegreeSecondaryTwo text-white p-2 rounded-lg relative mb-3 pl-10 text-left text-sm">
                    <span className="w-[25px] h-[25px] text-center items-center flex justify-center text-white bg-transparent border border-white rounded-full absolute left-2 pt-1">2</span> <span>A donde le gustaria salir a <b>{chatToUser.nombre}</b></span>
                </span>
                <span className="items-center flex bgDegreeSecondaryTwo text-white p-2 rounded-lg relative mb-3 pl-10 text-left text-sm">
                    <span className="w-[25px] h-[25px] text-center items-center flex justify-center text-white bg-transparent border border-white rounded-full absolute left-2 pt-1">3</span> <span>Cual es la comida que mas le puede gustar a <b>{chatToUser.nombre}</b></span>
                </span>
            </div>
        </div>
    )
}

export default ChatFirstLoad;