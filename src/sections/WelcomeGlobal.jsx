import { GlobalProvider } from "@/context/GlobalContext";
import Welcome from "./Welcome";


const WelcomeGlobal = () => {
    return (
        <GlobalProvider>
            <Welcome />
        </GlobalProvider>
    )
}

export default WelcomeGlobal;