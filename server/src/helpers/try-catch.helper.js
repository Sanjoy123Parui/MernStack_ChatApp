import { checkEventsError } from '../middlewares/errors.middleware.js';

// there are define tryCatch helper function
const TryCatch = (paramsData) => async (req, res, next) => {

    // use try-catch
    try {

        await paramsData(req, res, next);
    }

    catch (error) {
        next(error);
    }

}



// here define event try-catch helper function
const eventTryCatch = (handleData) => {
    return async (...args) => {

        try {

            await handleData(...args);

        } catch (error) {

            let socket = args[0];
            checkEventsError(error, socket);

        }

    }
}


// export trycatch helper
export {
    TryCatch,
    eventTryCatch
};

console.log('Try-Catch helper is worked successfully');