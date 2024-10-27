// create error middleware
const checkError = (err, req, res, next) => {

    err.message ||= "Internal server error";
    err.statusCode ||= 500;

    // check condition for 11000 code error
    if (err.code === 11000) {
        let error = Object.keys(err.keyPattern).join(",");
        err.message = `Duplicate field = ${error}`;
        err.statusCode = 400;
    }

    // check condition cast error of path
    if (err.name === "CastError") {
        let errorPath = err.path;
        err.message = `Invalid format of ${errorPath}`;
        err.statusCode = 400;
    }

    return res.status(err.statusCode).json({
        message: process.env.NODE_ENV.trim() === "DEVELOPMENT" ? err.message : err.message
    });


}


const checkEventsError = (err, socket, next) => {

    err.message ||= "Internal server error";

    // here check 11000 code error
    if (err.code === 11000) {
        let error = Object.keys(err.keyPattern).join(",");
        err.message = `Duplicate field : ${error}`;
    }

    // check castError of path
    if (err.name === "CastError") {
        let errorPath = err.path;
        err.message = `Invalid format of ${errorPath}`;
    }

    // here declare which server has running
    let errorServer = process.env.NODE_ENV.trim() === "DEVELOPMENT" ? err.message : err.message;


    socket.emit('err', errorServer);
    // next();
}


// export error middleware
export { checkError, checkEventsError };
console.log('Error middleware is worked successfully');