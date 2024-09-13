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

// export auth middleware
export { userCheckAuth };
console.log('Auth middleware is worked successfully');
