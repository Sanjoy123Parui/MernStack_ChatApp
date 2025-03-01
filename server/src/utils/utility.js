import { checkEventsError } from "../middlewares/errors.middleware.js";

// here are define errorHandler utility function
export const errorHandler = (message, statusCode) => {
  let error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

// here define eventErrorHandler utility function
export const eventsErrorHandler = (socket) => {
  return {
    handleError: (error, errMessage) => {
      // check the condition error instance of Error
      if (error instanceof Error) {
        // declare to handle internal error or server error
        checkEventsError(error, socket);
      } else {
        // declare to handle custom error of events
        // let customError = new Error("An unknown error Occured");
        let customError = new Error(errMessage);
        checkEventsError(customError, socket);
      }
    },
  };
};
