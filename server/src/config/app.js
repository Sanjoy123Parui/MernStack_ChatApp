// here import all libraries which are using for start server in root
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
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { z } from "zod";
import { Server } from "socket.io";
import { corsOption } from "../lib/optionconfig.js";

// here was declare server Mode
const envMode = process.env.NODE_ENV.trim() || "PRODUCTION";

// declare object of socketIds
const userSocketIds = new Map();

// here was delare middleware object of express app
const app = express();

// here was declare object where handle caching data
const cache = new NodeCache({
  stdTTL: 300,
  checkperiod: 60,
});

// create server of node.js & express.js application
const server = http.createServer(app);
const io = new Server(server, {
  cors: corsOption,
});

// here can exporting all libraies of root
export {
  express,
  cors,
  mongoose,
  app,
  path,
  cluster,
  os,
  z,
  io,
  jwt,
  bcryptjs,
  morgan,
  userSocketIds,
  cookieParser,
  cache,
  envMode,
  server,
};
