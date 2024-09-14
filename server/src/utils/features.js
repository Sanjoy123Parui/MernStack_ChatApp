// there also import jwt library
import jwt from "jsonwebtoken";


// declare options of cookie expiration
const cookieOptions = {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true
};

// define there sendUserToken features function
const sendUserToken = (res, user, statusCode, message) => {

    // there was verify token
    let verifiedToken = jwt.sign({ _id: user._id }, process.env.JWT_SCKEY);

    return res.status(statusCode).cookie('token', verifiedToken, cookieOptions).json({message});

}



// define there sendAdminToken features function
const sendAdminToken = (res, admin, statusCode, message)=>{

    // there was verified token
    let verifiedToken = jwt.sign({_id:admin._id}, process.env.JWT_SCKEY);

    return res.status(statusCode).cookie('token', verifiedToken, cookieOptions).json({message});

}

// export features
export { sendUserToken, sendAdminToken, cookieOptions };

console.log('Auth features is worked successfully');
