import express from "express";

import {
    userNewProfile,
    userProfileview,
    userProfileImageupdate,
    userProfileupdate
} from '../controllers/userProfile.controller.js';

import { userCheckAuth } from '../middlewares/auth.middleware.js';

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


// view user profile router with get
userprofileRouter.route('/profile/read/details').get(
    userCheckAuth,
    userProfileview
);


// update  user profile image router with put
userprofileRouter.route('/profile/image/update/:userProfileId').put(
    userCheckAuth,
    uploadObj.single('avatar'),
    userProfileImageupdate
);


// updated profile router with all
userprofileRouter.route('/profile/updates/:userProfileId').all(
    userCheckAuth,
    userProfileupdate
);

// export there user profile router
export { userprofileRouter };