import { getCookie, setCookie } from "@/utils/cookies"
import { createContext, useContext, useEffect, useReducer, useRef, useState } from "react"

// Definir el estado inicial
const initialState = {
    chats: [],
}

// Definir los tipos de acciones
export const actionTypes = {
    SET_CHATS: "SET_CHATS",
    CREATE_CHAT: "CREATE_CHAT",
    UPDATE_CHAT: "UPDATE_CHAT",
    DELETE_CHAT: "DELETE_CHAT",
}

// Definir el reducer
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_CHATS: // 1) chats
            return {
                ...state,
                chats: action.payload,
            }
        case actionTypes.CREATE_CHAT: // 2) chats
            return {
                ...state,
                chats: [...state.chats, action.payload],
            }
        case actionTypes.UPDATE_CHAT: // 3) chats
            const updatedchats = state.chats.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, ...action.payload }
                }
                return item
            })
            return {
                ...state,
                chats: updatedchats,
            }
        case actionTypes.DELETE_CHAT: // 4) chats //////////////////////////////////
            return {
                ...state,
                chats: state.chats.filter(item => item.id !== action.payload.id),
            }
        default:
            return state
    }
}

export const GlobalContext = createContext()


const getUserPreferences = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const userLanguage = navigator.language || navigator.userLanguage;
        return {
            modeText: userPrefersDark ? 'dark' : 'light',
            languageText: `${userLanguage}`
        };
    }
    return {
        modeText: 'light',
        language: 'es'
    };
};

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const [showModalSettings, setShowModalSettings] = useState(false);
    const [showModalSigin, setShowModalSigin] = useState(false);
    const refKnock = useRef(null);
    const refDivScroll = useRef(null);
    const refDivScrollKimik = useRef(null);

    const refChatMenuLeft = useRef(null);
    const refDivChat = useRef(null);
    const refDivKimik = useRef(null);
    const refBtnKimikIA = useRef(null);
    const refHeaderButtons = useRef(null);
    const refHeaderButtonsNull = useRef(null);
    const refDivCloseKimik = useRef(null);
    const refBtnCloseKimik = useRef(null);

    const [userLogin, setUserLogin] = useState({});
    const [chatToUser, setChatToUser] = useState({});
    const [ventanaUser, setVentanaUser] = useState(1);
    const [messages, setMessages] = useState([]);
    const [messagesKimik, setMessagesKimik] = useState([]);
    const [claseFristLoad, setClaseFristLoad] = useState(true);


    const { modeText, language } = getUserPreferences();
    const [mode, setMode] = useState(modeText);
    const [languageText, setLanguageText] = useState('en');

    // Función para actualizar el modo de color
    const updateMode = (e) => {
        setMode(e.matches ? 'dark' : 'light');
    };

    useEffect(() => {
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const userLanguage = navigator.language || navigator.userLanguage;

        console.log(userLanguage);

        setMode(userPrefersDark ? 'dark' : 'light');
        // setLanguageText(`en`);

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addEventListener('change', updateMode);

        return () => {
            darkModeMediaQuery.removeEventListener('change', updateMode);
        };
    }, []);



    //variable to update component notifies
    const [upNotify, setUpNotify] = useState(1);

    useEffect(() => {
        const auth = getCookie("AuthToken");
        const user = getCookie("User");
        if (auth != undefined && user != undefined) {
            setUserLogin(JSON.parse(user));
        }
    }, []);

    /*
    Clases para modo Dark / Light
    */
    const [imgClass, setImgClass] = useState('');
    const [bgClass, setBgClass] = useState('');
    const [bgClass2, setBgClass2] = useState('');
    const [bgClass3, setBgClass3] = useState('');
    const [bgClass4, setBgClass4] = useState('');
    const [textClass, setTextClass] = useState('');
    const [textClass2, setTextClass2] = useState('');
    const [textClass3, setTextClass3] = useState('');
    const [borderClass, setBorderClass] = useState('');
    const [hoverClass, setHoverClass] = useState('');
    const [color, setColor] = useState('');
    const [borderActive, setBorderActive] = useState('');
    const [borderActive2, setBorderActive2] = useState('');

    useEffect(() => {
        if (mode == 'light') {
            setImgClass('invert');
            setBgClass('bg-[rgb(255,255,255,0.9)]');
            setBorderClass('border-black');
            setHoverClass('hover:bg-zinc-200');
            setBgClass2('bg-black');
            setBgClass3('bg-[#ececec]');
            setBgClass4('bg-white');
            setTextClass('text-black');
            setTextClass2('text-white');
            setTextClass3('text-black');
            setColor('#FFF')
            setBorderActive('border border-black');
            setBorderActive2('');

        } else {
            setImgClass('');
            setBgClass('bg-[rgb(0,0,0,0.9)]');
            setBorderClass('border-white');
            setHoverClass('hover:bg-zinc-600');
            setBgClass2('bg-white');
            setBgClass3('bg-[#1d1d1b]');
            setBgClass4('bg-black');
            setTextClass('text-white');
            setTextClass2('text-black');
            setTextClass3('text-slate-300');
            setColor('#000');
            setBorderActive('');
            setBorderActive2('border border-white');
        }
        setCookie('mode', mode);
    }, [mode]);


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                state,
                dispatch,
                refKnock,
                refDivScroll,
                refDivScrollKimik,
                refDivChat,
                refDivKimik,
                refBtnKimikIA,
                refHeaderButtons,
                refHeaderButtonsNull,
                refDivCloseKimik,
                refBtnCloseKimik,
                chatToUser,
                setChatToUser,
                userLogin,
                setUserLogin,
                messages,
                setMessages,
                messagesKimik,
                setMessagesKimik,
                showModalSettings,
                setShowModalSettings,
                showModalSigin,
                setShowModalSigin,
                upNotify,
                setUpNotify,
                mode,
                setMode,
                languageText,
                setLanguageText,
                modeText,
                imgClass,
                bgClass,
                bgClass2,
                bgClass3,
                bgClass4,
                textClass,
                textClass2,
                textClass3,
                borderClass,
                hoverClass,
                color,
                borderActive,
                borderActive2,
                isMobile,
                refChatMenuLeft,
                ventanaUser,
                setVentanaUser,
                claseFristLoad,
                setClaseFristLoad
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext);
