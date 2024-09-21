import express from "express";
import { adminNewprofile, adminViewprofile, viewAlladmin, adminProfileImageupdate, adminProfiledelete, adminProfileupdate } from '../controllers/adminProfile.controller.js';
import { adminCheckAuth } from '../middlewares/auth.middleware.js';
import { uploadObj } from '../middlewares/fileuploads.middleware.js';

// there are define admin profile router
const adminProfileRouter = express.Router();

// there are define all admin profile routes endpoint


// new admin profile create router with post
adminProfileRouter.route('/profile/creates').post(adminCheckAuth, uploadObj.single('avatar'), adminNewprofile);

// particular admin view own profile data router with get
adminProfileRouter.route('/profile/read/:adminprofile_id').get(adminCheckAuth, adminViewprofile);

// all admin profile data view router with get
adminProfileRouter.route('/profile/view/all').get(adminCheckAuth, viewAlladmin);

// admin profile image update router with put
adminProfileRouter.route('/profile/change/:adminprofile_id').put(adminCheckAuth, uploadObj.single('avatar'), adminProfileImageupdate);

// admin profile delete router with delete
adminProfileRouter.route('/profile/remove/:adminprofile_id').delete(adminCheckAuth, adminProfiledelete);

// admin profile data update router with all
adminProfileRouter.route('/profile/update/:adminprofile_id').all(adminCheckAuth, adminProfileupdate);




// export admin profile router
export { adminProfileRouter };
console.log('Admin profile routes is worked successfully');