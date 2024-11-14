import {
    SEND_CHAT
} from '../constants/customevents.js';

// here define all one-to-one chat events functionality
const userSendChat = (socket, userId) => socket.on(SEND_CHAT, async (data) => {

    try {

        // here declare data
        let { messages } = data;

        // here check userId
        if (!userId) {

            socket.emit(SEND_CHAT, "User does not exist");

        }
        else {

            await messages;

            console.log({ userId, messages });

        }

    }
    catch (error) {
        socket.emit(SEND_CHAT, `Internal server error : ${error}`);
    }

});

// export all one-to-one chat events
export {
    userSendChat
};