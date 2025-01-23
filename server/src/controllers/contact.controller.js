import { contactModel } from '../models/contact.model.js';
import { userProfileModel } from '../models/userProfile.model.js';
import { userSignupModel } from '../models/userSignup.model.js';
import { asyncHandler } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';
import { cache } from '../connections/socketconnection.js';


// define functionality of all contact controller operations perform

// add contact controller
const addContact = asyncHandler(async (req, res, next) => {

    // declare userSignupId variables
    let userSignup;

    // here check condition from cache data is userSignupId
    if (cache.has("userSignup")) {
        userSignup = JSON.parse(cache.get("userSignup"));
    }
    else {
        userSignup = req.user;
        cache.set("userSignup", JSON.stringify(userSignup), 300);
    }

    // here can be declare payload
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

                    // here declare cache variables
                    let contactId;

                    // delete cache key
                    const cacheKey = ["userProfiledata", "existUserprofile", "userContact", `userContact:${contactId}`];
                    cache.del(cacheKey);

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
const viewAllContact = asyncHandler(async (req, res, next) => {

    // declare userSignupId variables
    let userSignup;

    // here can check the condition of userSignupId in nodecache
    if (cache.has("userSignup")) {
        userSignup = JSON.parse(cache.get("userSignup"));
    }
    else {
        userSignup = req.user;
        cache.set("userSignup", JSON.stringify(userSignup), 300);
    }

    // check condition for  user can login or not
    if (!userSignup) {
        return next(errorHandler("Please login to access user", 400));
    }
    else {

        // here declare variavles of store data
        let existUserprofile, userContact;

        // here can check cache data
        if (cache.has("existUserprofile")) {
            existUserprofile = JSON.parse(cache.get("existUserprofile"));
        }
        else {

            // here was retrieve from auth profile id
            existUserprofile = await userProfileModel.findOne({
                userSignup: userSignup
            }).exec();

            cache.set("existUserprofile", JSON.stringify(existUserprofile), 300);
        }


        // here can check this user profile id is exist or not
        if (!existUserprofile) {

            return next(errorHandler("No more data", 404));

        }
        else {


            // here was declare myprofile_id
            let myProfile = existUserprofile._id;

            // here can check data
            if (cache.has("userContact")) {

                userContact = JSON.parse(cache.get("userContact"));

            }
            else {

                // here whose all contact data can be retrieve from database where this _id are exist
                userContact = await contactModel.find({ myProfile }).populate([
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

                cache.set("userContact", JSON.stringify(userContact), 300);

            }


            // here check condition user contact are find or not
            if (!userContact) {
                return next(errorHandler("No more contact", 404));
            }
            else {

                // here was userContact all details are iterate with map then return a new array
                let data = await userContact.map((contact) => {

                    return ({
                        contactId: contact._id,
                        contact_phone: contact.contact_phone,
                        contact_name: contact.contact_name,
                        contact_profileimg: contact.contactProfile.profile_img
                    });

                });


                return res.status(200).json({ data });

            }
        }

    }

});




// serach user contact controller
const searchContact = asyncHandler(async (req, res, next) => {

    // declare userSignupId variables
    let userSignup;

    // here can check the condition of userSignupId in nodecache
    if (cache.has("userSignup")) {
        userSignup = JSON.parse(cache.get("userSignup"));
    }
    else {
        userSignup = req.user;
        cache.set("userSignup", JSON.stringify(userSignup), 300);
    }

    // declare payload data of params and body
    let { myProfile } = req.params;
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
            let userSearchContact = await contactModel.find({
                myProfile,
                $or: [
                    { contact_phone },
                    { contact_name }
                ]
            }).populate([
                { path: 'myProfile', populate: { path: 'userSignup' } },
                { path: 'contactProfile', populate: { path: 'userSignup' } }
            ]).exec();

            // here declare cache variables
            let contactId;

            // delete cache key
            const cacheKey = ["userProfiledata", "existUserprofile", "userContact", `userContact:${contactId}`];
            cache.del(cacheKey);


            // here was map userSearchContact for retrieve exist data
            let data = await userSearchContact.map((user) => ({
                contactId: user._id,
                profile_img: user.contactProfile.profile_img,
                contact_phone: user.contact_phone,
                contact_name: user.contact_name
            }))

            return res.status(200).json({ data });
        }

    }

});




// view contact profile controller
const viewContactProfile = asyncHandler(async (req, res, next) => {

    // there declare userSignupId variables
    let userSignup;

    // here can check the condition of userSignupId in nodecache
    if (cache.has("userSignup")) {
        userSignup = JSON.parse(cache.get("userSignup"));
    }
    else {
        userSignup = req.user;
        cache.set("userSignup", JSON.stringify(userSignup), 300);
    }


    // there declare payload of params
    let { contactId } = req.params;

    if (!userSignup) {

        return next(errorHandler("Please login to access user", 400));

    }
    else {

        // here declare userContact full details view variables
        let userContact;

        // here can check the condition of userContact full details view in nodecache
        if (cache.has(`userContact:${contactId}`)) {

            userContact = JSON.parse(cache.get(`userContact:${contactId}`));

        }
        else {

            // here are declare query for fetch the particular contact full details data from database
            userContact = await contactModel.findById(contactId).populate({
                path: 'contactProfile',
                populate: {
                    path: 'userSignup'
                }
            }).exec();

            cache.set(`userContact:${contactId}`, JSON.stringify(userContact), 300);

        }

        // check condition userContact full details are found or not
        if (!userContact) {

            return next(errorHandler("No more contacts found", 404))

        }
        else {

            return res.status(200).json({
                data: {
                    contactId: userContact._id,
                    contact_phone: userContact.contact_phone,
                    contact_name: userContact.contact_name,
                    contact_profileimg: userContact.contactProfile.profile_img,
                    contact_gender: userContact.contactProfile.gender,
                    contact_dob: userContact.contactProfile.dob,
                    contact_abouts: userContact.contactProfile.abouts,
                    phone: userContact.contactProfile.userSignup.phone
                }
            });

        }

    }

});




// update contact controller
const editContact = asyncHandler(async (req, res, next) => {

    // there declare userSignupId variables
    let userSignup;

    // here can check the condition of userSignupId in nodecache
    if (cache.has("userSignup")) {
        userSignup = JSON.parse(cache.get("userSignup"));
    }
    else {
        userSignup = req.user;
        cache.set("userSignup", JSON.stringify(userSignup), 300);
    }

    // there declare payload
    let { contactId } = req.params;
    let { contact_phone, contact_name } = req.body;


    if (!userSignup) {

        return next(errorHandler("Please login to access user", 400));

    }
    else {

        // here was update user contact from database
        let userContact = await contactModel.updateOne({
            _id: contactId
        }, {
            $set: {
                contact_phone,
                contact_name
            }
        });

        // delete cache key
        const cacheKey = ["userProfiledata", "existUserprofile", "userContact", `userContact:${contactId}`];
        cache.del(cacheKey);

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
const removeContact = asyncHandler(async (req, res, next) => {

    // there declare userSignupId variables
    let userSignup;

    // here can check the condition of userSignupId in nodecache
    if (cache.has("userSignup")) {
        userSignup = JSON.parse(cache.get("userSignup"));
    }
    else {
        userSignup = req.user;
        cache.set("userSignup", JSON.stringify(userSignup), 300);
    }

    // there declare payload
    let { contactId } = req.params;

    if (!userSignup) {

        return next(errorHandler("Please login to access user", 400));

    }
    else {

        // there was declare query in which contact delete from database
        let userContact = await contactModel.deleteOne({
            _id: contactId
        });

        // delete cache key
        const cacheKey = ["userProfiledata", "existUserprofile", "userContact", `userContact:${contactId}`];
        cache.del(cacheKey);

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