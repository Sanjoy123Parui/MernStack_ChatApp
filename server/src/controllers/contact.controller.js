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

    // there check condition find data of userProfile model
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
                return res.status(201).send({ msg: "Contact was saved"});
            }
        }
        else {

            return next(errorHandler("Invalid contact", 404));

        }
    }

});


// there export contact all controllers
export { addContact };
console.log('Contact controller is worked successfully');