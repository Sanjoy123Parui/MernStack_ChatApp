// here import library packages and modules
import { v4 as uuid } from "uuid";
import {
    SEND_CHAT
} from '../constants/customevents.js';

// here define all chat events handler functionality of socket.io

// here define send chat evvents
const chatSend = (socket) => socket.on(SEND_CHAT, (data) => {

    let { messages } = data

    console.log({ messages });

    socket.emit(SEND_CHAT, { messages });

});


// here export all handles events of chats
export { chatSend };

console.log('Chat event handler is worked successfully');