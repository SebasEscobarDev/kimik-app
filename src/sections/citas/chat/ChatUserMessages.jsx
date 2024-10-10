import ChatMessage from "@/components/chat/ChatMessage";
import ChatInfo from "@/components/chat/ChatInfo";

const ChatUserMessages = ({ messages, userLogin }) => {

    return (
        <>
            {messages && messages.map((message, index) => {
                return (
                    <div key={index} className="flex flex-col w-full items-start">
                        {message.creado_el && <ChatInfo text={message.creado_el} userLogin={userLogin} />}
                        <ChatMessage
                            type={message.from_user_id === userLogin.id ? 'sent' : 'received'}
                            message={message.message}
                            like={message.like}
                            bgMessage={message.from_user_id === 'KimikChat' ? "bg-[#fda100]" : undefined}
                        />
                    </div>
                )
            })}
        </>
    );
};

export default ChatUserMessages;