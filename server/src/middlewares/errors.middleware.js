// create error middleware
const checkError = (err, req, res, next)=>{

    err.message ||= "Internal server error";
    err.statusCode ||= 500;

    return res.status(err.statusCode).json({message:err.message});
}

// export error middleware
export {checkError};
console.log('Error middleware is worked successfully');