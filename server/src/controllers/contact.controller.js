import { contactModel } from '../models/contact.model.js';
import { userProfileModel } from '../models/userProfile.model.js';
import { userSignupModel } from '../models/userSignup.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';


// define functionality of all contact controller operations perform

// add contact controller
const addContact = TryCatch(async (req, res, next) => {

    // here can be declare payload
    let userSignup = req.user;
    let { contact_phone, contact_name } = req.body;

    if (!userSignup) {

        return next(errorHandler("Please login to access user", 400));

    }
    else {

        // here declare condition for check contatc phone or contact name
        if (!(contact_name && contact_phone)) {

            return next(errorHandler("Please required contact phone or name", 400));

        }
        else {

            // there will be data retieve and check contact_phone or contactProfile_id are already exist into the database
            let existContact = await contactModel.findOne({
                contact_phone
            }).exec();

            // check condition for user contact phone and contactprofile_id are already exist
            if (existContact) {

                return next(errorHandler("Cotact is already exist", 400));

            }
            else {

                // here will be retrieve user profile _id and check exist user find or not
                let existUser = await userProfileModel.findOne({
                    userSignup: userSignup
                }).populate({
                    path: 'userSignup'
                }).exec();

                // here will be retrieve contact profile _id with phone are exist or not
                let contactUser = await userSignupModel.findOne({ phone: contact_phone }).exec();

                let existContact = await userProfileModel.findOne({
                    userSignup: contactUser._id
                }).populate({
                    path: 'userSignup'
                }).exec();

                // check condition for phone are matched or not
                if (existContact.userSignup.phone !== contact_phone) {
                    return next(errorHandler("Please required the valid phone number", 400));
                }
                else {

                    // declare all profile id
                    let myProfile = existUser._id;
                    let contactProfile = existContact._id;

                    // here was data insert into the database
                    let userContact = await contactModel.create({
                        myProfile,
                        contactProfile,
                        contact_phone,
                        contact_name
                    });

                    // here check data has been save into the database
                    if (!userContact) {
                        return next(errorHandler("Contact can't added", 404));
                    }
                    else {
                        return res.status(201).send({ msg: "Contact was saved" });
                    }


                }

            }

        }
    }

});




// view all contact controller
const viewAllContact = TryCatch(async (req, res, next) => {

    // there are declare payload
    let userSignup = req.user;

    if (!userSignup) {
        return next(errorHandler("Please login to access user", 400));
    }
    else {

        // here was retrieve from auth profile id
        let existUserprofile = await userProfileModel.findOne({
            userSignup: userSignup
        }).exec();


        // here can check this user profile id is exist or not
        if (!existUserprofile) {

            return next(errorHandler("No more data", 404));

        }
        else {


            // here was declare myprofile_id
            let myProfile = existUserprofile._id;

            // here whose all contact data can be retrieve from database where this _id are exist
            let userContact = await contactModel.find({ myProfile }).populate([
                {
                    path: 'contactProfile',
                    populate: {
                        path: 'userSignup'
                    }
                },
                {
                    path: 'myProfile',
                    populate: {
                        path: 'userSignup'
                    }
                }
            ]).exec();


            // here check condition user contact are find or not
            if (!userContact) {
                return next(errorHandler("No more contact", 404));
            }
            else {

                // here was userContact all details are iterate with map then return a new array
                let data = await userContact.map((contact) => {

                    return ({
                        contact_phone: contact.contact_phone,
                        contact_name: contact.contact_name,
                        contact_profileimg: contact.contactProfile.user_profileimg
                    });

                });


                return res.status(200).json({ data });

            }
        }

    }

});




// serach user contact controller
const searchContact = TryCatch(async (req, res, next) => {

    // declare payload data
    let userSignup = req.user;
    let { myProfile } = req.params
    let { contact_phone, contact_name } = req.body;

    // check user can logged in
    if (!userSignup) {
        return next(errorHandler("Please login to access user", 400));
    }
    else {

        // there check condition for contact_phone either contact_name was payload
        if (!(contact_phone || contact_name)) {

            return next(errorHandler("Please required correct contact phone or name ", 400));

        }
        else {

            // here are declare query for fetch the particular contact search data from database
            let userContact = await contactModel.findOne({ myProfile }).populate({

                path: 'contactProfile',
                populate: {
                    path: 'userSignup'
                }

            }).exec();


            // here check condition user search from phone or name
            if (contact_phone === userContact.contact_phone || contact_name === userContact.contact_name) {

                return res.status(200).json({
                    contact_phone: userContact.contact_phone,
                    contact_name: userContact.contact_name,
                    contact_profileimg: userContact.contactProfile.user_profileimg
                });

            }
            else {

                return next(errorHandler("Contact are not found", 404));

            }

        }

    }

});




// view contact profile controller
const viewContactProfile = TryCatch(async (req, res, next) => {

    // there declare payload
    let userSignup = req.user;
    let { contactId } = req.params;

    if (!userSignup) {

        return next(errorHandler("Please login to access user", 400));

    }
    else {


        // here are declare query for fetch the particular contact full details data from database
        let userContact = await contactModel.findById(contactId).populate({
            path: 'contactProfile',
            populate: {
                path: 'userSignup'
            }
        }).exec();


        // check condition userContact full details are found or not
        if (!userContact) {

            return next(errorHandler("No more contacts found", 404))

        }
        else {

            return res.status(200).json({
                data: {
                    contact_phone: userContact.contact_phone,
                    contact_name: userContact.contact_name,
                    contact_profileimg: userContact.contactProfile.user_profileimg,
                    contact_gender: userContact.contactProfile.gender,
                    contact_dob: userContact.contactProfile.dob,
                    contact_abouts: userContact.contactProfile.abouts,
                    country: userContact.contactProfile.userSignup.country,
                    phone: userContact.contactProfile.userSignup.phone
                }
            });

        }

    }

});




// update contact controller
const editContact = TryCatch(async (req, res, next) => {

    // there declare payload
    let userSignup = req.user;
    let { contactId } = req.params;
    let { contact_phone, contact_name } = req.body;


    if (!userSignup) {

        return next(errorHandler("Please login to access user", 400));

    }
    else {

        // here was update user contact from database
        let userContact = await contactModel.updateOne({
            _id: contactId,
            contact_phone
        }, {
            $set: {
                contact_name
            }
        });


        // check condition user can updated data or not updated
        if (!userContact.matchedCount && !userContact.modifiedCount) {

            return next(errorHandler("Contacts are not updated", 404));

        }
        else {

            return res.status(200).json({ msg: "Contact was updated successfully" });

        }

    }

});




// delete contact controller
const removeContact = TryCatch(async (req, res, next) => {

    // there declare payload
    let userSignup = req.user;
    let { contactId } = req.params;

    if (!userSignup) {

        return next(errorHandler("Please login to access user", 400));

    }
    else {

        // there was declare query in which contact delete from database
        let userContact = await contactModel.deleteOne({
            _id: contactId
        });

        // check condition data was delete or not 
        if (!userContact.deletedCount) {
            return next(errorHandler("Contacts are not found", 404));
        }
        else {

            return res.status(200).json({ msg: "Contact was deleted successfully!" });

        }

    }

});


// export here all contact controllers
export {
    addContact,
    viewAllContact,
    searchContact,
    viewContactProfile,
    editContact,
    removeContact
};