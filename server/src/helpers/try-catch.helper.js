// there are define asynHandler of trycatch wrapper helper function
const asyncHandler = (paramsData) => async (req, res, next) => {

    // use try-catch
    try {

        await paramsData(req, res, next);
    }

    catch (error) {
        next(error);
    }

}


// export trycatch helper
export { asyncHandler };