
import { CapacitorHttp } from '@capacitor/core';
import { urlApi } from "@/consts"
import { getCookie } from "@/utils/cookies"
const API = `${urlApi}/users`


export const getUsers = async ({ results, page }) => {
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

export const getAllFilters = async (id) => {
	try {
		const response = await CapacitorHttp.get({
			url: `${API}/allfilters/${id}`,
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

export const getInterestedUsers = async ({ genero_interes }) => {
	try {
		const response = await CapacitorHttp.get({ url: `${API}/gendered-users/${genero_interes}` });
		return response;
	} catch (e) {
		console.log(e)
	}
}

export const getUser = async (id) => {
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

export const postUser = async (item) => {
	try {
		console.log(item)
		console.log(API)
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

export const putUser = async (item) => {
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


export const postUserFormData = async (formData) => {
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

export const deleteUser = async (item) => {
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

export const loginUser = async (item) => {
	try {
		const response = await CapacitorHttp.post({
			url: `${API}/login`,
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
			data: JSON.stringify(item)
		})
		return response
	} catch (e) {
		console.log(e)
	}
}