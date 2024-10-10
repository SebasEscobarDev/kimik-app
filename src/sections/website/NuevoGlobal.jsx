import Website from "@/layouts/Website";
import Nuevo from "./Nuevo";
import { GlobalProvider } from "@/context/GlobalContext";

const NuevoGlobal = () => {
    return (
        <Website>
            <GlobalProvider>
                <Nuevo />
            </GlobalProvider>
        </Website>
    );
}

export default NuevoGlobal;