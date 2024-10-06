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




// export here all contact controllers
export { addContact };
console.log('Contact controller is worked successfully');