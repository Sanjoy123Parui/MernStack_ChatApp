// Consuming to the importing some modules & lib for using in usersignup routes
import { express } from "../config/app.js";
import { trycatchWrapper } from "../helpers/try-catch.helper.js";
import { badRequestError } from "../utils/utility.js";
import { usersignupRegister } from "../controllers/usersignup.controller.js";
import {
  userRegisterValidator,
  userLoginValidator,
} from "../validators/usersignup.validator.js";
import { validateHandler } from "../middlewares/validator.middleware.js";

// declare the variables instance object of usersignupRouter
const usersignupRouter = express.Router();

// here import all modules and libraies of packages
// import { express } from "../connections/socketconnection.js";

// import {
//   userRegister,
//   userLogin,
//   userRecover,
//   userLogout,
//   userAccountdelete,
//   userChangePassword,
// } from "../controllers/usersignup.controller.js";

// import {
//   userRegisterValidator,
//   userLoginValidator,
//   userChangePassValidator,
// } from "../validators/validator.js";
// import { userCheckAuth } from "../middlewares/auth.middleware.js";
// import { asyncHandler } from "../helpers/try-catch.helper.js";
// import { errorHandler } from "../utils/utility.js";
// import { validateHandler } from "../middlewares/validator.middleware.js";

// const userSignupRouter = express.Router();

// there are define all user signup router endpoint

// userRegister end-point router with post
/* userSignupRouter
  .route("/signup/register")
  .post(validateHandler(userRegisterValidator), userRegister); */

// Part-2
/* userSignupRouter.route("/signup/register").post(
  validateHandler(userRegisterValidator),
  asyncHandler(async (req, res, next) => {
    const userData = await userRegister(req);

    if (!userData) {
      return next(errorHandler("Failed to create account", 400));
    } else {
      return res.status(201).json({
        msg: "Account has been created successfully",
      });
    }
  })
); */

// userLogin end-point router with post
/* userSignupRouter
  .route("/signup/login")
  .post(validateHandler(userLoginValidator), userLogin); */

// user recover authorization end-point router with post
/* userSignupRouter.route("/signup/recover/user").post(userRecover); */

// userLogout end-point router with post
/* userSignupRouter.route("/signup/logout").post(userCheckAuth, userLogout); */

// userAccount delete end-point router with delete
/* userSignupRouter.route("/signup/remove/:user_Id").delete(userAccountdelete); */

// userChangePassword end-point router with all
/* userSignupRouter
  .route("/signup/password/:user_Id")
  .all(validateHandler(userChangePassValidator), userChangePassword); */

// export user signup router
// export { userSignupRouter };

// here define all are the usersignup routes endpoints methods

// usersignup registration account routes with post method
usersignupRouter.route("/register").post(
  validateHandler(userRegisterValidator),
  trycatchWrapper(async (req, res, next) => {
    // declare variables for accessing the controller function data
    let userInfo = await usersignupRegister(req);

    // check the condition for existing user
    if (!userInfo) {
      return next(badRequestError("Failed to create new account"));
    } else {
      return res.status(201).send({ msg: "Account created successfully" });
    }
  })
);

// exporting the usersignupRouter routes
export { usersignupRouter };
