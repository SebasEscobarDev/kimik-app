
import { CapacitorHttp } from '@capacitor/core';
import { urlApi } from "@/consts"
import { getCookie } from "@/utils/cookies"
const API = `${urlApi}/couples`


export const getCouples = async ({ results, page }) => {
	try {
		const response = await CapacitorHttp.get({
			url: `${API}/?` + new URLSearchParams({
				...(results && { results }),
				...(page && { page }),
			})
		});
		return response;
	} catch (e) {
		console.log(e)
	}
}

export const getCouple = async (id) => {
	try {
		const response = await CapacitorHttp.get({
			url: `${API}/${id}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + getCookie('AuthToken')
			}
		});
		return response
	} catch (e) {
		console.log(e)
	}
}

export const getCoupleUser = async (id) => {
	try {
		const response = await CapacitorHttp.get({
			url: `${API}/user/${id}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + getCookie('AuthToken')
			}
		});
		return response
	} catch (e) {
		console.log(e)
	}
}

export const postCouple = async (item) => {
	try {
		console.log(item)
		const response = await CapacitorHttp.post({
			url: API,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + getCookie('AuthToken')
			},
			data: JSON.stringify(item)
		});
		return response
	} catch (e) {
		console.log(e)
	}
}

export const putCouple = async (item) => {
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


export const postCoupleFormData = async (formData) => {
	try {
		const response = await CapacitorHttp.request({
			method: 'POST',
			url: `${API}/form`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data',
				'Authorization': 'Bearer ' + getCookie('AuthToken')
			},
			data: formData
		})
		return response
	} catch (e) {
		console.log(e)
	}
}

export const deleteCouple = async (item) => {
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