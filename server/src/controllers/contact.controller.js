import { contactModel } from '../models/contact.model.js';
import { userProfileModel } from '../models/userProfile.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';


// define functionality of all contact controller operations perform

// add contact controller
const addContact = TryCatch(async (req, res, next) => {

    // here can be declare payload
    let usersignup_id = req.user;
    let { contact_name, contact_phone, userprofile_id } = req.body;

    if (!usersignup_id) {

        return next(errorHandler("Please login to access user", 400));

    }
    else {

        // here declare condition for check contatc phone or contact name
        if (!(contact_name || contact_phone)) {

            return next(errorHandler("Please required contact phone or name", 400));

        }
        else {

            // there will be data retieve and check contact_phone or userprofile_id are already exist into the database
            let existContact = await contactModel.findOne({
                $or: [
                    { contact_phone },
                    { userprofile_id }
                ]
            }).exec();

            // check condition for user contact phone and userprofile are already exist
            if (existContact) {

                return next(errorHandler("Cotact is already exist", 400));

            }
            else {

                // there will be retrieve user profile data and check exist user find or not
                let existUser = await userProfileModel.findById(userprofile_id).populate({
                    path: 'usersignup_id'
                }).exec();


                // check condition for phone are matched or not
                if (existUser.usersignup_id.phone !== contact_phone) {

                    return next(errorHandler("Please required the valid phone number", 400));

                }
                else {


                    // there was data insert into the database
                    let userContact = await contactModel.create({
                        contact_name,
                        contact_phone,
                        userprofile_id,
                        usersignup_id
                    });


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
    let usersignup_id = req.user;

    if (!usersignup_id) {
        return next(errorHandler("Please login to access user", 400));
    }
    else {

        // here whose all contact data can be retrieve from database where this _id are exist
        let userContact = await contactModel.find({ usersignup_id }).populate([
            {
                path: 'userprofile_id',
                populate: {
                    path: 'usersignup_id'
                }
            },
            {
                path: 'usersignup_id'
            }
        ]).exec();


        // here check condition user contact are find or not
        if (!userContact) {
            return next(errorHandler("No more contact", 404));
        }
        else {

            // here was userContact all details are iterate with map then return a new array
            let data = await userContact.map((contact) => {


                // check condition phone and name then data are perfectly fetch
                if (contact.contact_phone && !contact.contact_name) {

                    return ({
                        'contact_phone': contact.contact_phone,
                        'user_profileimg': contact.userprofile_id.user_profileimg,
                        'user_phone': contact.userprofile_id.usersignup_id.phone,
                        'myphone': contact.usersignup_id.phone
                    });

                }
                else {

                    return ({
                        'contact_name': contact.contact_name,
                        'user_profileimg': contact.userprofile_id.user_profileimg,
                        'user_phone': contact.userprofile_id.usersignup_id.phone,
                        'myphone': contact.usersignup_id.phone
                    });

                }

            });

            return res.status(200).json({ data });

        }

    }

});




// serach user contact controller
const searchContact = TryCatch(async (req, res, next) => {

    // declare payload data
    let usersignup_id = req.user;
    let { contact_phone, contact_name } = req.body;

    // check user can logged in
    if (!usersignup_id) {
        return next(errorHandler("Please login to access user", 400));
    }
    else {

        // there check condition for contact_phone either contact_name was payload
        if (!(contact_phone || contact_name)) {

            return next(errorHandler("Please required correct contact phone or name ", 400));

        }
        else {

            // here are declare query for fetch the particular contact search data from database
            let userContact = await contactModel.findOne({ usersignup_id }).populate({

                path: 'userprofile_id',
                populate: {
                    path: 'usersignup_id'
                }

            }).exec();

            if (contact_phone === userContact.contact_phone || contact_name === userContact.contact_name) {

                if (userContact.contact_phone && !userContact.contact_name) {

                    return res.status(200).json({
                        data: {
                            'contact_phone': userContact.contact_phone,
                            'user_profileimg': userContact.userprofile_id.user_profileimg,
                            'phone': userContact.userprofile_id.usersignup_id.phone
                        }
                    });

                }
                else {

                    return res.status(200).json({
                        data: {
                            'contact_name': userContact.contact_name,
                            'user_profileimg': userContact.userprofile_id.user_profileimg,
                            'phone': userContact.userprofile_id.usersignup_id.phone
                        }
                    });

                }



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
    let usersignup_id = req.user;
    let { contact_id } = req.params;

    if (!usersignup_id) {

        return next(errorHandler("Please login to access user", 400));

    }
    else {


        // here are declare query for fetch the particular contact full details data from database
        let userContact = await contactModel.findById(contact_id).populate({
            path: 'userprofile_id',
            populate: {
                path: 'usersignup_id'
            }
        }).exec();


        // check condition userContact full details are found or not
        if (!userContact) {

            return next(errorHandler("No more contacts found", 404))

        }
        else {




            // there will be check condition for contact are name or phone
            if (userContact.contact_phone && !userContact.contact_name) {

                return res.status(200).json({
                    data: {
                        'contact_phone': userContact.contact_phone,
                        'user_profileimg': userContact.userprofile_id.user_profileimg,
                        'gender': userContact.userprofile_id.gender,
                        'dob': userContact.userprofile_id.dob,
                        'abouts': userContact.userprofile_id.abouts,
                        'country': userContact.userprofile_id.usersignup_id.country,
                        'phone': userContact.userprofile_id.usersignup_id.phone

                    }
                });

            }
            else {

                return res.status(200).json({
                    data: {
                        'contact_name': userContact.contact_name,
                        'user_profileimg': userContact.userprofile_id.user_profileimg,
                        'gender': userContact.userprofile_id.gender,
                        'dob': userContact.userprofile_id.dob,
                        'abouts': userContact.userprofile_id.abouts,
                        'country': userContact.userprofile_id.usersignup_id.country,
                        'phone': userContact.userprofile_id.usersignup_id.phone
                    }
                });

            }

        }

    }

});




// update contact controller
const editContact = TryCatch(async (req, res, next) => {

    // there declare payload
    let usersignup_id = req.user;
    let { contact_id } = req.params;
    let { contact_phone, contact_name } = req.body;


    if (!usersignup_id) {

        return next(errorHandler("Please login to access user", 400));

    }
    else {

        // here was update user contact from database
        let userContact = await contactModel.updateOne({
            _id: contact_id,
            usersignup_id,
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
    let usersignup_id = req.user;
    let { contact_id } = req.params;

    if (!usersignup_id) {

        return next(errorHandler("Please login to access user", 400));

    }
    else {

        // there was declare query in which contact delete from database
        let userContact = await contactModel.deleteOne({
            _id: contact_id
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
export { addContact, viewAllContact, searchContact, viewContactProfile, editContact, removeContact };
console.log('Contact controller is worked successfully');