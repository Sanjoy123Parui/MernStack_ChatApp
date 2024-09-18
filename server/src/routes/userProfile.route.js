import express from "express";
import { userNewProfile, userProfileview, userProfileupdate } from '../controllers/userProfile.controller.js';
import { userCheckAuth } from '../middlewares/auth.middleware.js';
import { uploadObj } from '../middlewares/fileuploads.middleware.js';

// there are define userProfile router
const userprofileRouter = express.Router();

// there are define all routes of end points in user profile


// create new user profile router with post
userprofileRouter.route('/creates').post(userCheckAuth, uploadObj.single('avatar'), userNewProfile);

// view user profile router with get
userprofileRouter.route('/read/:userprofile_id').get(userCheckAuth, userProfileview);

// updated profile router with put
userprofileRouter.route('/update/:userprofile_id').put(userCheckAuth, userProfileupdate);

// export there user profile router
export { userprofileRouter };
console.log('User profile routes is worked successfully');