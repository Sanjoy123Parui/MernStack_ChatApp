// create error middleware
const checkError = (err, req, res, next)=>{

    err.message ||= "Internal server error";
    err.statusCode ||= 500;

    // check condition for 11000 code error
    if(err.code === 11000){
        let error = Object.keys(err.keyPattern).join(",");
        err.message = `Duplicate field = ${error}`;
        err.statusCode = 400;
    }

    if(err.name === "CastError"){
        let errorPath = err.path
        err.message = `Invalid Format of ${errorPath}`;
        err.statusCode = 400;
    }

    return res.status(err.statusCode).json({
        message: process.env.NODE_ENV.trim() === "DEVELOPMENT" ? err.message : err.message
    });
}

// export error middleware
export {checkError};
console.log('Error middleware is worked successfully');