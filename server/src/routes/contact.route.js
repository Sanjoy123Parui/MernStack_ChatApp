import express from "express";
import { addContact, viewContact } from '../controllers/contact.controller.js';
import { userCheckAuth } from '../middlewares/auth.middleware.js';

// there define contactRouter object
const contactRouter = express.Router();

// there define all endpoint of contact routes operation perform



// add contact route endpoint with post
contactRouter.route('/add').post(userCheckAuth, addContact);


// view contact for particular_id route endpoint with get
contactRouter.route('/view/:contact_id').get(userCheckAuth, viewContact);



// export the contact router
export { contactRouter };
console.log('Contact route is worked successfully');
