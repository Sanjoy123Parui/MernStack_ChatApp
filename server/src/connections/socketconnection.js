// here import all socket.io connection library packages and modules
import http from "http";
import express from "express";
import { corsOption } from '../lib/optionconfig.js';
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import { socketIoAuthenticator } from '../middlewares/auth.middleware.js';
import { checkEventsError } from '../middlewares/errors.middleware.js';
import { eventErrorHandler } from '../utils/utility.js';
import { eventTryCatch } from '../helpers/try-catch.helper.js';
import {
    CONNECTION,
    DISCONNECT
} from '../constants/eventsHandler.js';


// here define object of socket.io connection
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: corsOption
});

// here declare connected users
const connectedUser = new Map();

// here are use socket.io authentication of middleware
io.use((socket, next) => {

    cookieParser()(
        socket.request,
        socket.request.res,
        async (err) => await socketIoAuthenticator(err, socket, next)
    );

    (err)=> checkEventsError(err, socket, next);

});

// here define connection with events
io.on(CONNECTION, (socket) => {

    // user _id
    let userId = socket.user;

    let users = connectedUser.set(userId.toString(), socket.id);

    console.log('User connected successfully', users);


    // disconnect 
    socket.on(DISCONNECT, () => {

        console.log('User disconnected successfully');

    });

});





// export socket.io connection
export { express, cookieParser, app, server };
console.log("Websocket are worked successfully");