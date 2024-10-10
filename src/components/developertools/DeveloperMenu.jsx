import { deleteAllMatches } from "@/api/matches";
import { deleteAllMessages } from "@/api/messages";
import { deleteAllNotifies } from "@/api/notifies";
import { deleteAllWebsockets } from "@/api/websockets";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const DeveloperMenu = () => {

    const showAlert = (type, title, message) => {

        let iconColor = "#FFCC00";
        if (type === 'error') iconColor = "#da415d";
        if (type === 'success') iconColor = "#69ba69";
        return Swal.fire({
            title: title,
            text: message,
            icon: type,
            iconColor,
            background: "rgb(0,0,0,0.90)",
            color: "#FFFFFF",
        });
    }

    const handleDelAllMatches = async () => {
        await deleteAllMatches();
        showAlert('success', 'Matches reiniciados', 'Todos los matches han sido reiniciados');
    }
    const handleDelAllWebsockets = async () => {
        await deleteAllWebsockets();
        showAlert('success', 'Websockets reiniciados', 'Todos los websockets han sido reiniciados');
    }

    const handleDelAllMessages = async () => {
        await deleteAllMessages();
        showAlert('success', 'Mensajes reiniciados', 'Todos los mensajes han sido reiniciados');
    }

    const handleDelAllNotifies = async () => {
        await deleteAllNotifies();
        showAlert('success', 'Notificaciones reiniciadas', 'Todas las notificaciones han sido reiniciadas');
    }

    const handleDelAll = async () => {
        await deleteAllMatches();
        await deleteAllWebsockets();
        await deleteAllMessages();
        await deleteAllNotifies();
        showAlert('success', 'Todo reiniciado', 'Todos los datos han sido reiniciados');
    }

    const [show, setShow] = useState(false);
    useEffect(() => {
        if (window.location.href.includes('dev')) {
            setShow(true);
        }
    }, []);

    return (
        <div className={`absolute ${!show ? 'hidden' : ''} z-50 flex w-[120px] h-[60vh] items-center right-4 top-0`}>
            <div className="flex flex-col">
                <button className="p-2 mb-2 border-b bg-white rounded-lg border-black text-black text-sm" onClick={handleDelAllMatches}>Reiniciar Matches</button>
                <button className="p-2 mb-2 border-b bg-white rounded-lg border-black text-black text-sm" onClick={handleDelAllWebsockets}>Reiniciar Websockets</button>
                <button className="p-2 mb-2 border-b bg-white rounded-lg border-black text-black text-sm" onClick={handleDelAllMessages}>Reiniciar Mensajes</button>
                <button className="p-2 mb-2 border-b bg-white rounded-lg border-black text-black text-sm" onClick={handleDelAllNotifies}>Reiniciar Notificaciones</button>
                <button className="p-2 mb-2 border-b bg-white rounded-lg border-black text-black text-sm" onClick={handleDelAll}>Reiniciar TODO</button>
            </div>
        </div>
    );
};

export default DeveloperMenu;