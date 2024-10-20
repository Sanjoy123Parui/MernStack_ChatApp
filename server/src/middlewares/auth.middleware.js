// import library and modules 
import jwt from "jsonwebtoken";
import { TryCatch, eventTryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler, eventErrorHandler } from '../utils/utility.js';

// there are define user authentication
const userCheckAuth = TryCatch(async (req, res, next) => {

    // declare user access token are store cookie or headers
    let userToken = req.cookies?.access_userToken || req.header("Authorization")?.replace("Bearer ", "");

    // here check token are exist or not with condition
    if (!userToken) {
        return next(errorHandler("Unauthorized token please login to access", 401));
    }
    else {

        // declare decodeData
        let decodeData = jwt.verify(userToken, process.env.JWT_ACCESS_SCKEY);
        req.user = await decodeData._id;
        next();

    }
});


// there are define admin authentication
const adminCheckAuth = TryCatch(async (req, res, next) => {

    // declare admin access token and refresh token are store cookie or headers
    let adminToken = req.cookies?.access_adminToken || req.header("Authorization")?.replace("Bearer ", "");

    // check the ondition token can be expired or not
    if (!adminToken) {
        return next(errorHandler("Unauthorized token please login to access", 401));
    }
    else {
        // there are decoded data
        let decodeData = jwt.verify(adminToken, process.env.JWT_ACCESS_SCKEY);
        req.admin = await decodeData._id;
        next();
    }
});


// here define socketIO authentication middleware
const socketIoAuthenticator = eventTryCatch(async (err, socket, next) => {

    if (err) {

        return next(eventErrorHandler("Please login to access authentication"));

    }
    else {

        // there define token from auhentication
        // let userToken = socket.request.headers.cookie.split(';').find(c => c.trim().startsWith('access_userToken='))?.split('=')[1];
        let userToken = socket.request.cookies.access_userToken;

        // check token has been authenticate
        if (!userToken) {
            return next(eventErrorHandler("Unauthorized token please login to access"));
        }
        else {

            // here decoded token 
            let decodeData = jwt.verify(userToken, process.env.JWT_ACCESS_SCKEY);
            let user = await decodeData._id;

            // check user found or not
            if(!user){
                return next(eventErrorHandler("Please login to access authentication"));
            }

            else{

                socket.user = user;
                next();

            }

        }

    }


});


// export auth middleware
export { userCheckAuth, adminCheckAuth, socketIoAuthenticator };
console.log('Auth middleware is worked successfully');