import { GlobalProvider } from "@/context/GlobalContext";
import { WebsiteProvider } from "@/context/WebsiteContext";
import Splash from "@/sections/sigin/Splash";
import '@/styles/Website.css';
const Website = ({ children }) => {
    return (
        <WebsiteProvider>
            <GlobalProvider>
                <Splash />
            </GlobalProvider>
            {children}
        </WebsiteProvider>
    )
}

export default Website;