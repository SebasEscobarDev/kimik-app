import { useGlobal } from "@/context/GlobalContext";


function ChatInfo({ text, userLogin }) {
    const { mode } = useGlobal();
    const colorSpan = mode == 'dark' ? 'text-white' : 'text-black';
    return (
        <div className={`bg-transparent the-time text-center p-2 w-full rounded-xl`}>
            <small className={`${colorSpan}`}>
                <time dateTime={text}>
                    {text}
                </time>
            </small>
        </div>
    );
}
export default ChatInfo;