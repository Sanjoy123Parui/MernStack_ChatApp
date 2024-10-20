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



const eventTryCatch = (eventsParamdata) => async (data, socket, next) => {

    // use try-catch
    try {

        await eventsParamdata(data, socket, next);

    }
    catch (error) {

        next(error)

    }

}


// export trycatch helper
export { TryCatch, eventTryCatch };
console.log('Try-Catch helper is worked successfully');
