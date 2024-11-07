// here import library packages and modules
import {
    SEND_CHAT
} from '../constants/customevents.js';


// here define all chat events handler functionality of socket.io


// here define send chat evvents
const chatSend = (socket, userId) => socket.on(SEND_CHAT, async (data) => {

    try {

        let { messages } = data;

        // here can check user can be authenticate or not
        if (!userId) {

            socket.emit(SEND_CHAT, "User are not authenticated");

        }
        else {

            console.log({ messages });
            socket.emit(SEND_CHAT, { messages });

        }


    }
    catch (error) {

        socket.emit(SEND_CHAT, `Internal server error : ${error}`);

    }

});


// here export all handles events of chats
export {
    chatSend
};

console.log('Chat event handler is worked successfully');