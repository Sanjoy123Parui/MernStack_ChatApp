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
    let verifiedUserToken = jwt.sign({ _id: user._id }, process.env.JWT_SCKEY);

    return res.status(statusCode).cookie('userToken', verifiedUserToken, cookieOptions).json({message});

}



// define there sendAdminToken features function
const sendAdminToken = (res, admin, statusCode, message)=>{

    // there was verified token
    let verifiedAdminToken = jwt.sign({_id:admin._id}, process.env.JWT_SCKEY);

    return res.status(statusCode).cookie('adminToken', verifiedAdminToken, cookieOptions).json({message});

}

// export features
export { sendUserToken, sendAdminToken, cookieOptions };

console.log('Auth features is worked successfully');
