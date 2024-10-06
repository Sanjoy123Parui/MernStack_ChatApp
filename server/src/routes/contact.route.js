import express from "express";
import { addContact } from '../controllers/contact.controller.js';
import { userCheckAuth } from '../middlewares/auth.middleware.js';

// here define contact router 
const contactRouter = express.Router();


// here define contact router endpoints with method

// add contact router endpoint with post
contactRouter.route('/add').post(
    userCheckAuth,
    addContact
);

// export contact router
export { contactRouter };
console.log('Contact route is worked successfully');