import express from "express";
import {
    userAccount,
    userAccountSearch,

    userAllProfile,
    userProfiledetails,
    userProfileSearch,

} from '../controllers/adminDashboard.controller.js';
import { adminCheckAuth } from '../middlewares/auth.middleware.js';

// here define admin-dashboard router
const adminDashboardRouter = express.Router();

// here was all admin dashcoard route


// userSignup

// user account fetch end-point of router with get
adminDashboardRouter.route('/user/signup/account').get(
    adminCheckAuth,
    userAccount
);

// user account search end-point of router with get
adminDashboardRouter.route('/user/signup/search').get(
    adminCheckAuth,
    userAccountSearch
);



// userProfile

// user profile fetch end-point of router with get
adminDashboardRouter.route('/user/profile/all').get(
    adminCheckAuth,
    userAllProfile
);


// user profile fetch details end-point of router with get
adminDashboardRouter.route('/user/profile/details').get(
    adminCheckAuth,
    userProfiledetails
);


// user profile search end-point of router with get
adminDashboardRouter.route('/user/profile/search').get(
    adminCheckAuth,
    userProfileSearch
);



// here export admin dashboard
export { adminDashboardRouter };