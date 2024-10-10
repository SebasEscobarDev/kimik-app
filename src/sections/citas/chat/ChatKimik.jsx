import { useContext, useEffect, useRef, useState } from "react";
import { useGlobal } from "@/context/GlobalContext";
import { getMessages, postMessage } from "@/api/messages";
import ChatUserMessages from "./ChatUserMessages";
import { postKimikChunk } from "@/api/kimik";
import ChatMessage from "@/components/chat/ChatMessage";
import { parseDataString, parsedObject } from "@/utils/kimikia";
import ChatFirstLoad from "./ChatFirstLoad";
import { cadena } from "@/consts";
import { getIris } from "@/api/irises";


// bgMessage: "bg-[#fda100]"

function ChatKimik() {
    const { userLogin, chatToUser, refDivKimik, refDivScrollKimik, messagesKimik, setMessagesKimik, setClaseFristLoad, claseFristLoad } = useGlobal();

    const refMessage = useRef(null);
    const [messageResponse, setMessageResponse] = useState('');
    const [isKimikResponse, setIsKimikResponse] = useState(false);

    useEffect(() => {
        scrollChatKimik();
    }, [messagesKimik])

    const scrollChatKimik = () => {
        refDivScrollKimik.current.scrollTop = refDivScrollKimik.current.scrollHeight;
    }

    useEffect(() => {
        setMessagesUser();
    }, [userLogin])

    useEffect(() => {
        console.log('claseFristLoad', claseFristLoad)
    }, [claseFristLoad])

    const setMessagesUser = async () => {
        const chatMessages = await getMessages({ fromUserId: userLogin.id, toUserId: 'KimikChat' });
        if (chatMessages?.data?.rows?.length > 0) {
            setMessagesKimik(chatMessages.data.rows)
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const sendMessage = async (from, to, msg) => {
        let response;
        try {
            response = {
                'from_user_id': from,
                'to_user_id': to,
                'message': msg
            };
        } catch (e) {
            console.log(e)
        }
        return response;
    }

    const udpateMessagesUser = async (from, to, msg) => {
        const response = await sendMessage(from, to, msg);
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
        let currentMsg = refMessage.current.value;
        refMessage.current.value = '';

        if (claseFristLoad) {
            //activar tablero de preguntas de kimik, 

            if (Number(currentMsg) >= 1 && Number(currentMsg) <= 4) {
                const getMyPerfil = await getIris(userLogin.id);
                const getMatchPerfil = await getIris(chatToUser.id);
                console.log('getMyPerfil', getMyPerfil);
                console.log('getMatchPerfil', getMatchPerfil);

                if (Number(currentMsg) === 1) {
                    currentMsg = "{usuario1}: " + JSON.stringify(getMyPerfil.data) + " {usuario2}: " + JSON.stringify(getMatchPerfil.data) + " ";
                    /*Cómo puedo iniciar una conversación con*/
                    currentMsg += "Compara los perfiles psicológicos de {usuario1} y {usuario2} Basado en la comparación anterior, ¿cómo puede {usuario1} iniciar una conversación con {usuario2} de manera efectiva y empática, teniendo en cuenta sus diferencias y similitudes?";
                } else if (Number(currentMsg) === 2) {
                    currentMsg = "{usuario1}: " + JSON.stringify(getMyPerfil.data) + " {usuario2}: " + JSON.stringify(getMatchPerfil.data) + " ";
                    /*A donde le gustaria salir a*/
                    currentMsg += "Compara los perfiles psicológicos de {usuario1} y {usuario2} Teniendo en cuenta la comparación anterior, ¿a dónde le gustaría salir a {usuario2} y cómo puede {usuario1} abordar esta conversación de manera adecuada?";

                } else if (Number(currentMsg) === 3) {
                    currentMsg = "{usuario1}: " + JSON.stringify(getMyPerfil.data) + " {usuario2}: " + JSON.stringify(getMatchPerfil.data) + " ";
                    /*Cual es la comida que mas le puede gustar a*/
                    currentMsg += "Consulta sobre Preferencias Alimenticias ";
                    currentMsg += "Compara los perfiles psicológicos de {usuario1} y {usuario2} Basado en la comparación anterior, ¿cuál es la comida que más le puede gustar a {usuario2} y cómo puede {usuario1} plantear esta pregunta de manera adecuada y sensible?";

                }
                currentMsg += " Dame una respuesta concreta a la pregunta anterior. en maximo 300 caracteres, si mencionas a {usuario1} hazlo con el nombre: " + userLogin.nombre + " y a {usuario2} con el nombre: " + chatToUser.nombre;

            }
            setClaseFristLoad(false);
        };


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
                msg = 'Error: No hay conexion con el LLM.';
            } else {
                msg = kimikResponse;
            }
            udpateMessagesUser(from, to, msg);

        } catch (error) {
            const msg = 'Error al comunicarse con el LLM:';
            udpateMessagesUser(from, to, msg);
        }

    }


    const { bgClass3, bgClass4, borderClass, textClass2, textClass3, textClass, languageText } = useGlobal();

    return (<div
        ref={refDivKimik}
        id="divKimik"
        className="hidden flex flex-col rigth-side w-full md:min-w-1/5 md:w-1/5 md:pl-2 transition-all"
    >
        <header
            className={`bgDegreeSecondary flex items-center justify-between px-5 h-[80px] md:rounded-t-3xl md:border ${borderClass} w-full`}
        >
            <h2 className={`flex items-center text-[19px] ${textClass3} pop-semi`}>
                Kimik IA
            </h2>
        </header>
        <div
            className={`${bgClass3} relative flex flex-col overflow-hidden h-[90%] items-center w-full md:rounded-b-3xl`}
        >
            <div
                ref={refDivScrollKimik}
                className={`flex flex-col pl-4 pr-4 mb-20 overflow-y-scroll max-h-[74vh] h-[74vh] md:max-h-[71vh] md:h-[71vh] items-center md:border ${borderClass} border-t-0 w-full pt-4`}
            >
                <ChatFirstLoad />
                <ChatUserMessages messages={messagesKimik} setMessages={setMessagesKimik} userLogin={userLogin} />
                {isKimikResponse === true && messageResponse != '' && (
                    <div className="flex flex-col w-full items-start">
                        <ChatMessage
                            type={'received'}
                            message={messageResponse}
                            like={false}
                            bgMessage={"bg-[#fda100]"}
                        />
                    </div>
                )}
                <footer
                    className={`absolute flex bottom-0 left-0 pb-5 pt-5 pl-5 pr-5 ${bgClass3} w-full md:rounded-b-3xl md:border-b md:border-l md:border-r ${borderClass}`}
                >
                    <div className="group w-full relative">
                        <input
                            ref={refMessage}
                            onKeyDown={handleKeyPress}
                            className={`${bgClass4} focus:ring-2 focus:ring-yellow-400 focus:outline-none appearance-none w-full text-sm leading-6 ${textClass} placeholder-slate-300 rounded-2xl py-2 pt-3 pl-4 pr-11 ring-1 ring-slate-200 shadow-sm`}
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
    </div>);
}

export default ChatKimik;