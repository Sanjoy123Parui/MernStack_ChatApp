// Consuming the importing modules and lib for authentication middleware
import { jwt } from "../config/app.js";
import { trycatchWrapper } from "../helpers/try-catch.helper.js";
import { unauthorizedError } from "../utils/utility.js";

// here define and exporting also user authentication middleware function for handle auth
export const userCheckAuth = trycatchWrapper(async (req, res, next) => {
  // here was user token store into the cookie or header
  const userToken =
    req.cookies?.access_userToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!userToken) {
    return next(
      unauthorizedError(`Unauthorized users token please login to access`)
    );
  }

  // declare variables for verifying decodeData
  let decodeData = jwt.verify(userToken, process.env.JWT_ACCESS_SCKEY);
  req.user = await decodeData._id;
  next();
});
