
import { CapacitorHttp } from "@capacitor/core"
import { urlApi } from "@/consts"
import { getCookie } from "@/utils/cookies"
const API = `${urlApi}/compatibilities`

export const getCompatibilities = async ({ results, page, perfil_user_id, user_id }) => {
	try {
		const response = await CapacitorHttp.get({
			url: `${API}/${perfil_user_id}/${user_id}/?` + new URLSearchParams({
				...(results && { results }),
				...(page && { page }),
			}),
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

export const getCompatibility = async (id) => {
	try {
		const response = await CapacitorHttp.get({
			url: `${API}/${id}`,
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

export const postCompatibility = async (item) => {
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

export const putCompatibility = async (item) => {
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

export const deleteCompatibility = async (item) => {
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

export const deleteAllCompatibilities = async () => {
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