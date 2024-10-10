import { urlApi } from '@/consts'
import io from 'socket.io-client'

const urlSocket = `${urlApi}`

console.log('urlSocket', urlSocket)

// const socket = io(urlSocket, { transports: ['websocket', 'polling'] })
const socket = io(urlSocket, { transports: ['websocket', 'polling'] })
export default socket
