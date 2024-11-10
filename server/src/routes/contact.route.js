import express from "express";

import { 
    addContact, 
    viewAllContact, 
    searchContact, 
    viewContactProfile, 
    editContact, 
    removeContact 
} from '../controllers/contact.controller.js';

import { userCheckAuth } from '../middlewares/auth.middleware.js';

import {
    addContactValidator,
    updateContactValidator,
    validateHandler
} from '../validators/validator.js';

// here define contact router 
const contactRouter = express.Router();


// here define contact router end-points with method

// add contact router end-point with post
contactRouter.route('/add').post(
    userCheckAuth,
    addContactValidator(),
    validateHandler,
    addContact
);



// view all contact router end-point with get
contactRouter.route('/view/all').get(
    userCheckAuth,
    viewAllContact
);



// search contact router end-point with get
contactRouter.route('/search/user/:myprofile_id').get(
    userCheckAuth,
    searchContact
);




// view contact profile router end-point with get
contactRouter.route('/view/details/:contact_id').get(
    userCheckAuth,
    viewContactProfile
);




// update contact router end-point with put
contactRouter.route('/update/user/:contact_id').put(
    userCheckAuth,
    updateContactValidator(),
    validateHandler,
    editContact
);




// delete contact router end-point with delete
contactRouter.route('/remove/user/:contact_id').delete(
    userCheckAuth,
    removeContact
);



// export contact router
export { contactRouter };