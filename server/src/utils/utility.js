// here are the define baseAppError function which are handle globall with exporting
export const baseAppError = (message, statusCode) => {
  // declare variables of handling error object
  const error = new Error(message);
  error.statusCode = statusCode || 500;
  // here can status code can start at 4
  error.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
  // this error can handle for global flag of error successfully
  error.isOperational = true;

  return error;
};

// define function of bad request error with exporting
export const badRequestError = (message = "Bad Request") => {
  let badRequest = baseAppError(message, 400);
  return badRequest;
};

// define function of not found error with exporting
export const notfoundError = (message = "Resource not found") => {
  let notFound = baseAppError(message, 404);
  return notFound;
};

// define function of validation error with exporting
export const validationError = (message = "Validation failed") => {
  let validation = baseAppError(message, 422);
  return validation;
};

// define function of unauthorized error with exporting
export const unauthorizedError = (message = "Unauthorized access") => {
  let unauthorized = baseAppError(message, 401);
  return unauthorized;
};

// define function of forbidden error with exporting
export const forbiddenError = (message = "Forbidden access") => {
  let forbidden = baseAppError(message, 403);
  return forbidden;
};

// define function of database connection error with exporting
export const dbConnectionError = (message = "Database Error") => {
  let dbConnection = baseAppError(message, 500);
  return dbConnection;
};
