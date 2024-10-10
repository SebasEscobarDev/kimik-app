import { urlGeneral } from "@/consts";
import { useGlobal, actionTypes } from '@/context/GlobalContext';


const ChatLeftCard = ({ user }) => {
    const { setChatToUser, setVentanaUser, setClaseFristLoad } = useGlobal()

    const handleChatToUser = async (user) => {
        await setChatToUser(user);
        await setClaseFristLoad(true);
        setVentanaUser(2);
    }

    const { borderClass, textClass } = useGlobal();

    return (
        <div className={`flex w-full border-b-2 ${borderClass}`}>
            <button
                type="button"
                onClick={() => handleChatToUser(user)}
                className="btn-li w-full flex p-1 my-2 items-center border-2 border-transparent hover:border-[#7f70cb] rounded-[25px] transition-all"
            >
                <span className={`img-circle w-[50px] h-[50px] transition-all border ${borderClass} rounded-full overflow-hidden`}>
                    <span
                        style={{ backgroundImage: `url(${urlGeneral}/${user.foto})`, backgroundSize: '100%' }}
                        width={50}
                        alt="Perfil"
                        className="flex w-[50px] h-[50px]"
                    />
                </span>
                <div className="flex-1 flex flex-col pl-2 pr-2 text-left w-full">
                    <h4 className={`${textClass} text-lg pop-semi h4-name`}>
                        <span className="h4-span">{user?.nombre}</span>
                    </h4>
                    <small className={`${textClass} text-sm pop-regular`}>
                        {user?.nacimiento_ciudad}
                    </small>
                </div>
                <span className={`text-sm pop-ligth ${textClass} opacity-50`}>
                    10:30 am.
                </span>
            </button>
        </div>
    );
}

export default ChatLeftCard;