// there are define errorHandler utility function
const errorHandler = (message, statusCode) => {

    let error = new Error(message);
    error.statusCode = statusCode;

    return error;
}


// export utility
export { errorHandler };
console.log('Error handler utility is worked successfully');
