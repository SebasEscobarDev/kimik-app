// Desc: Chat window with global context
import { GlobalProvider } from "@/context/GlobalContext"
import Blop from "./Blop";
import ModalSettings from "@/components/global/ModalSettings";
import NockAlert from "@/components/global/NockAlert";
import IconKimik from "@/sections/citas/blop/IconKimik";

const BlopGlobal = () => {
    return (
        <GlobalProvider>
            <NockAlert />
            <ModalSettings />
            <Blop />
        </GlobalProvider>
    )
};

export default BlopGlobal;
