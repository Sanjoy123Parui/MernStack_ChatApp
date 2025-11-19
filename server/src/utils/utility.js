// here are define errorHandler utility function
// export const errorHandler = (message, statusCode) => {
//   let error = new Error(message);
//   error.statusCode = statusCode;
//   return error;
// };

// define and exporting baseAppError handling function
export const baseAppError = (message, statusCode) => {
  let errorObj = new Error(message);
  errorObj.statusCode = statusCode || 500;
  errorObj.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
  errorObj.isOperational = true;
  return errorObj;
};

// define and exporting badRequestError handling function
export const badRequestError = (message = "Bad Request") => {
  let errorObj = new baseAppError(message, 400);
  return errorObj;
};

// define and exporting notfoundError handling function
export const notfoundError = (message = "Resource not found") => {
  let errorObj = new baseAppError(message, 404);
  return errorObj;
};

// define and exporting validationError handling function
export const validationError = (message = "Validation failed") => {
  let errorObj = new baseAppError(message, 422);
  return errorObj;
};

// define and exporting unauthorizedError handling function
export const unauthorizedError = (message = "Unauthorized access") => {
  let errorObj = new baseAppError(message, 401);
  return errorObj;
};

// define and exporting forbiddenError handling function
export const forbiddenError = (message = "Forbidden access") => {
  let errorObj = new baseAppError(message, 403);
  return errorObj;
};

// define and exporting databaseError handling function
export const databaseError = (message = "Database Error") => {
  let errorObj = new baseAppError(message, 500);
  return errorObj;
};
