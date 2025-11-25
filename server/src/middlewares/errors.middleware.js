// Consuming to the importing some modules & lib
import { baseAppError } from "../utils/utility.js";

// define some specific error handler funtion
const handleDuplicateError = (err) => {
  let field = Object.keys(err.keyPattern).join(",");
  let error = baseAppError(`Duplicate field:${field} already exist`, 400);
  return error;
};

const handleCastError = (err) => {
  let errorPath = err.path;
  let errorValue = err.value;
  let error = baseAppError(`Invalid format of ${errorPath}:${errorValue}`, 400);
  return error;
};

const handleValidationError = (err) => {
  let errorObj = Object.values(err.errors).map((e) => e.message);
  let errorMsg = errorObj.join(", ");
  let error = baseAppError(`Validation error:${errorMsg}`, 422);
  return error;
};

const handleJWTError = () => {
  let error = baseAppError("Invalid token. Please login again", 401);
  return error;
};

const handleJWTExpiredError = () => {
  let error = baseAppError("Token expired. Please login again", 401);
  return error;
};

// here define with exporting error middleware function for use globally errors handle
export const checkErrors = (err, req, res, next) => {
  // declare variables for access globall error
  err.message ||= "Internal server error";
  err.status ||= "error";
  err.statusCode ||= 500;
  err.details ||= "Something went wrong in server";

  // check the condition for specific errors
  if (err.code === 11000) err = handleDuplicateError(err);
  if (err.name === "CastError") err = handleCastError(err);
  if (err.name === "ValidationError") err = handleValidationError(err);
  if (err.name === "JsonWebTokenError") err = handleJWTError();
  if (err.name === "TokenExpiredError") err = handleJWTExpiredError();

  return res.status(err.statusCode).json({
    success: false,
    status: err.status,
    errors: err.message,
    msg: err.details,
  });
};
