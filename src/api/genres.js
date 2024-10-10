
import { CapacitorHttp } from "@capacitor/core"
import { urlApi } from "@/consts"
import { getCookie } from "@/utils/cookies"
const API = `${urlApi}/genres`

export const getGenres = async () => {
    try {
        const response = await CapacitorHttp.get({
            url: `${API}/`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response
    } catch (e) {
        console.log(e)
    }
}

export const getGenre = async (id) => {
    try {
        const response = await CapacitorHttp.get({
            url: `${API}/${id}`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response
    } catch (e) {
        console.log(e)
    }
}

export const postGenre = async (item) => {
    try {
        const response = await CapacitorHttp.post({
            url: API,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie('AuthToken')
            },
            data: JSON.stringify(item)
        })
        return response
    } catch (e) {
        console.log(e)
    }
}

export const putGenre = async (item) => {
    try {
        const response = await CapacitorHttp.put({
            url: API,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie('AuthToken')
            },
            data: JSON.stringify(item)
        })
        return response
    } catch (e) {
        console.log(e)
    }
}

export const deleteGenre = async (item) => {
    try {
        const response = await CapacitorHttp.delete({
            url: API,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie('AuthToken')
            },
            data: JSON.stringify(item)
        })
        return response
    } catch (e) {
        console.log(e)
    }
}

export const deleteAllGenres = async () => {
    try {
        const response = await CapacitorHttp.delete({
            url: `${API}/all`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie('AuthToken')
            }
        })
        return response
    } catch (e) {
        console.log(e)
    }
}