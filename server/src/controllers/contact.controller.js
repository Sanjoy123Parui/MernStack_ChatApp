import { contactModel } from '../models/contact.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';

// there define to perform all opertion of contact controller


// add contact controller
const addContact = TryCatch(async (req, res, next) => {

    // there are declare payload
    let { contact_phone, contact_name, userprofile_id } = req.body;

    // data can be insertUpdate and store into the database
    let userContact = await contactModel.findOneAndUpdate({
        contact_phone
    }, {
        contact_name,
        userprofile_id
    }, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
    });

    // condition was check the data can be store to the database
    if (!userContact) {
        return next(errorHandler("No more contact", 404));
    }
    else {
        return res.status(201).send({ msg: "Contact was saved" });

    }

});


// fetch particular data for contact controller
const viewContact = TryCatch(async (req, res, next) => {

    // there declare payload
    let { contact_id } = req.params;


    //data will be retrieve from database
    let userContact = await contactModel.findById(contact_id).populate({
        path: 'userprofile_id',
        populate: {
            path: 'usersignup_id'
        }
    });

    // check condtion data are find or not
    if (!userContact) {
        return next(errorHandler("No more data", 404));
    }
    else {

        // there check condition for to contact contact_phone or contact_name
        if (userContact.contact_phone === userContact.userprofile_id.usersignup_id.phone && userContact.contact_name !== userContact.userprofile_id.user_name) {

            return res.status(200).json({
                data: {
                    'contact_phone': userContact.contact_phone,
                    'avatar': userContact.userprofile_id.avatar,
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
                    'avatar': userContact.userprofile_id.avatar,
                    'dob': userContact.userprofile_id.dob,
                    'abouts': userContact.userprofile_id.abouts,
                    'country': userContact.userprofile_id.usersignup_id.country,
                    'phone': userContact.userprofile_id.usersignup_id.phone
                }
            });

        }

    }

});

// export there contact all perform operation controller
export { addContact, viewContact };
console.log('Contact controller is worked successfully');
