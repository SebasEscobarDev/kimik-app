
import { CapacitorHttp } from "@capacitor/core";
import { urlApi } from "@/consts"
import { getCookie } from "@/utils/cookies"
const API = `${urlApi}/messages`

export const getMessages = async ({ fromUserId, toUserId }) => {
	try {
		const response = await CapacitorHttp.get({
			url: `${API}/user/${fromUserId}/to/${toUserId}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + getCookie('AuthToken')
			}
		});
		return response;
	} catch (e) {
		console.log(e)
	}
}

export const getMessage = async (id) => {
	try {
		const response = CapacitorHttp.get({
			url: `${API}/${id}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + getCookie('AuthToken')
			}
		})
		return response;
	} catch (e) {
		console.log(e)
	}
}

export const postMessage = async (item) => {
	try {
		const response = CapacitorHttp.post({
			url: `${API}/`,
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

export const putMessage = async (tiem) => {
	try {
		const response = CapacitorHttp.put({
			url: API,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + getCookie('AuthToken')
			},
			data: JSON.stringify(tiem)
		})
		return response
	} catch (e) {
		console.log(e)
	}
}

export const deleteMessage = async (item) => {
	try {
		const response = CapacitorHttp.delete({
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


export const deleteAllMessages = async () => {
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