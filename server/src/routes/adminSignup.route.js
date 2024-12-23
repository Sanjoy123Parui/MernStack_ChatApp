import express from "express";

import {
    adminRegister,
    adminLogin,
    adminRecover,
    adminLogout,
    adminAccountdelete,
    adminChangePassword
} from '../controllers/adminSignup.controller.js';

import {
    adminRegisterValidator,
    adminLoginValidator,
    adminChangePassValidator
} from '../validators/validator.js';

import { adminCheckAuth } from '../middlewares/auth.middleware.js';
import { validateHandler } from '../middlewares/validator.middleware.js';


// there define admin signup router
const adminSignupRouter = express.Router();


// there are declare admin signup all routes endpoint

// admin Register end-point router with post
adminSignupRouter.route('/signup/register').post(
    validateHandler(adminRegisterValidator),
    adminRegister
);


// admin login end-point router with post
adminSignupRouter.route('/signup/login').post(
    validateHandler(adminLoginValidator),
    adminLogin
);


// admin recover authorization end-point router with post
adminSignupRouter.route('/signup/recover/admin').post(
    adminRecover
);


// admin logout end-point router with post
adminSignupRouter.route('/signup/logout').post(
    adminCheckAuth,
    adminLogout
);


    
// adminAccount delete end-point router with delete
adminSignupRouter.route('/signup/remove/:admin_Id').delete(
    adminAccountdelete
);


// userChangePassword end-point router with all
adminSignupRouter.route('/signup/password/:admin_Id').all(
    validateHandler(adminChangePassValidator),
    adminChangePassword
);

// export adminRegister router
export { adminSignupRouter };