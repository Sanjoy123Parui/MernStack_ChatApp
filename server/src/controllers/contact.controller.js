import { contactModel } from '../models/contact.model.js';
import { userProfileModel } from '../models/userProfile.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';


// there are define all contact controllers operation perform


// add contact controller
const addContact = TryCatch(async (req, res, next) => {

    // there declare payload 
    let usersignup_id = req.user;
    let { contact_phone, contact_name, userprofile_id } = req.body;

    // there declare user profile model
    let userInfo = await userProfileModel.findById(userprofile_id).populate({
        path: 'usersignup_id'
    }).exec();

    if (!userInfo) {
        return next(errorHandler("No more User", 404));
    }
    else {


        // there check condition for phone or name is exist or not
        if (contact_phone === userInfo.usersignup_id.phone || contact_name === userInfo.user_name) {

            // there are data update and insert into the database
            let userContact = await contactModel.findOneAndUpdate({
                contact_phone
            }, {
                contact_name,
                userprofile_id,
                usersignup_id
            }, {
                upsert: true,
                new: true,
                setDefaultsOnInsert: true
            });

            // check condition add contact or not
            if (!userContact) {
                return next(errorHandler("Contact can't added", 404));
            }
            else {
                return res.status(201).send({ msg: "Contact was saved" });
            }
        }

        else {

            return next(errorHandler("Invalid contact", 404));

        }
    }

});



// view all contacts for single user controller
const viewContactAll = TryCatch(async (req, res, next) => {

    // there was declare payload
    let usersignup_id = req.user;

    // here is this user are which contacts into the database
    let userContact = await contactModel.find({
        usersignup_id
    }).select('contact_phone contact_name').populate([
        {
            path: 'usersignup_id',
            select: 'phone'
        },
        {
            path: 'userprofile_id',
            select: 'avatar',
            populate: {
                path: 'usersignup_id',
                select: 'phone'
            }
        }
    ]).exec();


    // there check condition for userContact are exist or not 
    if (!userContact) {
        return next(errorHandler("No more contacts", 404));
    }
    else {

        // there all cotacts exactly data are fetch as lists
        let data = await userContact.map((ele) => {

            if (ele.contact_name && ele.contact_phone) {

                return ({
                    contact_name: ele.contact_name,
                    avatar: ele.userprofile_id.avatar,
                    phone:ele.userprofile_id.usersignup_id.phone,
                    my_phone: ele.usersignup_id.phone
                });
            }
            else {

                return ({
                    contact_phone: ele.contact_phone,
                    avatar: ele.userprofile_id.avatar,
                    phone:ele.userprofile_id.usersignup_id.phone,
                    my_phone: ele.usersignup_id.phone
                });

            }


        });

        return res.status(200).json({ data });

    }


});



// view particular contact full details controller
const viewContactdetails = TryCatch(async (req, res, next) => {

    // declare payload of params
    let { contact_id } = req.params;

    // here retrieve the contact details with existing _id from database
    let userContact = await contactModel.findById(contact_id).populate({
        path: 'userprofile_id',
        populate: {
            path: 'usersignup_id',
        }
    }).exec();

    // here condition is check contact_phone and profile_id.phone is same or not
    if (userContact.contact_phone !== userContact.userprofile_id.usersignup_id.phone) {

        return next(errorHandler("Invalid phone", 400));
    }
    else {

        if (userContact.contact_name === userContact.userprofile_id.user_name && userContact.contact_phone === userContact.userprofile_id.usersignup_id.phone) {

            return res.status(200).json({
                data: {
                    contact_name: userContact.contact_name,
                    avatar: userContact.userprofile_id.avatar,
                    dob: userContact.userprofile_id.dob,
                    abouts: userContact.userprofile_id.abouts,
                    country: userContact.userprofile_id.usersignup_id.country,
                    phone: userContact.userprofile_id.usersignup_id.phone
                }
            });
        }
        else {

            return res.status(200).json({
                data: {
                    contact_phone: userContact.contact_phone,
                    avatar: userContact.userprofile_id.avatar,
                    dob: userContact.userprofile_id.dob,
                    abouts: userContact.userprofile_id.abouts,
                    country: userContact.userprofile_id.usersignup_id.country,
                    phone: userContact.userprofile_id.usersignup_id.phone
                }
            });

        }

    }

});



// search user contact controller
const searchContact = TryCatch(async (req, res, next) => {

    // declare payload 
    let usersignup_id = req.user;
    let { contact_phone, contact_name } = req.body

    // here is retrive the data from database
    let userContact = await contactModel.find({
        usersignup_id
    }).populate([
        {
            path:'usersignup_id'
        },
        {
            path:'userprofile_id',
            populate:{
                path:'usersignup_id'
            }
        }
    ]).exec();

    if (!userContact) {
        return next(errorHandler("No more contact", 404));
    }
    else {

        // here is use map method for exist data retrieve from database
        let contactInfo = await userContact.map((contact) => {

            // here condition is comparison phone and name
            if (contact_phone === contact.contact_phone || contact_name === contact.contact_name) {

                if(contact.contact_name&&contact.contact_phone){

                    return res.status(200).json({data:{
                        contact_name:contact.contact_name,
                        avatar:contact.userprofile_id.avatar,
                        phone:contact.userprofile_id.usersignup_id.phone,
                        my_phone:contact.usersignup_id.phone
                    }});

                }
                else{

                    return res.status(200).json({data:{
                        contact_phone:contact.contact_phone,
                        avatar:contact.userprofile_id.avatar,
                        phone:contact.userprofile_id.usersignup_id.phone,
                        my_phone:contact.usersignup_id.phone
                    }});

                }

            }
            else {
                return next(errorHandler("Wrong cridential",400));
            }

        });

        return contactInfo;

    }

});



// there export contact all controllers
export { addContact, viewContactAll, viewContactdetails, searchContact };
console.log('Contact controller is worked successfully');