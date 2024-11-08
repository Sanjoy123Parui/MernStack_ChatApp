import express from "express";

import { 
    userNewProfile, 
    userProfileviewAll, 
    userProfileview, 
    userProfileImageupdate, 
    userProfileupdate 
} from '../controllers/userProfile.controller.js';

import { userCheckAuth, adminCheckAuth } from '../middlewares/auth.middleware.js';
import { uploadObj } from '../middlewares/fileuploads.middleware.js';



// there are define userProfile router
const userprofileRouter = express.Router();

// there are define all routes of end points in user profile


// create new user profile router with post
userprofileRouter.route('/profile/creates').post(
    userCheckAuth,
    uploadObj.single('avatar'),
    userNewProfile
);


// admin view all user profile router with get
userprofileRouter.route('/profile/view/all').get(
    adminCheckAuth,
    userProfileviewAll
);


// view user profile router with get
userprofileRouter.route('/profile/read/:userprofile_id').get(
    userCheckAuth,
    userProfileview
);


// update  user profile image router with put
userprofileRouter.route('/profile/image/update/:userprofile_id').put(
    userCheckAuth,
    uploadObj.single('avatar'),
    userProfileImageupdate
);


// updated profile router with all
userprofileRouter.route('/profile/updates/:userprofile_id').all(
    userCheckAuth,
    userProfileupdate
);

// export there user profile router
export { userprofileRouter };