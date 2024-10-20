// there are define errorHandler utility function
const errorHandler = (message, statusCode) => {

    let error = new Error(message);
    error.statusCode = statusCode;

    return error;
}

const eventErrorHandler = (message)=>{

    let error = new Error(message);

    return error;
}

// export utility
export { errorHandler, eventErrorHandler };
console.log('Error handler utility is worked successfully');