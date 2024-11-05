// here import library packages and modules

import {
    CHAT_JOINROOM,
    SEND_CHAT
} from '../constants/customevents.js';



// here define all chat events handler functionality of socket.io


// here define chat join rooms
const chatRoom = (socket) => socket.on(CHAT_JOINROOM, (data) => {

    let { sender, reciever } = data;

    let roomId = [sender, reciever].sort().join(".");

    socket.join(roomId);

    console.log(CHAT_JOINROOM, roomId);

});



// here define send chat evvents
const chatSend = (socket) => socket.on(SEND_CHAT, (data) => {

    let { sender, roomId, messages } = data;

    console.log({ sender, roomId, messages });
    // socket.emit(SEND_CHAT, { messages });
    socket.to(roomId).emit(SEND_CHAT, {sender,  messages});


});


// here export all handles events of chats
export {
    chatRoom,
    chatSend
};

console.log('Chat event handler is worked successfully');