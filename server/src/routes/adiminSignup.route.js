import express from "express";
import { adminRegister, adminLogin, adminLogout } from '../controllers/adminSignup.controller.js';
import { adminCheckAuth } from '../middlewares/auth.middleware.js';

// there define admin signup router
const adminSignupRouter = express.Router();


// there are declare admin signup all routes endpoint

// admin Register router with post
adminSignupRouter.post('/register', adminRegister);

// admin login router with post
adminSignupRouter.post('/login', adminLogin);

// admin logout router with post
adminSignupRouter.post('/logout', adminCheckAuth, adminLogout);

// export adminRegister router
export { adminSignupRouter };
console.log('Admin signup routes is worked successfully');