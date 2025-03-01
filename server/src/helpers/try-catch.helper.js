import { eventsErrorHandler } from "../utils/utility.js";

// here are define asyncHandler of trycatch wrapper helper function
export const asyncHandler = (paramsData) => async (req, res, next) => {
  // use try-catch
  try {
    await paramsData(req, res, next);
  } catch (error) {
    next(error);
  }
};

// here are define asyncEventHandler of trycatch wrapper helper function
export const asyncEventHandler =
  (handleData) => async (data, socket, errMessage) => {
    // here declare eventsErrorHandler variables
    let eventsError = eventsErrorHandler(socket);

    // here can use trycatch
    try {
      await handleData(data, socket, errMessage);
    } catch (error) {
      eventsError.handleError(error, errMessage);
    }
  };
