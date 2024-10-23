// here will be import packages library and modules
import { io, cookieParser } from '../connections/socketconnection.js';
import { socketIoAuthenticator } from '../middlewares/auth.middleware.js';
import {
    CONNECTION,
    DISCONNECT,
    SEND_MESSAGE
} from '../constants/eventsHandler.js';
import { checkEventsError } from '../middlewares/errors.middleware.js';


// here define user single chat namespace functionality
const singleUserChat = (() => {

    // declare chat namespace
    const singleChatNameSpace = io.of('/singleChat-NameSpace');

    // here declare connected User
    const connectedUser = new Map();


    // authenticator middleware use in namespace
    singleChatNameSpace.use((socket, next) => {

        cookieParser()(
            socket.request,
            socket.request.res,
            async (err) => await socketIoAuthenticator(err, socket, next)
        );

    })


    // here define singlechat namespace connection
    singleChatNameSpace.on(CONNECTION, (socket) => {

        // here declare userId who was autherized
        let userId = socket.user;

        // there was in which user connect
        let userConnection = connectedUser.set(userId.toString(), socket.id);

        console.log('User connected successfully', userConnection);


        // send message
        socket.on(SEND_MESSAGE, async (data, next) => {

            try {

                let msg = data;

                if (!userId) {
                    next("Invalid User");
                }
                else {

                    await msg;
                    socket.emit(SEND_MESSAGE, msg);

                }

            }
            catch (err) {

                checkEventsError(err, socket, next);

            }


        });


        // define there disconnect namespace
        socket.on(DISCONNECT, () => {

            // here disconnect user remove
            let userDisconnect = connectedUser.delete(userId.toString(), socket.id);

            console.log('User was disconnect', userDisconnect);


        });


    });


});


// here export single chat namespace
export { singleUserChat };
console.log('Single Chat namespace is worked successfully');