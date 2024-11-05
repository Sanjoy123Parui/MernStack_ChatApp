// here import library packages and modules

import {
    SEND_CHAT
} from '../constants/customevents.js';
import { eventErrorHandler } from '../utils/utility.js';
import { eventTryCatch } from '../helpers/try-catch.helper.js';



// here define all chat events handler functionality of socket.io


// here define send chat evvents
const chatSend = (socket, userId) => socket.on(SEND_CHAT, eventTryCatch(async (data) => {

    let { messages } = data;

    // here can check auth userId
    if (!userId) {
        throw eventErrorHandler('User are not authorized');
    }
    else {

        await messages;
        socket.emit(SEND_CHAT, { messages });
    }


}));


// here export all handles events of chats
export {
    chatSend
};

console.log('Chat event handler is worked successfully');