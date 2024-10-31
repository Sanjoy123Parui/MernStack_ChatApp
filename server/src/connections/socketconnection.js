// here import all socket.io connection library packages and modules
import http from "http";
import express from "express";
import { corsOption } from '../lib/optionconfig.js';
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import {
    chatSeeders
} from '../seeders/chatnamespace.js';

// here define object of socket.io connection
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: corsOption
});


// here declare all namespace callback functions
chatSeeders();

// export socket.io connection
export { express, cookieParser, io, app, server };
console.log("Websocket are worked successfully");