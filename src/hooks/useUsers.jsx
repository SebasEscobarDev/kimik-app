import { useState, useEffect } from 'react';
import { getAllFilters, getUsers } from '@/api/users';
import { getCookie } from '@/utils/cookies';
import srcDiego from "@/assets/images/dashbaord/diego.jpg";
import srcKimik from "@/assets/images/logo.webp";
import { urlGeneral } from '@/consts';
import { getCompatibilities } from '@/api/compatibilities';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            if (!getCookie('User')) return;


            const user = JSON.parse(getCookie('User'));
            const response = await getAllFilters(user.id);
            const generoInteres = user.genero_interes.split(',');
            console.log(user.nombre)
            console.log("user")
            console.log(response)
            if (!response.data && !response.data.rows) return;

            function calcularEdad(dia, mes, anio) {
                const fechaNacimiento = new Date(anio, mes - 1, dia); // Los meses en JavaScript son 0-indexados
                const fechaActual = new Date();

                let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                const mesActual = fechaActual.getMonth();
                const diaActual = fechaActual.getDate();

                // Ajustar la edad si la fecha actual es antes del cumpleaños de este año
                if (mesActual < (mes - 1) || (mesActual === (mes - 1) && diaActual < dia)) {
                    edad--;
                }

                return edad;
            }

            const [edadMin, edadMax] = user.rango_edad.replace(/\s+/g, '').split(',').map(Number); // Eliminar espacios y dividir en números

            const filteredUsers = response.data.rows
                .filter((perfil) =>
                    perfil.nombre &&
                    calcularEdad(parseInt(perfil.nacimiento_dia), parseInt(perfil.nacimiento_mes), parseInt(perfil.nacimiento_ano)) >= edadMin &&
                    calcularEdad(parseInt(perfil.nacimiento_dia), parseInt(perfil.nacimiento_mes), parseInt(perfil.nacimiento_ano)) <= edadMax // Filtro de rango de edad
                )
                .map(async (perfil) => {
                    //consultar compatibilidad para campo afinidad entre perfil_user_id y user_id

                    const result = await getCompatibilities({ perfil_user_id: user.id, user_id: perfil.id });
                    const afinidad = result.data.rows[0].score ?? 10;

                    return {
                        id: perfil.id,
                        nombre: perfil.nombre,
                        foto: perfil?.foto ? urlGeneral + '/' + perfil.foto : srcKimik.src,
                        afinidad: afinidad,
                    }
                })

            //get filteredUsers promise
            const filteredUserss = await Promise.all(filteredUsers);
            console.log(filteredUserss)

            setUsers(filteredUserss);
            setLoading(false);
        };

        fetchUsers();
    }, []);

    return { users, loading };
};

export default useUsers;