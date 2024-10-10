import { getCookie } from "@/utils/cookies"
import { createContext, useContext, useEffect, useState } from "react"

export const WebsiteContext = createContext()

export const WebsiteProvider = ({ children }) => {

    const [current, setCurrent] = useState(5);
    const accordeon = 'accordeon';
    const principal = 'principal';
    const oculto = 'hidden';


    return (
        <WebsiteContext.Provider
            value={{
                current,
                setCurrent,
                accordeon,
                principal,
                oculto
            }}
        >
            {children}
        </WebsiteContext.Provider>
    )
}

export const useWebsite = () => useContext(WebsiteContext);
