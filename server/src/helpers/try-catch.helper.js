// there are define tryCatch helper function
const TryCatch = (paramsData) => async (req, res, next) => {

    try {

        await paramsData(req, res, next);
    }

    catch (error) {
        next(error);
    }

}



// export trycatch helper
export { TryCatch };
console.log('Try-Catch helper is worked successfully');
