import { cadena, CLASSES, urlGeneral } from "@/consts";

import srcKimikIa from "@/assets/images/kimikia.png";

import { useGlobal } from '@/context/GlobalContext';
import { useContext, useEffect, useRef, useState } from "react";
import { getMessages, postMessage } from "@/api/messages";
import ChatUserMessages from "./ChatUserMessages";
import socket from "@/utils/socket";
import { getCookie } from "@/utils/cookies";


function ChatUser() {

    const { refChatMenuLeft, refDivChat, refDivKimik, refDivScrollKimik, refHeaderButtons, refDivCloseKimik, refDivScroll, refBtnKimikIA, chatToUser, setChatToUser, userLogin, messages, setMessages, isMobile, setVentanaUser, languageText } = useGlobal();
    const refMessage = useRef(null);

    const showChatUser = () => {
        refDivChat.current.classList.remove("escondido");
        goScrollBottom();
        if (isMobile) {
            refChatMenuLeft.current.classList.add("hidden");
        }
    }

    useEffect(() => {
        if (!chatToUser.id) return;
        setMessagesUser();
        showChatUser();
    }, [chatToUser])


    useEffect(() => {
        const auth = getCookie("AuthToken");
        const user = getCookie("User");
        if (auth != undefined && user != undefined) {
            initSocket();
        }

        return () => {
            socket.off("messageReceived");
            socket.disconnect();
        }
    }, [])

    const setMessagesUser = async () => {
        const chatMessages = await getMessages({ fromUserId: userLogin.id, toUserId: chatToUser.id });
        if (chatMessages?.data?.rows?.length > 0) {
            setMessages(chatMessages.data.rows)
        }
    }

    const initSocket = () => {
        socket.connect();
        // if (userLogin.id == undefined) return;
        socket.emit("myUserId", userLogin.id);
        socket.on("messageReceived", async (data) => {
            console.log('message received from server')
            console.log(data)
            setMessages(prevMessages => [...prevMessages, data]);
            goScrollBottom()
        });
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleSendMessage = async () => {
        if (refMessage.current.value === '') return refMessage.current.focus();
        const response = await postMessage({
            'from_user_id': userLogin.id,
            'to_user_id': chatToUser.id,
            'message': refMessage.current.value
        });
        setMessages([...messages, { ...response.data, type: response.data.from_user_id === userLogin.id ? 'sent' : 'received' }]);
        refMessage.current.value = '';
        goScrollBottom()
    }

    const goScrollBottom = () => {
        setTimeout(() => {
            refDivScroll.current.scrollTop = refDivScroll.current.scrollHeight;
        }, 100);
    }

    const goScrollKimikBottom = () => {
        setTimeout(() => {
            refDivScrollKimik.current.scrollTop = refDivScrollKimik.current.scrollHeight;
        }, 100);
    }

    const handleBtnOpenKimik = async () => {
        if (isMobile) {
            setVentanaUser(3)
            refDivChat.current.classList.add("hidden");
        } else {
            refDivChat.current.classList.remove("hidden");
            refDivChat.current.classList.remove("md:w-4/5");
            refDivChat.current.classList.add("md:w-3/5");
            refDivKimik.current.classList.remove("hidden");
            refHeaderButtons.current.classList.remove("w-full");
            refHeaderButtons.current.classList.add("w-4/5");
            refDivCloseKimik.current.classList.remove("hidden");
        }
        refDivKimik.current.classList.remove("hidden");

        goScrollKimikBottom();
    }

    const { bgClass3, bgClass4, borderClass, textClass2, textClass } = useGlobal();
    return (<div
        ref={refDivChat}
        id="divChat"
        className="escondido w-full md:flex flex-col rigth-side min-w-3/5 md:w-4/5 md:pl-2 transition-all"
    >
        <header
            className={`bgDegreePrimary flex items-center justify-between px-5 h-[80px] md:rounded-t-3xl md:border ${borderClass} w-full`}
        >
            <h2 className={`${textClass2} flex items-center gap-4 text-[19px] pop-semi`}>
                <span className={`w-[50px] h-[50px] transition-all border ${borderClass} rounded-full overflow-hidden`}>
                    <span
                        style={{ backgroundImage: `url(${chatToUser?.foto ? urlGeneral + '/' + chatToUser.foto : srcKimikIa.src})`, backgroundSize: '100%' }}
                        width={50}
                        alt="Perfil"
                        className="inline-block w-[50px] h-[50px]"
                    />
                </span>{chatToUser.nombre}
            </h2>
        </header>
        <div
            className={`${bgClass3} relative flex flex-col overflow-hidden h-[90%] items-center w-full md:rounded-b-3xl`}
        >
            <div
                ref={refDivScroll}
                className={`flex flex-col pl-4 pr-4 mb-20 overflow-y-scroll max-h-[74vh] h-[74vh] md:max-h-[71vh] md:h-[71vh] items-center md:border ${borderClass} border-t-0 w-full pt-4`}
            >
                <ChatUserMessages messages={messages} setMessages={setMessages} userLogin={userLogin} />
                <footer
                    className={`absolute flex bottom-0 left-0 pb-5 pt-5 pl-5 pr-5 ${bgClass3} w-full md:rounded-b-3xl md:border-b md:border-l md:border-r ${borderClass}`}
                >
                    <div className="group w-full relative">
                        <button
                            type="button"
                            className="absolute left top-0 px-2 py-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                className="bi bi-emoji-smile-fill"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"
                                ></path>
                            </svg>
                        </button>
                        <input
                            ref={refMessage}
                            onKeyDown={handleKeyPress}
                            className={`focus:ring-2 ${bgClass4} focus:ring-yellow-400 focus:outline-none appearance-none w-full text-sm leading-6 ${textClass} placeholder-slate-300 rounded-2xl py-2 pt-3 pl-11 pr-11 ring-1 ring-slate-200 shadow-sm`}
                            type="text"
                            aria-label={cadena.txtSendMessage[languageText]}
                            placeholder={cadena.txtSendMessage[languageText]}
                        />
                        <button
                            onClick={handleSendMessage}
                            type="button"
                            className="absolute right-1 top-0 px-2 py-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                className="bi bi-send rotate-45"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <form className="flex group ml-4 relative">
                        <button
                            ref={refBtnKimikIA}
                            onClick={handleBtnOpenKimik}
                            id="btnKimikIa"
                            type="button"
                            className="bg-[#3b3b3b] rounded-full items-center ring-1 px-2 ring-slate-200 shadow-sm"
                        >
                            <img
                                src={srcKimikIa.src}
                                width={30}
                                alt="Cam"
                                className="min-w-[30px] mt-[-2px]"
                            />
                        </button>
                    </form>
                </footer>
            </div>
        </div>
    </div>);
}

export default ChatUser;