// here import all socket.io connection library packages and modules
import http from "http";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import cluster from "cluster";
import os from "os";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import NodeCache from "node-cache";
import { Server } from "socket.io";
import { corsOption } from "../lib/optionconfig.js";

// here was declare object of middleware in express server
const app = express();
// here create object of cache
const cache = new NodeCache({
  stdTTL: 300,
  checkperiod: 60,
});
// here create server
const server = http.createServer(app);
const io = new Server(server, {
  cors: corsOption,
});

// export all library packages of connection
export {
  express,
  cors,
  mongoose,
  path,
  cluster,
  os,
  morgan,
  cookieParser,
  cache,
  io,
  app,
  server,
};
