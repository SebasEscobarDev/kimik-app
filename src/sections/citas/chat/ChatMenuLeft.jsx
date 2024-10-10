import srcImg4 from "@/assets/images/img-form4.jpg";
import CardPerfilHorizontal from "@/components/global/CardPerfilHorizontal";
import ChatsLoop from "./ChatsLoop";
import { useGlobal } from "@/context/GlobalContext";
import { cadena } from "@/consts";

const ChatMenuLeft = () => {

    const { bgClass3, bgClass4, borderClass, textClass, textClass3, refChatMenuLeft, languageText } = useGlobal();

    return (
        <div
            id="chatMenuLeft"
            ref={refChatMenuLeft}
            className="flex flex-col left-side w-full md:min-w-2/5 md:w-2/5 lg:w-1/5 xl:w-1/5 md:pr-2"
        >
            <CardPerfilHorizontal
                btnChat={false}
                btnNotify={true}
                maxw={true}
            />

            <div
                className={`${bgClass3} h-[90vh] md:max-h-[74vh] md:h-[74vh] flex flex-col items-center px-3 py-3 md:rounded-3xl md:border ${borderClass} w-full`}
            >
                <div className="mb-2 w-full">
                    <form className="group relative">
                        <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            className={`absolute left-3 top-1/2 -mt-2.5 ${textClass3} pointer-events-none group-focus-within:text-yellow-400`}
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            ></path>
                        </svg>
                        <input
                            className={`focus:ring-2 border ${bgClass4} ${borderClass} focus:ring-yellow-400 focus:outline-none appearance-none w-full text-sm leading-6 ${textClass3} placeholder-slate-300 rounded-2xl py-2 pt-3 pl-10 ring-1 ring-slate-200 shadow-sm`}
                            type="text"
                            aria-label={cadena.txtChatMenLeft[languageText]}
                            placeholder={cadena.txtChatMenLeft[languageText]}
                        />
                    </form>
                </div>
                <ul
                    className="flex w-full overflow-x-scroll whitespace-nowrap mt-2 pb-2 md:pb-2 xl:pb-2 mb-2"
                >
                    {
                        Array.from({ length: 10 }).map((_, i) => (
                            <li key={i} className={`${borderClass} ${textClass} flex-shrink-0 w-20 h-20 rounded-full ml-2 overflow-hidden border flex items-center justify-center`}>
                                <img
                                    src={srcImg4.src}
                                    width={100}
                                    alt="Perfil"
                                    className="w-full"
                                />
                            </li>
                        ))
                    }
                </ul>
                <h2
                    className={`${borderClass} ${textClass} w-full text-left pl-2 pop-semi text-2xl border-b-2 pb-2 mt-2 md:mt-2 xl:mt-4 `}
                >
                    Chats
                </h2>
                <div
                    className="flex flex-col w-full h-[60%] md:h-[45%] xl:h-[62%] overflow-y-scroll"
                >
                    <ChatsLoop />
                </div>
            </div>
        </div>
    );
}

export default ChatMenuLeft;
