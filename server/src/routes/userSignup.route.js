import express from "express";

// here import all modules
import {
    userRegister,
    userLogin,
    userRecover,
    userLogout
} from '../controllers/userSingup.controller.js';

import {
    userRegisterValidator,
    userLoginValidator
} from '../validators/validator.js';

import { userCheckAuth } from '../middlewares/auth.middleware.js';
import { validateHandler } from '../middlewares/validator.middleware.js';


const userSignupRouter = express.Router();

// there are define all user signup router endpoint

// userRegister end-point router with post
userSignupRouter.route('/signup/register').post(
    validateHandler(userRegisterValidator),
    userRegister
);

// userLogin end-point router with post
userSignupRouter.route('/signup/login').post(
    validateHandler(userLoginValidator),
    userLogin
);

// user recover authorization end-point router with post
userSignupRouter.route('/signup/recover/user').post(
    userRecover
);

// userLogout end-point router with post
userSignupRouter.route('/signup/logout').post(
    userCheckAuth,
    userLogout
);

// export user signup router
export { userSignupRouter };