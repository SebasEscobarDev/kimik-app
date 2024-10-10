
import { CapacitorHttp, } from '@capacitor/core';
const API = `http://localhost:1234/v1/chat/completions`

import { Device } from '@capacitor/device';

async function isMobileDevice() {
    const info = await Device.getInfo();
    return info.platform === 'ios' || info.platform === 'android';
}


export const postChatKimik = async (msg) => {
    try {
        const response = await CapacitorHttp.request({
            method: 'POST',
            url: API,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer lm-studio'
            },
            data: {
                model: "model-identifier",
                messages: [
                    { "role": "system", "content": "Te llamas Kimik, un asistente de IA útil, inteligente, amable y eficiente. Siempre cumples con las solicitudes de los usuarios de la mejor manera posible. Eres un experto psicólogo en relaciones con más de 20 años de experiencia. Siempre respondes en español de manera concisa. Sólo hablas de relaciones" },
                    { "role": "user", "content": msg }
                ],
                temperature: 0.7,
            },
        });
        return response;
    } catch (e) {
        // console.log(e)
        return "Error al conectar con Kimik IA";
    }
}


export const postKimikChunk = async (msg, onChunk) => {
    if (await isMobileDevice()) {
        return await postChatKimik(msg);
    }
    try {
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer lm-studio'
            },
            body: JSON.stringify({
                model: "model",
                messages: [
                    { "role": "system", "content": "Te llamas Kimik, un asistente de IA útil, inteligente, amable y eficiente. Siempre cumples con las solicitudes de los usuarios de la mejor manera posible. Eres un experto psicólogo en relaciones con más de 20 años de experiencia. Siempre respondes en español de manera concisa. Sólo hablas de relaciones" },
                    { "role": "user", "content": msg }
                ],
                temperature: 0.7,
                stream: true
            })
        });
        if (!response.body) {
            return "Error al conectar con Kimik IA";
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let newMessage = { "role": "assistant", "content": "" };

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value);
            newMessage.content += chunk;
            if (onChunk) onChunk(chunk);
        }

        return newMessage.content;
    } catch (e) {
        console.log(e);
        return "Error al conectar con LLM";
    }
}
