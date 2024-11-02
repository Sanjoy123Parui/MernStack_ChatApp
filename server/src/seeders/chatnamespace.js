import { io } from '../connections/socketconnection.js';
import { chatSend } from '../events/chatevents.handler.js';


// here declare single chat namespace functionality
const chatSeeders = (() => {

    const chatNameSpace = io.of('/chat-namespace');

    // here was declare userSocketIds
    const userSocketIds = new Map();

    // here define connection events
    chatNameSpace.on("connection", (socket) => {

        // retrieve the userid
        let userId = "v4v646fvf5356fevfv";

        // declare user connected with socket.io
        let connectedUser = userSocketIds.set(userId, socket.id);

        console.log('User has been connected successfully', connectedUser);

        // here declare all handling events call back functions
        chatSend(socket);

        // define disconnect events
        socket.on("disconnect", () => {

            // declare user disconeccted with socket.io
            let disconnectUser = userSocketIds.delete(userId);

            console.log('User was disconnected', disconnectUser);

        });

    });

});

// export single chat namespace functionality
export {
    chatSeeders
};

console.log('Chat namespace is worked successfully');