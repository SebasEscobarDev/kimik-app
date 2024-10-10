import srcHeart from "@/assets/svgs/heart.svg";

import { cadena, CLASSES } from "@/consts";
import { useGlobal } from "@/context/GlobalContext";

function ChatMessage({ type, message, like, bgMessage }) {
    const flexFinal = type === "received" ? "flex-initial" : "flex-row-reverse";
    const roundedFinal =
        type === "received" ? "rounded-tr-[25px]" : "rounded-tl-[25px]";
    const paddingFinal = type === "received" ? "pr-0" : "pl-15";
    const bgReceived = bgMessage ? bgMessage : CLASSES.bgSecondary;
    const bgBox = type === "sent" ? "bg-white" : bgReceived;
    const txtReceived = bgMessage ? "text-black" : "text-white";
    // const txtColor = type === "sent" ? "text-black" : txtReceived;
    const { mode, borderClass, textClass, textClass2, languageText } = useGlobal();
    const txtColor = bgMessage === "bg-black" ? "text-white" : "text-black";
    return (
        <div className={`flex ${flexFinal} ${paddingFinal} w-full gap-2 items-center mb-4`}>
            <div className={`max-w-[40vw] text-left flex flex-col`}>
                <span
                    className={`${bgBox} ${roundedFinal} py-3 px-5 text-black border ${borderClass} rounded-b-[25px]`}
                >{message}</span>
                {
                    type === "sent" && (
                        <small className={`${textClass} w-full text-right p-1`}>{cadena.txtChatMessage[languageText]}</small>
                    )
                }
            </div>
            {
                type === "received" && (
                    <button type="button">
                        <img
                            src={srcHeart.src}
                            width={30}
                            className="min-w-[30px]"
                            alt="Like"
                        />
                    </button>
                )
            }
        </div>
    );
}

export default ChatMessage;
