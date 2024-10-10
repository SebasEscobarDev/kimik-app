
import { CapacitorHttp } from "@capacitor/core"
import { urlApi } from "@/consts"
import { getCookie } from "@/utils/cookies"
const API = `${urlApi}/notifies`

export const getNotifies = async ({ results, page, user_id }) => {
	try {
		const response = await CapacitorHttp.get({
			url: `${API}/?` + new URLSearchParams({
				...(results && { results }),
				...(page && { page }),
				...(user_id && { user_id }),
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

export const getNotify = async (id) => {
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

export const postNotify = async (item) => {
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

export const putNotify = async (item) => {
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

export const deleteNotify = async (item) => {
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

export const deleteAllNotifies = async () => {
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