// Desc: Chat window with global context
import Registro from "./Registro";
import ModalSettings from "@/components/global/ModalSettings";
import { GlobalProvider } from "@/context/GlobalContext"
import { CoupleProvider } from "@/context/CoupleContext";

const RegistroGlobal = () => {
    return (
        <GlobalProvider>
            <ModalSettings />
            <CoupleProvider>
                <Registro />
            </CoupleProvider>
        </GlobalProvider>
    )
};

export default RegistroGlobal;
