import {
    io,
    cookieParser
} from '../connections/socketconnection.js';
import { socketIoAuthenticator } from '../middlewares/auth.middleware.js';
import { userSendChat } from '../events/chatevents.js';


// here declare single chat namespace functionality
const chatSeeders = (() => {

    const chatNameSpace = io.of('/chat-namespace');

    // here was declare userSocketIds
    const userSocketIds = new Map();

    // here was define authentication middleware use of socket.io
    chatNameSpace.use((socket, next) => {
        cookieParser()(
            socket.request,
            socket.request.res,
            async (err) => await socketIoAuthenticator(err, socket, next)
        );
    });

    // here define connection events
    chatNameSpace.on("connection", (socket) => {

        // here declare auth user id retrieve
        let userId = socket.user;

        // here declare user connection
        let userConnected = userSocketIds.set(userId, socket.id);

        console.log('User has been connected successfully', userConnected);


        // here declare all handling events call back functions
        userSendChat(socket, userId);

        // define disconnect events
        socket.on("disconnect", () => {

            // here declare disconnect user
            let userDisconnected = userSocketIds.delete(userId);

            console.log('User was disconnected', userDisconnected);

        });

    });

});

// export single chat namespace functionality
export {
    chatSeeders
};