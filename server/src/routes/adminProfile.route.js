import express from "express";
import { adminNewprofile, adminViewprofile, viewAlladmin } from '../controllers/adminProfile.controller.js';
import { adminCheckAuth } from '../middlewares/auth.middleware.js';

// there are define admin profile router
const adminProfileRouter = express.Router();

// there are define all admin profile routes endpoint


// new admin profile create router with post
adminProfileRouter.post('/creates', adminCheckAuth, adminNewprofile);

// particular admin view own profile data router with get
adminProfileRouter.get('/read/:adminprofile_id', adminCheckAuth, adminViewprofile);

// all admin profile data view router with get
adminProfileRouter.get('/view/all', adminCheckAuth, viewAlladmin);


// export admin profile router
export { adminProfileRouter };
console.log('Admin profile routes is worked successfully');