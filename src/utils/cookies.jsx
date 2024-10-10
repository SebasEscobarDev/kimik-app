import Cookies from 'js-cookie'

// Función para establecer una cookie
export const setCookie = (nombre, valor) => {
    // Cookies.set(nombre, valor, { expires: diasParaExpirar })
    Cookies.set(nombre, valor)
}

//obtener el valor de una cookie por su nombre
export const getCookie = (nombre) => {
    return Cookies.get(nombre) || undefined
}

export default Cookies