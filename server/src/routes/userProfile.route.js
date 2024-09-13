import express from "express";
import { userNewprofile, userProfileview } from '../controllers/userProfile.controller.js';
import { userCheckAuth } from '../middlewares/auth.middleware.js';

// there are define userProfile router
const userprofileRouter = express.Router();

// there are define all routes of end points in user profile


// create new user profile route with post
userprofileRouter.post('/creates', userCheckAuth, userNewprofile);

// view user profile
userprofileRouter.get('/view/:userprofile_id', userCheckAuth, userProfileview);

// export there user profile router
export {userprofileRouter};
console.log('User profile router is worked successfully');