import { baseAppError } from "../utils/utility.js";

// create error middleware functions
// export const checkError = (err, req, res, next) => {
//   err.message ||= "Internal server error";
//   err.statusCode ||= 500;

//   // check condition for 11000 code error
//   if (err.code === 11000) {
//     let error = Object.keys(err.keyPattern).join(",");
//     err.message = `Duplicate field = ${error}`;
//     err.statusCode = 400;
//   }

//   // check condition cast error of path
//   if (err.name === "CastError") {
//     let errorPath = err.path;
//     err.message = `Invalid format of ${errorPath}`;
//     err.statusCode = 400;
//   }

//   return res.status(err.statusCode).json({ message: err.message });
// };

// define function for handle database specific errors
const handleCastError = (err) => {
  let castErrorObj = new baseAppError(`Invalid ${err.path}:${err.value}`, 400);
  return castErrorObj;
};

const handleDuplicateKeyError = (err) => {
  const field = Object.keys(err.keyValue)[0];
  let duplicatekeyObj = new baseAppError(`${field} already exist`, 400);
  return duplicatekeyObj;
};

const handleValidationError = (err) => {
  let messages = Object.values(err.errors).map((e) => e.message);
  let validationObj = new baseAppError(
    `Validation error:${messages.join(", ")}`,
    422
  );
  return validationObj;
};

// define function for handle jwt specific errors
const handleJWTError = () => {
  let jwtObj = new baseAppError("Invalid Token. Please login again", 401);
  return jwtObj;
};

const handleJWTExpiredError = () => {
  let jwtExpiredObj = new baseAppError(
    "Token expired. Please login again",
    401
  );
  return jwtExpiredObj;
};

// define error middleware function which are also exporting where handle errors
export const checkErrors = (err, req, res, next) => {
  // declare variables of error
  let error = { ...err };
  error.message = error.message;

  // here can check the condition of specific errors
  if (err.code === 11000) error = handleDuplicateKeyError(err);
  if (err.name === "CastError") error = handleCastError(err);
  if (err.name === "ValidationError") error = handleValidationError(err);
  if (err.name === "JsonWebTokenError") error = handleJWTError();
  if (err.name === "TokenExpiredError") error = handleJWTExpiredError();

  return res.status(error.statusCode || 500).json({
    success: false,
    status: error.status || "error",
    message: error.message || "Something went wrong are internal server error",
    statusCode: error.statusCode || 500,
  });
};
