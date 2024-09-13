import { userProfileModel } from '../models/userProfile.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';

// create user Profile all controllers operation perform

// create new user profile
const userNewprofile = TryCatch(async (req, res, next) => {

    //declare data of payload
    let usersignup_id = req.user;
    let { user_name, dob, abouts } = req.body;

    // create new User profile and save

    let userProfiledata = await userProfileModel.findOneAndUpdate({
        usersignup_id
    }, {
        user_name,
        dob,
        abouts
    }, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
    });

    if (!userProfiledata) {
        return next(errorHandler("Wrong cridential", 400));
    }
    else {
        return res.status(200).json({ msg: "Profile was created successfully" });
    }

});



// view profile data
const userProfileview = TryCatch(async (req, res, next) => {

    // declare payload of params
    let userprofile_id = req.params.userprofile_id;

    // there are user profile fetch
    let userProfiledata = await userProfileModel.findById(userprofile_id)
        .populate({ 'path': 'usersignup_id' }).exec();


    // check the condition user data
    if (!userProfiledata) {
        return next(errorHandler("Profile data are not find here"));
    }
    else {
        return res.status(200).json({
            data: {
                'user_name': userProfiledata.user_name,
                'dob': userProfiledata.dob,
                'abouts': userProfiledata.abouts,
                'phone': userProfiledata.usersignup_id.phone
            }
        });
    }

});


// export user profile all controllers
export { userNewprofile, userProfileview };
console.log('User profile controller is worked successfully');