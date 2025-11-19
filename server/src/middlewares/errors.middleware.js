// Consuming to the importing some modules & lib
import { baseAppError } from "../utils/utility.js";

// define some specific error handler funtion
const handleDuplicateError = (err) => {
  let field = Object.keys(err.keyPattern).join(",");
  let error = new baseAppError(`Duplicate field:${field} already exist`, 400);
  return error;
};

const handleCastError = (err) => {
  let errorPath = err.path;
  let errorValue = err.value;
  let error = new baseAppError(
    `Invalid format of ${errorPath}:${errorValue}`,
    400
  );
  return error;
};

const handleValidationError = (err) => {
  let errorObj = Object.values(err.errors).map((e) => e.message);
  let errorMsg = errorObj.join(", ");
  let error = new baseAppError(`Validation error:${errorMsg}`, 422);
  return error;
};

const handleJWTError = () => {
  let error = new baseAppError("Invalid token. Please login again", 401);
  return error;
};

const handleJWTExpiredError = () => {
  let error = new baseAppError("Token expired. Please login again", 401);
  return error;
};

// here define with exporting error middleware function for use globally errors handle
export const checkErrors = (err, req, res, next) => {
  // declare variables for access globall error
  let error = { ...err };
  error.message ||= "Internal server error as something went wrong";
  error.status ||= "error";
  error.statusCode ||= 500;

  // check the condition for specific errors
  if (err.code === 11000) error = handleDuplicateError(err);
  if (err.name === "CastError") error = handleCastError(err);
  if (err.name === "ValidationError") error = handleValidationError(err);
  if (err.name === "JsonWebTokenError") error = handleJWTError();
  if (err.name === "TokenExpiredError") error = handleJWTExpiredError();

  return res.status(error.statusCode).json({
    success: false,
    status: error.status,
    message: error.message,
  });
};

// create error middleware functions
/* export const checkError = (err, req, res, next) => {
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

  return res.status(err.statusCode).json({ message: err.message });
}; */
