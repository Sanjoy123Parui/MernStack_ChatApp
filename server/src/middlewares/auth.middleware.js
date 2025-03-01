// import library and modules
import jwt from "jsonwebtoken";
import { asyncHandler } from "../helpers/try-catch.helper.js";
import { errorHandler } from "../utils/utility.js";

// here are define user authentication
export const userCheckAuth = asyncHandler(async (req, res, next) => {
  // declare user access token are store cookie or headers
  let userToken =
    req.cookies?.access_userToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  // here check token are exist or not with condition
  if (!userToken) {
    return next(errorHandler("Unauthorized token please login to access", 401));
  } else {
    // declare decodeData
    let decodeData = jwt.verify(userToken, process.env.JWT_ACCESS_SCKEY);
    req.user = await decodeData._id;
    next();
  }
});

// here are define admin authentication
export const adminCheckAuth = asyncHandler(async (req, res, next) => {
  // declare admin access token and refresh token are store cookie or headers
  let adminToken =
    req.cookies?.access_adminToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  // check the ondition token can be expired or not
  if (!adminToken) {
    return next(errorHandler("Unauthorized token please login to access", 401));
  } else {
    // there are decoded data
    let decodeData = jwt.verify(adminToken, process.env.JWT_ACCESS_SCKEY);
    req.admin = await decodeData._id;
    next();
  }
});
