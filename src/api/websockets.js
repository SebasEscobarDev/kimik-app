
import { CapacitorHttp } from '@capacitor/core';
import { urlApi } from "@/consts"
import { getCookie } from "@/utils/cookies"
const API = `${urlApi}/websockets`


export const deleteAllWebsockets = async () => {
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
