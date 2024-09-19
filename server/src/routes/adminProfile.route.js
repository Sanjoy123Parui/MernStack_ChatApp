import express from "express";
import { adminNewprofile, adminViewprofile, viewAlladmin } from '../controllers/adminProfile.controller.js';
import { adminCheckAuth } from '../middlewares/auth.middleware.js';
import { uploadObj } from '../middlewares/fileuploads.middleware.js';

// there are define admin profile router
const adminProfileRouter = express.Router();

// there are define all admin profile routes endpoint


// new admin profile create router with post
adminProfileRouter.route('/creates').post(adminCheckAuth, uploadObj.single('avatar'), adminNewprofile);

// particular admin view own profile data router with get
adminProfileRouter.route('/read/:adminprofile_id').get(adminCheckAuth, adminViewprofile);

// all admin profile data view router with get
adminProfileRouter.route('/view/all').get(adminCheckAuth, viewAlladmin);


// export admin profile router
export { adminProfileRouter };
console.log('Admin profile routes is worked successfully');