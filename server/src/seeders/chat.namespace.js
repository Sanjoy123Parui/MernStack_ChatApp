// import many packages of library and modules
import { io, cookieParser, socketUser } from '../connections/socketconnection.js';
import {
    CONNECTION,
    DISCONNECT,
} from '../constants/eventsHandler.js';
import { socketIoAuthenticator } from '../middlewares/auth.middleware.js';
import { checkEventsError } from '../middlewares/errors.middleware.js';


// here define chat seeders namespace functionality
const chatSeeders = (() => {

    // here create chat namespace
    const chatNameSpace = io.of('/chat-NameSpace');


    // here use authenticate middleware of chatNameSpace
    chatNameSpace.use((socket, next) => {

        cookieParser()(
            socket.request,
            socket.request.res,
            async (err) => await socketIoAuthenticator(err, socket, next)
        );

    });

    // chat namespace connection of user
    chatNameSpace.on(CONNECTION, (socket) => {

        // declare userId
        let userId = socket.user;


        // authenticate user connected with socket.io
        let userConnection = socketUser.set(userId.toString(), socket.id);

        console.log('User connected successfully', userConnection);
      


        // disconnect user of chat namespace
        socket.on(DISCONNECT, () => {

            // authenticate user disconnect with socket.io
            let disconnectUser = socketUser.delete(userId.toString(), socket.id);

            console.log('User was disconnect', disconnectUser);

        });

    });

});

// here export chat seeders namespace functionality
export { chatSeeders };
console.log('Chat namespace is worked successfully');