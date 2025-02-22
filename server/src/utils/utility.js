// there are define errorHandler utility function
export const errorHandler = (message, statusCode) => {
  let error = new Error(message);
  error.statusCode = statusCode;

  return error;
};
