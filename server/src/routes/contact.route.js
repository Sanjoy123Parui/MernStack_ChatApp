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

// here define contact router 
const contactRouter = express.Router();


// here define contact router end-points with method



// add contact router end-point with post
contactRouter.route('/add').post(
    userCheckAuth,
    addContact
);



// view all contact router end-point with get
contactRouter.route('/view/all').get(
    userCheckAuth,
    viewAllContact
);



// search contact router end-point with get
contactRouter.route('/search/user').get(
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
    editContact
);




// delete contact router end-point with delete
contactRouter.route('/remove/user/:contact_id').delete(
    userCheckAuth,
    removeContact
);



// export contact router
export { contactRouter };
console.log('Contact route is worked successfully');