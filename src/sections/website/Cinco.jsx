import { cadena, CLASSES, urlGeneral } from "@/consts";

import srcKimikIa from "@/assets/images/kimikiaweb.png";
import { useRef, useState, useEffect } from "react";
import ChatMessage from "@/components/chat/ChatMessage";
import { parseDataString, parsedObject } from "@/utils/kimikia";
import ChatUserMessages from "../citas/chat/ChatUserMessages";
import { postKimikChunk } from "@/api/kimik";
import { useWebsite } from "@/context/WebsiteContext";
import { useGlobal } from "@/context/GlobalContext";


const Cinco = ({ page }) => {

    const { current, accordeon, principal, oculto } = useWebsite();
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



    const refMessage = useRef(null);


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const userLogin = { id: 'web' };

    const refDivScrollKimik = useRef(null);

    const [messagesKimik, setMessagesKimik] = useState([{ message: cadena.txtKimikWelcome[languageText], type: 'received' }]);
    const [messageResponse, setMessageResponse] = useState('');
    const [isKimikResponse, setIsKimikResponse] = useState(false);

    useEffect(() => {
        scrollChatKimik();
    }, [messagesKimik])

    const scrollChatKimik = () => {
        refDivScrollKimik.current.scrollTop = refDivScrollKimik.current.scrollHeight;
    }

    const sendMessage = (from, to, msg) => {
        const date = new Date();
        return {
            'from_user_id': from,
            'to_user_id': to,
            'message': msg,
            'creado_el': date.toISOString(),
            'like': false
        };
    }

    const udpateMessagesUser = async (from, to, msg) => {
        const response = sendMessage(from, to, msg);
        setMessagesKimik(prevMessages => [...prevMessages, { ...response, type: response.from_user_id === userLogin.id ? 'sent' : 'received' }]);
        setTimeout(() => {
            scrollChatKimik();
        }, 100);
        setIsKimikResponse(false);
        setMessageResponse('');
        return response;
    }

    const handleSendMessage = async () => {
        if (refMessage.current.value === '') return refMessage.current.focus();
        const currentMsg = refMessage.current.value;
        refMessage.current.value = '';
        try {
            const from = userLogin.id;
            const to = 'KimikChat';
            udpateMessagesUser(from, to, currentMsg);
        } catch (e) {
            console.log(e)
        }

        const from = 'KimikChat';
        const to = userLogin.id;
        try {
            const kimikResponse = await postKimikChunk(currentMsg, async (chunk) => {
                if (!chunk || chunk.indexOf('DONE') > -1) return;
                setIsKimikResponse(true);
                const txt = await parsedObject(chunk);
                await setMessageResponse(prev => prev + txt);
                scrollChatKimik();
                return txt;
            }).then((responseString) => {
                const response = parseDataString(responseString);
                let msg = '';
                if (response[0].indexOf('Error') > -1) {
                    msg = response[0];
                } else {
                    const responseObj = response.filter(element => element !== undefined);
                    msg = responseObj.join('');
                }
                return msg;
            }).catch((error) => {
                console.log('Error:', error);
                const msg = cadena.txtChatKimikFail[languageText];
                udpateMessagesUser(from, to, msg);
            })
            let msg = '';
            if (kimikResponse === '') {
                msg = cadena.txtChatKimikFail[languageText];
            } else {
                msg = kimikResponse;
            }
            udpateMessagesUser(from, to, msg);

        } catch (error) {
            const msg = 'Error al comunicarse con el LLM:';
            udpateMessagesUser(from, to, msg);
        }


    }




    return (
        <div className={`${current === page ? 'container mx-auto' : 'z-10'}`}>
            <div id="section-cinco" className={`${classes} dev-card flex pb-10 gap-10 h-[80vh] transition-all`}>
                <div className="w-[250px]">
                    <div className={`${CLASSES.bgSecondary} flex justify-center items-center gap-4 p-5 rounded-[25px]`}>
                        <img src={srcKimikIa.src} alt="" />
                        <h1 className="text-2xl pop-semi text-white">kimik</h1>
                    </div>
                </div>
                <div
                    className="md:flex flex-col rigth-side w-full pl-2 transition-all"
                >
                    <header
                        className={`${CLASSES.bgSecondary} flex items-center justify-between px-5 h-[80px] rounded-t-3xl border border-[#7c69ba] w-full`}
                    >

                    </header>
                    <div
                        className={`bg-white relative flex flex-col overflow-hidden h-[90%] items-center w-full md:rounded-b-3xl`}
                    >
                        <div
                            ref={refDivScrollKimik}
                            className={`flex flex-col pl-4 pr-4 mb-20 overflow-y-scroll max-h-[74vh] h-[74vh] md:max-h-[71vh] md:h-[71vh] items-center border border-[#7c69ba] border-t-0 w-full pt-4`}
                        >
                            <ChatUserMessages messages={messagesKimik} setMessages={setMessagesKimik} userLogin={userLogin} />
                            {isKimikResponse === true && messageResponse != '' && (
                                <div className="flex flex-col w-full items-start">
                                    <ChatMessage
                                        type={'received'}
                                        message={messageResponse}
                                        like={false}
                                        userLogin={userLogin}
                                        bgMessage={"bg-[#7c69ba]"}
                                    />
                                </div>
                            )}
                            <footer
                                className="absolute flex bottom-0 left-0 pb-5 pt-5 pl-5 pr-5 bg-white w-full md:rounded-b-3xl md:border-b md:border-l md:border-r md:border-[#7c69ba]"
                            >
                                <div className="group w-full relative">
                                    <input
                                        ref={refMessage}
                                        onKeyDown={handleKeyPress}
                                        className="focus:ring-2 bg-black focus:ring-yellow-400 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-300 placeholder-slate-300 rounded-2xl py-2 pt-3 pl-4 pr-11 ring-1 ring-slate-200 shadow-sm"
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
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cinco;
