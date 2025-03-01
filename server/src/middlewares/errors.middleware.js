import { envMode } from "../connections/socketconnection.js";

// create error middleware functions
export const checkError = (err, req, res, next) => {
  err.message ||= "Internal server error";
  err.statusCode ||= 500;

  // check condition for 11000 code error
  if (err.code === 11000) {
    let error = Object.keys(err.keyPattern).join(",");
    err.message = `Duplicate field = ${error}`;
    err.statusCode = 400;
  }

  // check condition cast error of path
  if (err.name === "CastError") {
    let errorPath = err.path;
    err.message = `Invalid format of ${errorPath}`;
    err.statusCode = 400;
  }

  return res.status(err.statusCode).json({
    message: envMode === "DEVELOPMENT" ? err : err.message,
  });
};

// create events error middleware functions of socket.io
export const checkEventsError = (err, socket) => {
  // default error message
  err.message ||= "SocketIO error occured";

  // check  condition for socketIo events handled
  if (err.code === "E_CONNREFUSED") {
    err.message = "Connection refused. Please check the server.";
  } else if (err.name === "TimeoutError") {
    err.message = "Connection timed out.";
  }

  // here emit the error of events in socket.Io
  socket.emit("error", {
    message: envMode === "DEVELOPMENT" ? err : err.message,
  });
};
