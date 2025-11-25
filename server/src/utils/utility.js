// define and exporting baseAppError handling function
export const baseAppError = (message, statusCode) => {
  let errorObj = new Error(message);
  errorObj.statusCode = statusCode || 500;
  errorObj.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
  errorObj.isOperational = true;
  return errorObj;
};

// define and exporting badRequestError handling function
export const badRequestError = (details) => {
  let errorObj = baseAppError("Bad Request", 400);
  errorObj.details = details;
  return errorObj;
};

// define and exporting notfoundError handling function
export const notfoundError = (details) => {
  let errorObj = baseAppError("Resource not found", 404);
  errorObj.details = details;
  return errorObj;
};

// define and exporting validationError handling function
export const validationError = (details) => {
  let errorObj = baseAppError("Validation failed", 422);
  errorObj.details = Array.isArray(details) ? details : [{ error: details }];
  return errorObj;
};

// define and exporting unauthorizedError handling function
export const unauthorizedError = (details) => {
  let errorObj = baseAppError("Unauthorized access", 401);
  errorObj.details = details;
  return errorObj;
};

// define and exporting forbiddenError handling function
export const forbiddenError = (details) => {
  let errorObj = baseAppError("Forbidden access", 403);
  errorObj.details = details;
  return errorObj;
};

// define and exporting databaseError handling function
export const databaseError = (details) => {
  let errorObj = baseAppError("Database Error", 500);
  errorObj.details = details;
  return errorObj;
};
