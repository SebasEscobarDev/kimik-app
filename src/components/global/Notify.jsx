import SmileSvg from "@/components/svgs/SmileSvg";
import SadSvg from "@/components/svgs/SadSvg";
import srcKimik from "@/assets/images/logo.webp";
import { postMatch } from "@/api/matches";
import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { cadena, urlGeneral } from "@/consts";

const Notify = ({ user, notify }) => {

    const { upNotify, setUpNotify, languageText } = useContext(GlobalContext);
    const handleBtnOk = async (match_user_id) => {
        setUpNotify(upNotify + 1);
        const newMatch = { notify_id: notify.id, user_id: user.id, match_user_id, type: 'ok' }
        const addMatch = await postMatch(newMatch)
        console.log(addMatch)
    }
    const handleBtnNo = async (match_user_id) => {
        const newMatch = { user_id: user.id, match_user_id, type: 'no' }
        try {
            const addMatch = await postMatch(newMatch)
            console.log(addMatch)
        } catch (error) {
            console.log(error)
        }
    }
    //user_id, foto, message, type
    return (
        <div className="notify flex items-center bg-[rgba(0,0,0,1)] py-2 px-2 border-b border-white pop-semi">
            {/* <img src={notify?.foto ?? srcKimik.src} alt="Foto de perfil" className="w-16 h-16 rounded-full" /> */}
            <img src={`${notify?.foto ? urlGeneral + '/' + notify.foto : srcKimik.src}`} alt="Foto de perfil" className="min-w-14 min-h-14 w-14 h-14 max-w-14 max-h-14 rounded-full" />
            <span className="bg-black pl-2 text-sm text-white pop-regular">{notify?.message ?? cadena.txtNotify[languageText]}</span>
            {notify && (<div className="flex">
                <button onClick={() => handleBtnOk(notify.from_user_id ?? 0)}>
                    <SmileSvg width={'40px'} height={'40px'} color={'#42db42'} />
                </button>
                <button onClick={() => handleBtnNo(notify.from_user_id ?? 0)} className="pl-2">
                    <SadSvg width={'40px'} height={'40px'} color={'#FFFFFF'} />
                </button>
            </div>)}
        </div>
    );
}
export default Notify;