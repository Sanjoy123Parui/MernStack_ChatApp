// import jwt library
import jwt from "jsonwebtoken";
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';

// there are define user authentication
const userCheckAuth = TryCatch(async (req, res, next) => {

    // declare token
    let token = req.cookies['token'];

    if (!token) {
        return next(errorHandler("Unauthorized token please login to access", 401))
    }
    else {

        // declare decodeData
        let decodeData = jwt.decode(token, process.env.JWT_SCKEY);
        req.user = await decodeData._id;
        next();

    }
});


// there are define admin authentication
const adminCheckAuth = TryCatch(async (req, res, next) => {

    // declare token into the cookie
    let token = req.cookies['token'];

    // check the ondition token can be expired or not
    if(!token){
        return next(errorHandler("Unauthorized token please login to access",401));
    }
    else{
        // there are decoded data
        let decodeData = jwt.verify(token, process.env.JWT_SCKEY);
        req.admin = await decodeData._id;
        next();
    }
});

// export auth middleware
export { userCheckAuth, adminCheckAuth };
console.log('Auth middleware is worked successfully');
