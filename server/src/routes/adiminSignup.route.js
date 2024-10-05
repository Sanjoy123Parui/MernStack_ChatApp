import express from "express";
import { adminRegister, adminLogin, adminRecover, adminLogout } from '../controllers/adminSignup.controller.js';
import { adminCheckAuth } from '../middlewares/auth.middleware.js';

// there define admin signup router
const adminSignupRouter = express.Router();


// there are declare admin signup all routes endpoint

// admin Register end-point router with post
adminSignupRouter.route('/signup/register').post(
    adminRegister
);


// admin login end-point router with post
adminSignupRouter.route('/signup/login').post(
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

// export adminRegister router
export { adminSignupRouter };
console.log('Admin signup route is worked successfully');