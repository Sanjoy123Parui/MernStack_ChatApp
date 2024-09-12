import express from "express";
import { userRegister } from "../controllers/userSingup.controller.js";
const userSignupRouter = express.Router();

// there are define all user signup router endpoint

// userRegister router with post
userSignupRouter.post('/register', userRegister);

// export user signup router
export { userSignupRouter };

console.log('User signup router is worked successfully');