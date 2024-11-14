import {
    SEND_CHAT
} from '../constants/customevents.js';

// here can define all one-to-one chat events functionality


// sendChat 
const chatSend = (socket, userId) => socket.on(SEND_CHAT, async (data) => {

    // use try-catch
    try {

        let { messages } = data;

        // check user has been authenticate or not
        if (!userId) {

            socket.emit(SEND_CHAT, "User are not exist");

        }
        else {

            console.log({ userId, messages });
            

        }

    }
    catch (error) {
        socket.emit(SEND_CHAT, `Internal server error: ${error}`);
    }

});

// export all events functionality
export {
    chatSend
};