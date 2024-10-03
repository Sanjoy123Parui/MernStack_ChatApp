import express from "express";
import { addContact, viewContactAll, viewContactdetails, searchContact, updateContact, deleteContact } from '../controllers/contact.controller.js';
import { userCheckAuth } from '../middlewares/auth.middleware.js';

// there are define object of contact router
const contactRouter = express.Router();


// there are define end-point of contact router


// add contact router end-point with post
contactRouter.route('/add')
.post(
    userCheckAuth, 
    addContact
);


// view all contact for signle user router end-point with get
contactRouter.route('/view/all')
.get(
    userCheckAuth, 
    viewContactAll
);


// view contact full details router end-pont with get
contactRouter.route('/view/details/:contact_id')
.get(
    userCheckAuth, 
    viewContactdetails
);


// search user contact router end-point with get
contactRouter.route('/search/user')
.get(
    userCheckAuth, 
    searchContact
);


// update contact router end-point with put
contactRouter.route('/update/user/:contact_id')
.put(
    userCheckAuth, 
    updateContact
);


// delete contact router end-point with delete
contactRouter.route('/remove/user/:contact_id')
.delete(
    userCheckAuth, 
    deleteContact
);


// export contact router
export { contactRouter };
console.log('Contact route is worked successfully');