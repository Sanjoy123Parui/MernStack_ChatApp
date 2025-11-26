// Consuming to the importing some modules & lib for using in usersignup routes
import { express } from "../config/app.js";
import { trycatchWrapper } from "../helpers/try-catch.helper.js";
import { badRequestError, unauthorizedError } from "../utils/utility.js";
import {
  usersignupRegister,
  usersignupLogin,
  usersignupLogout,
  usersignupChangePass,
  usersignupAuthToken,
} from "../controllers/usersignup.controller.js";
import {
  sendUserToken,
  sendUserTokenAuth,
  removeUserToken,
} from "../utils/features.js";
import {
  userRegisterValidator,
  userLoginValidator,
  userChangePassValidator,
} from "../validators/usersignup.validator.js";
import { userCheckAuth } from "../middlewares/auth.middleware.js";
import { validateHandler } from "../middlewares/validator.middleware.js";

// declare the variables instance object of usersignupRouter
const usersignupRouter = express.Router();

// here define all are the usersignup routes endpoints methods

// usersignup register routes with post method
usersignupRouter.route("/register").post(
  validateHandler(userRegisterValidator),
  trycatchWrapper(async (req, res, next) => {
    // declare variables for accessing the controller function data
    const { result } = await usersignupRegister(req);
    // check the condition for existing user
    if (!result) {
      return next(badRequestError("Failed to create new account"));
    } else {
      // declare payload requests for send token
      req.tokenPayload = {
        usersignupId: result,
        statusCode: 201,
        message: "Account has created successfully",
      };

      // return res.status(201).send({ success: true, result });
      return sendUserToken(req, res, next);
    }
  })
);

// usersignup login routes with post method
usersignupRouter.route("/login").post(
  validateHandler(userLoginValidator),
  trycatchWrapper(async (req, res, next) => {
    // declare variables for accessing login controller data
    const { usersignupId, userprofileId } = await usersignupLogin(req);

    if (!userprofileId) {
      // declare payload for token signupId
      req.tokenPayload = {
        usersignupId: usersignupId,
        statusCode: 200,
        message: "Login Successfully",
      };

      return sendUserToken(req, res, next);
    } else {
      // declare payload for token signupId & also profileId
      req.tokenPayloadAuth = {
        usersignupId: usersignupId,
        userprofileId: userprofileId,
        statusCode: 200,
        message: "Login Successfully",
      };

      return sendUserTokenAuth(req, res, next);
    }
  })
);

// usersignup logout routes with post method
usersignupRouter.route("/logout").post(
  userCheckAuth,
  trycatchWrapper(async (req, res, next) => {
    const { existUser } = await usersignupLogout(req);

    // declare for paylod of remove token
    req.tokenRemovePayload = {
      usersignupId: existUser,
      statusCode: 200,
      message: "Logout Successfully",
    };

    return removeUserToken(req, res, next);
  })
);

// usersignup auth token routes with post method
usersignupRouter.route("/accept-auth").post(
  userCheckAuth,
  trycatchWrapper(async (req, res, next) => {
    // declare for variable as controllers
    const { userRefreshToken, usersignupRefreshToken, usersignupId } =
      await usersignupAuthToken(req);

    // check the condition is refreshToken and usersignup refresh token are matched
    if (userRefreshToken !== usersignupRefreshToken) {
      return next(
        unauthorizedError("Token has expired please login to access")
      );
    } else {
      // declare paylod variables of auth token
      req.tokenPayload = {
        usersignupId: usersignupId,
        statusCode: 200,
        message: "User authenticated successfully",
      };

      return sendUserToken(req, res, next);
    }
  })
);

// usersignup change password routes with all method like PUT || PATCH
usersignupRouter.route("/change-pass/:_id").all(
  validateHandler(userChangePassValidator),
  trycatchWrapper(async (req, res, next) => {
    if (req.method === "PUT" || req.method === "PATCH") {
      // declare variables for handle controller of usersignup change password
      const { userPassword } = await usersignupChangePass(req);

      // check condition as password can be changed or not
      if (!(userPassword.matchedCount && userPassword.modifiedCount)) {
        return next("Password has not change, please try again later");
      } else {
        return res
          .status(200)
          .json({ success: true, msg: "Password has changed successfully" });
      }
    } else {
      return next(badRequestError("Wrong Cridential"));
    }
  })
);

// exporting the usersignupRouter routes
export { usersignupRouter };
