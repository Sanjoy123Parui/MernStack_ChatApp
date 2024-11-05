// there are define errorHandler utility function
const errorHandler = (message, statusCode) => {

    let error = new Error(message);
    error.statusCode = statusCode;

    return error;
}



// there are define event errorHandler utility function
const eventErrorHandler = (message) => {

    let error = new Error(message);

    return error;

}

// export utility
export {
    errorHandler,
    eventErrorHandler
};

console.log('Error handler utility is worked successfully');