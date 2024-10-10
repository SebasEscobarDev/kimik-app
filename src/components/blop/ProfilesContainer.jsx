import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import useUsers from '@/hooks/useUsers';
import Profile from './Profile';

const ProfilesContainer = () => {
    const { users, loading } = useUsers();
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        if (!loading) {
            setProfiles(users);
            arrangeProfiles(users);
        }
    }, [loading, users]);

    const arrangeProfiles = (perfiles) => {
        let circles = [];

        perfiles.forEach((perfil) => {
            const tamano = perfil.afinidad / 3;

            const getRandomSize = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            const checkOverlap = (x1, y1, r1, x2, y2, r2) => {
                const distance = Math.sqrt(Math.pow((x2 + 60) - (x1 + 60), 2) + Math.pow((y2 + 60) - (y1 + 60), 2));
                return distance < r1 + r2;
            };


            const x = getRandomSize(0, window.innerWidth - 300 - tamano);
            const y = getRandomSize(0, window.innerHeight - 430 - tamano);
            const overlap = circles.some(circle =>
                checkOverlap(x + tamano / 2, y + tamano / 2, tamano / 2, circle.x + circle.size / 2, circle.y + circle.size / 2, circle.size / 2)
            );

            if (!overlap) {
                //animacion para que parezca atomo
                setTimeout(() => {
                    gsap.to(`#circle-${perfil.id}`, {
                        x: x + getRandomSize(1, 20),
                        y: y + getRandomSize(1, 20),
                        duration: getRandomSize(5, 20) * 3 / 8,
                        repeat: -1,
                        yoyo: true,
                        ease: 'circle.inout',
                    });
                    gsap.set(`#circle-${perfil.id}`, { x, y });
                    circles.push({ x, y, size: tamano });
                }, 100);
            }
        });
    };

    const handleRemoveProfile = (id) => {
        setProfiles(profiles.filter(profile => profile.id !== id));
    };

    return (
        <div id="contenedor-perfiles" style={{ position: 'relative' }}>
            {!loading && profiles.map((perfil) => (
                <Profile key={perfil.id} id={perfil.id} perfil={perfil} onRemove={handleRemoveProfile} />
            ))}
        </div>
    );
};

export default ProfilesContainer;