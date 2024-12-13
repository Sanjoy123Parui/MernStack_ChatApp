import { asyncHandler } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';
import { userSignupModel } from '../models/userSignup.model.js';
import { userProfileModel } from '../models/userProfile.model.js';
import { contactModel } from '../models/contact.model.js';

// here was define all admin-dashboard data controller functions

// userSignup data

// here was how many userAccount created check controller functionality
const userAccount = asyncHandler(async (req, res, next) => {

    // here was declare payload
    let adminSignup = req.admin;

    // check condition admin signup
    if (!adminSignup) {
        return next(errorHandler("Please login to access admin", 400));
    }
    else {

        // here was specified pagination
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 10;
        let skip = (page - 1) * limit;

        // here was fetch the userSignup data from database
        let userSignupdata = await userSignupModel.find({})
            .skip(skip).limit(limit).exec();

        // here was map data
        let data = userSignupdata.map((user) => {

            return ({
                phone: user.phone,
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
const userAccountSearch = asyncHandler(async (req, res, next) => {

    // here declare payload
    let adminSignup = req.admin;
    let { phone } = req.body

    // check admin
    if (!adminSignup) {

        return next(errorHandler("Please login to access admin", 400));

    }
    else {

        // check condition for phone are matched
        if (!phone) {

            return next(errorHandler("No more phone contact has been found", 404));

        }
        else {

            // here was fetch the search data in userSignup model from database
            let searchData = await userSignupModel.find({ phone }).exec();

            // here was map data
            let data = searchData.map((user) => {

                return ({
                    phone: user.phone,
                });

            });

            return res.status(200).json({ data });

        }

    }

});




// userProfile data

// here was retrieve all the profile data controller functionality
const userAllProfile = asyncHandler(async (req, res, next) => {

    // here was declare payload
    let adminSignup = req.admin;

    // check admin
    if (!adminSignup) {

        return next(errorHandler("Please login to access admin", 400));

    }
    else {

        // here was specified pagination
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 10;
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
                phone: profile.userSignup.phone
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
const userProfiledetails = asyncHandler(async (req, res, next) => {

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
                        abouts: userDetails.abouts
                    };

                    return res.status(200).json({ data });

                }

            }

        }



    }

});


// here was fetch of search profile data from users controller functionality
const userProfileSearch = asyncHandler(async (req, res, next) => {

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




// contact data

// here was define to fetch all contacts controller functionality
const userContactLists = asyncHandler(async (req, res, next) => {

    // here was declare payload
    let adminSignup = req.admin;

    // check admin
    if (!adminSignup) {

        return next(errorHandler("Please login to access admin", 400));

    }
    else {

        // here was specified pagination
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 10;
        let skip = (page - 1) * limit;

        // here was retrive the all contacts data in contactModel where who was contact in another person from database
        let contactList = await contactModel.find({}).populate([
            { path: 'myProfile', populate: { path: 'userSignup' } },
            { path: 'contactProfile', populate: { path: 'userSignup' } }
        ]).skip(skip).limit(limit).exec();


        // here was map for contact data
        let data = contactList.map((contact) => {

            return ({
                userimg: contact.myProfile.user_profileimg,
                username: contact.myProfile.user_name,
                userphone: contact.myProfile.userSignup.phone,
                contactimg: contact.contactProfile.user_profileimg,
                contactname: contact.contactProfile.user_name,
                contactphone: contact.contactProfile.userSignup.phone,
                savename: contact.contact_name,
                savephone: contact.contact_phone
            });

        });

        // here was declare totalPages
        let total = await userSignupModel.countDocuments();
        let totalPages = Math.ceil(total / limit);

        res.status(200).json({
            'data': data,
            'currentPage': page,
            'totalPages': totalPages
        });

    }

});


// here was define to fetch particular user contacts controller functionality
const particularContact = asyncHandler(async (req, res, next) => {

    // declare payload
    let adminSignup = req.admin;
    let { phone } = req.body;

    // check condition for admin
    if (!adminSignup) {

        return next(errorHandler("Please login to access admin", 400));

    }
    else {

        // check user phone and country
        if (!(phone)) {

            return next(errorHandler("Please required phone", 400));

        }
        else {

            // here was userId from database
            let userSignup = await userSignupModel.findOne({ phone }).exec();
            let myProfile = await userProfileModel.findOne({ userSignup: userSignup._id })
                .populate({ path: 'userSignup' }).exec();


            // check userId
            if (!myProfile) {

                return next(errorHandler("No more User are exist", 404));

            }
            else {


                // here was specified pagination
                let page = Number(req.query.page) || 1;
                let limit = Number(req.query.limit) || 10;
                let skip = (page - 1) * limit;


                // here was declare how many contact are save in thos user in contacModel from database
                let userContact = await contactModel.find({ myProfile: myProfile._id }).populate([
                    { path: 'myProfile', populate: { path: 'userSignup' } },
                    { path: 'contactProfile', populate: { path: 'userSignup' } },
                ]).skip(skip).limit(limit);


                // here was particular contact data map
                let data = userContact.map((contact) => {

                    return ({
                        userimg: contact.myProfile.user_profileimg,
                        userphone: contact.myProfile.userSignup.phone,
                        username: contact.myProfile.user_name,
                        usercountry: contact.myProfile.userSignup.country,
                        contactimg: contact.contactProfile.user_profileimg,
                        contacphone: contact.contact_phone,
                        contactname: contact.contact_name
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

    userContactLists,
    particularContact

};