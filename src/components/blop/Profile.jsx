import React from 'react';
import { gsap } from 'gsap';
import { postMatch } from '@/api/matches';
import { getCookie } from '@/utils/cookies';
import { cadena } from '@/consts';
import { useGlobal } from '@/context/GlobalContext';

const Profile = ({ perfil, onRemove }) => {
    const tamanoBase = 5; // Tamaño base para el círculo
    const tamano = tamanoBase * (perfil.afinidad > 0 ? perfil.afinidad : 2); // Tamaño del círculo
    console.log(perfil);

    const { languageText } = useGlobal();

    const handleOk = async (matchUserId) => {
        const userId = JSON.parse(getCookie('User')).id;
        const newMatch = { user_id: userId, match_user_id: matchUserId, type: 'ok' };
        const response = await postMatch(newMatch);
        if (response && response.status >= 200 && response.status < 400) {
            console.log('Match creado');
        } else {
            console.log('Error al crear match');
        }

        const botonChat = document.getElementById('boton-chat').getBoundingClientRect();
        gsap.to(`#circle-${perfil.id}`, {
            duration: 0.5,
            scale: 0.2,
            x: botonChat.x + botonChat.width / 2 - tamano / 2 - 200,
            y: botonChat.y + botonChat.height / 2 - tamano / 2 - 200,
            ease: 'power1',
            opacity: 0,
            onComplete: () => {
                setTimeout(() => {
                    onRemove(perfil.id); // Llama a onRemove para quitar el perfil del estado
                }, 1000);
            },
        });
    };

    const handleDont = async (matchUserId) => {
        const userId = JSON.parse(getCookie('User')).id;
        const newMatch = { user_id: userId, match_user_id: matchUserId, type: 'no' };
        const response = await postMatch(newMatch);
        console.log(response);
    };

    return (
        <div
            key={perfil.id}
            className="circulo"
            id={`circle-${perfil.id}`}
            style={{
                width: `${tamano}px`,
                height: `${tamano}px`,
                position: 'absolute',
            }}
        >
            <img
                src={`${perfil.foto}`}
                alt="Foto de perfil"
                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
            <p className="flex flex-col pop-semi">
                <span>{perfil.nombre}</span>
                <span id={`span-${perfil.id}`} className="info-perfil absolute flex items-center">
                    <small>{cadena.txtProfile[languageText]} {perfil.nombre}?</small>
                    <button className="icon-ok" onClick={() => handleOk(perfil.id)}>
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M15 9H15.01M8 9H10M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9C14.5 8.72386 14.7239 8.5 15 8.5C15.2761 8.5 15.5 8.72386 15.5 9Z" stroke="#FFFFFF" strokeWidth="1.6799999999999997" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </button>
                    <button className="icon-dont" onClick={() => handleDont(perfil.id)}>
                        <svg width="35px" height="35px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16M15 9H15.01M9 9H9.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9C14.5 8.72386 14.7239 8.5 15 8.5C15.2761 8.5 15.5 8.72386 15.5 9ZM9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9C8.5 8.72386 8.72386 8.5 9 8.5C9.27614 8.5 9.5 8.72386 9.5 9Z" stroke="#FFFFFF" strokeWidth="1.6799999999999997" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </button>
                </span>
            </p>
        </div>
    );
};

export default Profile;