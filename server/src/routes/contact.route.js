import express from "express";
import { addContact } from '../controllers/contact.controller.js';
import { userCheckAuth } from '../middlewares/auth.middleware.js';

// there are define object of contact router
const contactRouter = express.Router();


// there are define end-point of contact router


// add contact router end-point with post
contactRouter.route('/add').post(userCheckAuth, addContact);



// export contact router
export { contactRouter };
console.log('Contact route is worked successfully');