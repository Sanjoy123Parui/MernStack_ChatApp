import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';
import { userSignupModel } from '../models/userSignup.model.js';
import { userProfileModel } from '../models/userProfile.model.js';
import { contactModel } from '../models/contact.model.js';

// here was define all admin-dashboard data controller functions

// userSignup data

// here was how many userAccount created check controller functionality
const userAccount = TryCatch(async (req, res, next) => {

    // here was declare payload
    let adminSignup = req.admin;

    // check condition admin signup
    if (!adminSignup) {
        return next(errorHandler("Please login to access admin", 400));
    }
    else {

        // here was specified pagination
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 6;
        let skip = (page - 1) * limit;

        // here was fetch the userSignup data from database
        let userSignupdata = await userSignupModel.find({})
            .skip(skip).limit(limit).exec();

        // here was map data
        let data = userSignupdata.map((user) => {

            return ({
                phone: user.phone,
                country: user.country
            });

        });


        // here was declare totalPages
        let total = await userSignupModel.countDocuments();
        let totalPages = Math.ceil(total / limit);


        return res.status(200).json({
            'data': data,
            'currentPage': page,
            'totalPages': totalPages
        });

    }

});


// here search how many user account controller functionality
const userAccountSearch = TryCatch(async (req, res, next) => {

    // here declare payload
    let adminSignup = req.admin;
    let { country } = req.body

    // check admin
    if (!adminSignup) {

        return next(errorHandler("Please login to access admin", 400));

    }
    else {

        // check condition for country are matched
        if (!country) {

            return next(errorHandler("No more country has been found", 404));

        }
        else {

            // here was fetch the search data in userSignup model from database
            let searchData = await userSignupModel.find({ country }).exec();

            // here was map data
            let data = searchData.map((user) => {

                return ({
                    phone: user.phone,
                    country: user.country
                });

            });

            return res.status(200).json({ data });

        }

    }

});




// userProfile data

// here was retrieve all the profile data controller functionality
const userAllProfile = TryCatch(async (req, res, next) => {

    // here was declare payload
    let adminSignup = req.admin;

    // check admin
    if (!adminSignup) {

        return next(errorHandler("Please login to access admin", 400));

    }
    else {

        // here was specified pagination
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 6;
        let skip = (page - 1) * limit;


        // here was fetch userProfile model data from database
        let profileData = await userProfileModel.find({}).populate({
            path: 'userSignup'
        }).skip(skip).limit(limit).exec();


        // here was map data
        let data = profileData.map((profile) => {

            return ({
                user_profileimg: profile.user_profileimg,
                user_name: profile.user_name,
                phone: profile.userSignup.phone,
                country: profile.userSignup.country
            });

        });

        // here was declare totalPages
        let total = await userSignupModel.countDocuments();
        let totalPages = Math.ceil(total / limit);

        return res.status(200).json({
            'data': data,
            'currentPage': page,
            'totalPages': totalPages
        });

    }

});


// here was retrieve the profile details controller functionality
const userProfiledetails = TryCatch(async (req, res, next) => {

    // here was declare payload
    let adminSignup = req.admin;

    let { phone } = req.body;

    // check admin
    if (!adminSignup) {

        return next(errorHandler("Please login to access admin", 400));

    }
    else {

        if (!phone) {
            return next(errorHandler("Please required the phone number", 400));
        }

        else {


            // here was fetch userSignup model _id
            let userSignup = await userSignupModel.findOne({ phone }).exec();

            // here check condition phone was matched or not
            if (phone !== userSignup.phone) {

                return next(errorHandler("Phone are not valid", 404));

            }
            else {

                // here fetch profile details userProfile model from database
                let userDetails = await userProfileModel.findOne({ userSignup: userSignup._id }).populate({
                    path: 'userSignup'
                }).exec();

                if (!userDetails) {

                    return next(errorHandler("No more profile for this user", 404));

                }
                else {

                    // object of data
                    let data = {
                        user_profileimg: userDetails.user_profileimg,
                        user_name: userDetails.user_name,
                        phone: userDetails.userSignup.phone,
                        gender: userDetails.gender,
                        dob: userDetails.dob,
                        abouts: userDetails.abouts,
                        country: userDetails.userSignup.country,
                    };

                    return res.status(200).json({ data });

                }

            }

        }



    }

});


// here was fetch of search profile data from users controller functionality
const userProfileSearch = TryCatch(async (req, res, next) => {

    // here was declare payload
    let adminSignup = req.admin;
    let { user_name, dob } = req.body;

    // check admin
    if (!adminSignup) {

        return next(errorHandler("Please login to access admin", 400));

    }
    else {

        // check payload
        if (!(user_name || dob)) {

            return next(errorHandler("Please give some required data", 400));

        }
        else {

            // here was retrieve search data of userProfile from database
            let searchProfile = await userProfileModel.find({
                $or: [{ user_name: user_name }, { dob: dob }]
            }).populate({ path: 'userSignup' }).exec();


            // here was map of search profile data
            let data = searchProfile.map((search) => {

                return ({
                    user_profileimg: search.user_profileimg,
                    user_name: search.user_name,
                    phone: search.userSignup.phone,
                    country: search.userSignup.country
                });

            });

            return res.status(200).json({ data });
        }

    }

});




// here was export all dashboard data controller funtions
export {

    userAccount,
    userAccountSearch,

    userAllProfile,
    userProfiledetails,
    userProfileSearch,

   

};