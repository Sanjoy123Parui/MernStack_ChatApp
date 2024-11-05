import { io } from '../connections/socketconnection.js';
import { 
    chatRoom,
    chatSend 
} from '../events/chatevents.handler.js';


// here declare single chat namespace functionality
const chatSeeders = (() => {

    const chatNameSpace = io.of('/chat-namespace');

    // here was declare userSocketIds
    // const userSocketIds = new Map();

    // here define connection events
    chatNameSpace.on("connection", (socket) => {

        console.log('User has been connected successfully', socket.id);

        // here declare all handling events call back functions
        chatRoom(socket);
        chatSend(socket);

        // define disconnect events
        socket.on("disconnect", () => {

            console.log('User was disconnected', socket.id);

        });

    });

});

// export single chat namespace functionality
export {
    chatSeeders
};

console.log('Chat namespace is worked successfully');