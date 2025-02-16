// here import all modules and libraies of packages
import { express } from "../connections/socketconnection.js";

import {
  userAllProfile,
  userProfiledetails,
  userProfileSearch,
  userContactLists,
  particularContact,
} from "../controllers/adminDashboard.controller.js";
import { adminCheckAuth } from "../middlewares/auth.middleware.js";

// here define admin-dashboard router
const adminDashboardRouter = express.Router();

// here was all admin dashcoard route

// userProfile

// user profile fetch end-point of router with get
adminDashboardRouter
  .route("/user/profile/all")
  .get(adminCheckAuth, userAllProfile);

// user profile fetch details end-point of router with get
adminDashboardRouter
  .route("/user/profile/details/:userId")
  .get(adminCheckAuth, userProfiledetails);

// user profile search end-point of router with post
adminDashboardRouter
  .route("/user/profile/search")
  .post(adminCheckAuth, userProfileSearch);

// contact

// user contactList end-point of router with get
adminDashboardRouter
  .route("/contact/view/all")
  .get(adminCheckAuth, userContactLists);

// user contact particular _id of router with get
adminDashboardRouter
  .route("/contact/user/view/:userId")
  .get(adminCheckAuth, particularContact);

// here export admin dashboard
export { adminDashboardRouter };
