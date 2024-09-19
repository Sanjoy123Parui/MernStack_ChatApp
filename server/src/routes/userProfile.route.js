import express from "express";
import { userNewProfile, userProfileviewAll, userProfileview, userProfileImageupdate, userProfiledelete, userProfileupdate } from '../controllers/userProfile.controller.js';
import { userCheckAuth, adminCheckAuth } from '../middlewares/auth.middleware.js';
import { uploadObj } from '../middlewares/fileuploads.middleware.js';

// there are define userProfile router
const userprofileRouter = express.Router();

// there are define all routes of end points in user profile


// create new user profile router with post
userprofileRouter.route('/creates').post(userCheckAuth, uploadObj.single('avatar'), userNewProfile);


// admin view all user profile router with get
userprofileRouter.route('/view/all').get(adminCheckAuth, userProfileviewAll);


// view user profile router with get
userprofileRouter.route('/read/:userprofile_id').get(userCheckAuth, userProfileview);


// update  user profile image router with put
userprofileRouter.route('/image/update/:userprofile_id').put(userCheckAuth, uploadObj.single('avatar'), userProfileImageupdate);


// delete user profile router with delete
userprofileRouter.route('/remove/:userprofile_id').delete(userCheckAuth, userProfiledelete);


// updated profile router with all
userprofileRouter.route('/updates/:userprofile_id').all(userCheckAuth, userProfileupdate);

// export there user profile router
export { userprofileRouter };
console.log('User profile routes is worked successfully');