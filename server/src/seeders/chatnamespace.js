import {
    io,
    cookieParser,
    userSocketIds
} from '../connections/socketconnection.js';
import { socketIoAuthenticator } from '../middlewares/auth.middleware.js';



// here declare single chat namespace functionality
const chatSeeders = (() => {

    // here was declare one-to-one chatNameSpace
    const chatNameSpace = io.of('/chat-namespace');

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