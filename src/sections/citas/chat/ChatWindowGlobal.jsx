// Desc: Chat window with global context
import { GlobalProvider } from "@/context/GlobalContext"
import ChatWindow from "./ChatWindow";
import { useEffect } from "react";
import ModalSettings from "@/components/global/ModalSettings";
import NockAlert from "@/components/global/NockAlert";

const ChatWindowGlobal = () => {
    return (
        <GlobalProvider>
            <NockAlert />
            <ModalSettings />
            <ChatWindow />
        </GlobalProvider>
    )
};

export default ChatWindowGlobal;
