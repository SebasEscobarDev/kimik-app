
import srcLogo from "@/assets/images/logo2.webp";
import { CLASSES } from "@/consts";
import Usuarios from "./Usuarios";
import { getUsers } from "@/api/users";
import Swal from "sweetalert2";
import { useEffect } from "react";


function alertMessage(title, message, type) {
    return Swal.fire({
        title: title,
        text: message,
        icon: type,
        iconColor: "#FFCC00",
        background: "rgb(0,0,0,0.90)",
        color: "#FFFFFF",
    });
}

async function getUsersData() {
    try {
        const users = await getUsers({ results: 100, page: 1 });
        console.log(users);
        alertMessage("success", "Datos cargados con exito", "success");
    } catch (error) {
        console.error(error);
        alertMessage("Error", "An error occurred", "error");
    }
}





const Previa = () => {
    useEffect(() => {
        getUsersData();
    }, []);
    return (
        <div
            className="flex flex-col w-full min-h-screen py-12 items-center justify-between text-center"
        >
            <img src={srcLogo.src} width={300} alt="Logo Kimik" />

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-white">¡Bienvenido a Kimik!</h1>
                <p className="text-lg text-white">Cargando datos...</p>
                <Usuarios />
            </div>
        </div>
    );
};


export default Previa;