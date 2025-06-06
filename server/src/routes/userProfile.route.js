// here import all modules and libraies of packages
import { express } from "../connections/socketconnection.js";

import {
  userNewProfile,
  userProfileview,
  userProfileImageupdate,
  userProfiledelete,
  userProfileupdate,
} from "../controllers/userProfile.controller.js";

import {
  userNewProfileValidators,
  userProfileImageValidator,
  userProfileUpdateValidator,
} from "../validators/validator.js";

import { userCheckAuth } from "../middlewares/auth.middleware.js";
import { validateHandler } from "../middlewares/validator.middleware.js";
import { uploadObj } from "../middlewares/fileuploads.middleware.js";

// there are define userProfile router
const userprofileRouter = express.Router();

// there are define all routes of end points in user profile

// create new user profile router end-point with post
userprofileRouter
  .route("/profile/creates")
  .post(
    userCheckAuth,
    uploadObj.single("avatar"),
    validateHandler(userNewProfileValidators),
    userNewProfile
  );

// view user profile router end-point with get
userprofileRouter
  .route("/profile/read/details")
  .get(userCheckAuth, userProfileview);

// update  user profile image end-point router with put
userprofileRouter
  .route("/profile/image/update/:userProfileId")
  .put(
    userCheckAuth,
    uploadObj.single("avatar"),
    validateHandler(userProfileImageValidator),
    userProfileImageupdate
  );

// delete user profile end-point router with delete
userprofileRouter
  .route("/profile/remove")
  .delete(userCheckAuth, userProfiledelete);

// updated profile end-point router with all
userprofileRouter
  .route("/profile/updates/:userProfileId")
  .all(
    userCheckAuth,
    validateHandler(userProfileUpdateValidator),
    userProfileupdate
  );

// export there user profile router
export { userprofileRouter };
