
import { CapacitorHttp } from "@capacitor/core"
import { urlApi } from "@/consts"
import { getCookie } from "@/utils/cookies"
const API = `${urlApi}/matches`

export const getMatches = async ({ results, page, user_id, match_user_id }) => {
	try {
		const response = await CapacitorHttp.get({
			url: `${API}/?` + new URLSearchParams({
				...(results && { results }),
				...(page && { page }),
				...(user_id && { user_id }),
				...(match_user_id && { match_user_id }),
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

export const getChatsUser = async ({ results, page, user_id }) => {
	try {
		const response = await CapacitorHttp.get({
			url: `${API}/chats/?` + new URLSearchParams({
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

export const getMatch = async (id) => {
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

export const postMatch = async (item) => {
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

export const putMatch = async (item) => {
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

export const deleteMatch = async (item) => {
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

export const deleteAllMatches = async () => {
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