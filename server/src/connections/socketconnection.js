// here import all socket.io connection library packages and modules
import http from "http";
import express from "express";
import { corsOption } from '../lib/optionconfig.js';
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import {
    chatSeeders
} from '../seeders/chat.namespace.js';
import { socketIoAuthenticator } from '../middlewares/auth.middleware.js';
import { checkEventsError } from '../middlewares/errors.middleware.js';


// here define object of socket.io connection
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: corsOption
});


// here was declare user socket ids
const socketUser = new Map();


// here are use socket.io authentication of middleware
io.use((socket, next) => {

    cookieParser()(
        socket.request,
        socket.request.res,
        async (err) => await socketIoAuthenticator(err, socket, next)
    );

})


// here define all namespace
chatSeeders();


// here was use global error middleware
io.use(async (socket, next) => {

    try {

        next();

    }
    catch (err) {
        await checkEventsError(err, socket, next);
    }

});


// export socket.io connection
export { express, cookieParser, io, socketUser, app, server };
console.log("Websocket are worked successfully");