// here import all socket.io connection library packages
import http from "http";
import express from "express";
import { Server } from "socket.io";
import { CONNECTION, DISCONNECT } from '../constants/events.js';

// here define object of socket.io connection
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});


// here are define socket.io connections
io.on(CONNECTION, (socket) => {

    console.log("User connected successfully");

    // disconnect of io connection
    socket.on(DISCONNECT, () => {

        console.log("User disconnected");

    });

});


// export socket.io connection
export { app, io, server };
console.log("Websocket are worked successfully");



