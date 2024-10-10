import srcDiego from "@/assets/images/dashbaord/diego.jpg";
import srcSetting from "@/assets/images/settings.png";
import srcKimik from "@/assets/images/logo.webp";
import { urlGeneral } from "@/consts";
import '@/styles/CardPerfilVertical.css';
import socket from "@/utils/socket";
import { useEffect, useRef, useState, useContext } from "react";
import NotifySvg from "@/components/svgs/NotifySvg";
import ChatSvg from "@/components/svgs/ChatSvg";
import Notify from "./Notify";

import { getCookie, setCookie } from "@/utils/cookies";
import { GlobalContext, useGlobal } from "@/context/GlobalContext";
import { getNotifies } from "@/api/notifies";

function CardPerfilHorizontal({ btnChat, btnNotify, maxw }) {

    // const user = JSON.parse(window.document.cookie.User);

    const refBtnNotify = useRef(null);
    const refDivNotify = useRef(null);
    const [notifies, setNotifies] = useState([]);
    const [mrRigth, setMrRigth] = useState('mr-[-278px]');
    const [iconColor, setIconColor] = useState("bg-black/90");

    const { userLogin, upNotify, setUpNotify } = useContext(GlobalContext);

    useEffect(() => {
        handleMrRigth();
        const auth = getCookie("AuthToken");
        const user = getCookie("User");
        if (auth != undefined && user != undefined) {
            console.log('init socket')
            initSocket();
            loadNotifies();
        }

        return () => {
            socket.off("notifyUser");
            socket.disconnect();
        }
    }, []);


    useEffect(() => {
        loadNotifies();
    }, [upNotify]);

    useEffect(() => {
        loadColorNotify()
    }, [notifies]);

    function loadColorNotify() {
        if (notifies?.length > 0) {
            setIconColor("bg-[#7eff33]");
        } else {
            setIconColor("bg-black/90");
        }
    }

    const loadNotifies = async () => {
        const user = getCookie("User");
        const user_id = JSON.parse(user).id
        if (user_id == undefined) return;
        const notifiesUser = await getNotifies({ user_id });
        const notifiesFilter = notifiesUser.data.rows.filter(obj => !obj.is_read);
        await setNotifies(notifiesFilter);
    }


    function initSocket() {
        console.log(socket.connected)
        socket.connect();
        console.log(socket.connected)
        const user = getCookie("User");
        const user_id = JSON.parse(user).id
        if (user_id == undefined) return;
        socket.emit("myUserId", user_id);
        socket.on("notifyUser", (data) => {
            console.log('notify receibed from server')
            setNotifies((prevNoti) => ([...prevNoti, data]));
            handleOpenNotifies();
            setTimeout(() => {
                handleCloseNotifies();
            }, 5000);
        });
    };

    const handleMrRigth = () => {
        if (!btnChat) {
            setMrRigth('mr-[-278px]');
        } else {
            setMrRigth('mr-[-220px]');
        }
        return;
    }

    const handleToggleNotifies = () => {
        refDivNotify.current.classList.toggle("escondido");
        refBtnNotify.current.classList.toggle("show-notifies");
    }

    const handleOpenNotifies = () => {
        refDivNotify.current.classList.remove("escondido");
        refBtnNotify.current.classList.remove("show-notifies");
    }

    const handleCloseNotifies = () => {
        refDivNotify.current.classList.add("escondido");
        refBtnNotify.current.classList.add("show-notifies");
    }


    const { textClass, borderClass } = useGlobal();


    return (
        <div className={`relative justify-center`}>
            <div
                className={`bgDegreePrimary flex items-center px-4 h-[80px] justify-between md:rounded-3xl md:mb-4 md:border ${borderClass} w-full`}
            >
                <button title="Configuracion" className="config-profile min-w-[50px] flex items-center bg-black/90 rounded-full">
                    <span className="absolute rounded-full transition-all">
                        <img src={srcSetting.src} className={`max-w-[50px] w-[50px] max-h-[50px] h-[50px]`} width={50} height={50} alt="configuración" />
                    </span>
                    <img
                        src={`${userLogin.foto != '' ? urlGeneral + '/' + userLogin.foto : srcKimik.src}`}
                        width={50}
                        height={50}
                        alt="Perfil"
                        className={`rounded-full border ${borderClass} transition-all max-w-[50px] w-[50px] max-h-[50px] h-[50px]`}
                    />
                </button>
                <div className={`w-full ${maxw ? `max-w-[55%]` : 'max-w-[85%] mr-2'} text-left flex flex-col ml-2 2xl:ml-4`}>
                    <h4 className={`text-xl text-black pop-semi mb-[-4px] h4-name`}><span className="h4-span">{userLogin.nombre ?? ''}</span></h4>
                    <small className="text-sm text-black pop-regular">{userLogin.nacimiento_ciudad ?? ''}</small>
                </div>
                {btnNotify && (
                    <button ref={refBtnNotify} onClick={handleToggleNotifies} title="Notificaciones" className={`btn-notifies ${iconColor} mx-2 min-w-[50px] h-[50px] justify-center items-center flex border ${borderClass} rounded-full`}>
                        <NotifySvg width={'25px'} height={'25px'} color={'#FFFFFF'} />
                    </button>
                )}
                {btnChat && (
                    <a href="/citas/chat" id="boton-chat" title="Chats" className="min-w-[50px] h-[50px] justify-center items-center flex border border-white bg-black/90 rounded-full">
                        <span className="inline-block relative mb-[-4px]">
                            <ChatSvg width={'22px'} height={'22px'} color={'#FFFFFF'} />
                        </span>
                    </a>
                )}
            </div>
            <div ref={refDivNotify} className={`divNotifies escondido absolute right-0 w-full md:${mrRigth} md:mt-[-16px] justify-center z-10`}>
                <div className="notifies flex flex-col text-left border-2 border-white rounded-[20px] overflow-hidden">
                    <div className="max-h-[40vh] overflow-y-scroll px-2 bg-black">
                        {notifies && notifies.length > 0 && notifies.map((notify, index) => (
                            <Notify key={index} user={userLogin} notify={notify} />
                        ))}

                        {!notifies.length && (<Notify user={userLogin} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPerfilHorizontal;