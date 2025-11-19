// Consuming the importing modules and lib for authentication middleware
import { jwt } from "../config/app.js";
import { trycatchWrapper } from "../helpers/try-catch.helper.js";
import { unauthorizedError } from "../utils/utility.js";

// import library and modules
// import jwt from "jsonwebtoken";
// import { asyncHandler } from "../helpers/try-catch.helper.js";
// import { errorHandler } from "../utils/utility.js";

// here are define user authentication
/* export const userCheckAuth = asyncHandler(async (req, res, next) => {
  // declare user access token are store cookie or headers
  let userToken =
    req.cookies?.access_userToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  // here check token are exist or not with condition
  if (!userToken) {
    return next(
      errorHandler("Unauthorized users token please login to access", 401)
    );
  } else {
    // declare decodeData
    let decodeData = jwt.verify(userToken, process.env.JWT_ACCESS_SCKEY);
    req.user = await decodeData._id;
    next();
  }
}); */

// here are define admin authentication
/* export const adminCheckAuth = asyncHandler(async (req, res, next) => {
  // declare admin access token and refresh token are store cookie or headers
  let adminToken =
    req.cookies?.access_adminToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  // check the ondition token can be expired or not
  if (!adminToken) {
    return next(
      errorHandler("Unauthorized admin token please login to access", 401)
    );
  } else {
    // there are decoded data
    let decodeData = jwt.verify(adminToken, process.env.JWT_ACCESS_SCKEY);
    req.admin = await decodeData._id;
    next();
  }
}); */

// here define and exporting also user authentication middleware function for handle auth
export const userCheckAuth = trycatchWrapper(async (req, res, next) => {
  // declare variables for access token and stored in cookie or headers
  const userToken =
    req.cookies?.access_userToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  // check condition for token exist
  if (!userToken) {
    return next(
      unauthorizedError("Unauthorized users token please login to access")
    );
  } else {
    // declare variables for decoded data
    let decodeData = jwt.verify(userToken, process.env.JWT_ACCESS_SCKEY);
    req.user = await decodeData.id;
    next();
  }
});
