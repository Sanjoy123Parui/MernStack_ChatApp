// here import all socket.io connection library packages
import http from "http";
import express from "express";
import { Server } from "socket.io";

// here define object of socket.io connection
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:"*"
    }
});


// here are define socket.io connections
io.on('connection', (socket)=>{

    console.log("User connected successfully");

    // disconnect of io connection
    socket.on('disconnect', ()=>{

        console.log("User disconnected");

    });

});


// export socket.io connection
export {app, io, server};
console.log("Websocket are worked successfully");



