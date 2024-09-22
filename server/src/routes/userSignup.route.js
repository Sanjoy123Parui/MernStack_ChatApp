import express from "express";
import { userRegister, userLogin, userLogout } from '../controllers/userSingup.controller.js';
import { userCheckAuth } from '../middlewares/auth.middleware.js';

const userSignupRouter = express.Router();

// there are define all user signup router endpoint

// userRegister router with post
userSignupRouter.route('/signup/register').post(userRegister);

// userLogin router with post
userSignupRouter.route('/signup/login').post(userLogin);

// userLogout router with post
userSignupRouter.route('/signup/logout').post(userCheckAuth, userLogout);

// export user signup router
export { userSignupRouter };

console.log('User signup route is worked successfully');