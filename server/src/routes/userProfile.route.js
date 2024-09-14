import express from "express";
import { userNewprofile, userProfileview, userProfileupdate } from '../controllers/userProfile.controller.js';
import { userCheckAuth } from '../middlewares/auth.middleware.js';

// there are define userProfile router
const userprofileRouter = express.Router();

// there are define all routes of end points in user profile


// create new user profile router with post
userprofileRouter.post('/creates', userCheckAuth, userNewprofile);

// view user profile router with get
userprofileRouter.get('/view/:userprofile_id', userCheckAuth, userProfileview);

// updated profile router with put
userprofileRouter.put('/update/:userprofile_id', userCheckAuth, userProfileupdate);

// export there user profile router
export {userprofileRouter};
console.log('User profile routes is worked successfully');