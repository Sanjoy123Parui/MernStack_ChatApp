// here import library packages and modules of chat socket.io events
import {
    SEND_CHAT
} from '../constants/eventsHandler.js';
import { checkEventsError } from '../middlewares/errors.middleware.js';


// here define all chat events with namspace from scoket.io
// send chat events
const sendChat = (socket, userId, chatNameSpace) => socket.on(SEND_CHAT, async (data, next) => {

    // use try catch
    try {

        // here declare payload
        let { sender, reciever, messages } = data;


        // chek user authorized or not
        if (!userId) {

            next("User can not authorized");

        }
        else {

            let chatInfo = await {
                contactInfo: [{
                    sender: sender,
                    reciever:reciever,
                    messages: messages
                }]
            };

            



            socket.emit(SEND_CHAT, { chatInfo });

        }


    }
    catch (err) {
        checkEventsError(err, socket, next);
    }

});



// here export all chat events
export { sendChat };
console.log('Chat events is worked successfully');