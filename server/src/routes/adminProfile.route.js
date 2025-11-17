// here import all modules and libraies of packages
import { express } from "../connections/socketconnection.js";

import {
  adminNewprofile,
  adminViewprofile,
  adminProfileImageupdate,
  adminProfiledelete,
  adminProfileupdate,
} from "../controllers/adminProfile.controller.js";

import {
  adminNewProfileValidator,
  adminProfileImageValidator,
  adminProfileUpdateValidator,
} from "../validators/validator.js";

import { adminCheckAuth } from "../middlewares/auth.middleware.js";
import { uploadObj } from "../middlewares/fileuploads.middleware.js";
import { validateHandler } from "../middlewares/validator.middleware.js";

// there are define admin profile router
const adminProfileRouter = express.Router();

// there are define all admin profile routes endpoint

// new admin profile create router with post
adminProfileRouter
  .route("/profile/creates")
  .post(
    adminCheckAuth,
    uploadObj.single("avatar"),
    validateHandler(adminNewProfileValidator),
    adminNewprofile
  );

// particular admin view own profile data router with get
adminProfileRouter.route("/profile/read").get(adminCheckAuth, adminViewprofile);

// admin profile image update router with put
adminProfileRouter
  .route("/profile/change/:adminProfileId")
  .put(
    adminCheckAuth,
    uploadObj.single("avatar"),
    validateHandler(adminProfileImageValidator),
    adminProfileImageupdate
  );

// delete admin profile end-point router with delete
adminProfileRouter
  .route("/profile/remove")
  .delete(adminCheckAuth, adminProfiledelete);

// admin profile data update router with all
adminProfileRouter
  .route("/profile/update/:adminProfileId")
  .all(
    adminCheckAuth,
    validateHandler(adminProfileUpdateValidator),
    adminProfileupdate
  );

// export admin profile router
export { adminProfileRouter };
