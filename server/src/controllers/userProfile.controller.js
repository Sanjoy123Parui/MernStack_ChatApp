import { userProfileModel } from '../models/userProfile.model.js';
import { asyncHandler } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';
import { uploadFiles } from '../helpers/fileuploads.helper.js';

// create user Profile all controllers operation perform

// create new user profile
const userNewProfile = asyncHandler(async (req, res, next) => {

    //there are declare payloads
    let userSignup = req.user;
    let { full_name, gender, dob, abouts } = req.body;
    // let filePath = req.file.path;
    let filePath = req.file.filename;

    if (!userSignup) {
        return next(errorHandler("Please login login to access user", 400));
    }
    else {

        // this data are find or not is check
        let userInfo = await userProfileModel.findOne({ userSignup }).exec();

        // condition to check find user
        if (userInfo) {
            return next(errorHandler("This user are already exist", 400));
        }
        else {

            // check file path
            if (!filePath) {
                return next(errorHandler("File is required", 404));
            }
            else {

                // there will upload file using with multer and cloudinary for generate path
                // let uploads = await uploadFiles(filePath);

                // there loaded filepath with localserver
                let uploads = await uploadFiles();

                if (!uploads) {
                    return next(errorHandler("File are not uploaded", 400));
                }
                else {

                    // there are data will be create and save into the database
                    let userProfiledata = await userProfileModel.create({
                        userSignup,
                        full_name,
                        //profile_img: uploads.secure_url,
                        profile_img: uploads + 'uploads/' + filePath,
                        gender,
                        dob,
                        abouts
                    });

                    if (!userProfiledata) {
                        return next(errorHandler("Profile are not created", 404));
                    }
                    else {
                        return res.status(201).send({ msg: "Your profile can be created successfully" });

                    }

                }

            }

        }

    }


});



// view profile data controller
const userProfileview = asyncHandler(async (req, res, next) => {

    // declare payload of params
    let userSignup = req.user;

    if (!userSignup) {

        return next(errorHandler("Please login login to access user", 400));

    }
    else {

        // there are user profile fetch
        let userProfiledata = await userProfileModel.findOne({ userSignup }).populate({
            path: 'userSignup'
        }).exec();


        // check the condition user data
        if (!userProfiledata) {
            return next(errorHandler("Profile data are not find here"));
        }
        else {

            return res.status(200).json({
                data: {
                    full_name: userProfiledata.full_name,
                    profile_img: userProfiledata.profile_img,
                    gender: userProfiledata.gender,
                    dob: userProfiledata.dob,
                    abouts: userProfiledata.abouts,
                    phone: userProfiledata.userSignup.phone
                }
            });
        }

    }



});



// update profile image controller
const userProfileImageupdate = asyncHandler(async (req, res, next) => {

    // there declare payload
    let userSignup = req.user;
    let { userProfileId } = req.params;
    // let filePath = req.file.path;
    let filePath = req.file.filename;

    // check condition for user can be access or not
    if (!userSignup) {

        return next(errorHandler("Please login login to access user", 400));

    }
    else {

        // check exist user
        let existUser = await userProfileModel.findOne({ _id: userProfileId }).exec();

        if (!existUser) {
            return next(errorHandler("User are not found", 400));
        }
        else {

            if (!filePath) {
                return next(errorHandler("File are required", 400));
            }
            else {

                // there upload image file with multer and cloudinary
                // let uploads = await uploadFiles(filePath);

                // there loaded filepath with localserver
                let uploads = await uploadFiles();

                if (!uploads) {
                    return next(errorHandler("File can not upload", 404));
                }
                else {

                    let userProfiledata = await userProfileModel.updateOne({
                        _id: userProfileId
                    }, {
                        $set: {
                            // user_profileimg: uploads.secure_url
                            profile_img: uploads + 'uploads/' + filePath
                        }
                    });

                    if (!userProfiledata.acknowledged) {
                        return next(errorHandler("Profile image can not changed"));
                    }
                    else {
                        return res.status(200).json({ msg: "Your profile picture has been changed" });
                    }

                }

            }

        }
    }

});



// delete profile controller
const userProfiledelete = asyncHandler(async (req, res, next) => {

    // here declare payload
    let userSignup = req.user;

    // here can check condition for  userSignup
    if (!userSignup) {
        return next(errorHandler("Please login to access user", 400));
    }
    else {

        // declare query from delete user profile into the database
        let existUserProfile = await userProfileModel.deleteOne({ userSignup });

        if (!existUserProfile.deletedCount) {
            return next(errorHandler("Profile not found", 404));
        }
        else {
            return res.status(200).json({ msg: "Profile are deleted successfully" });
        }
    }
});



// update profile data controller
const userProfileupdate = asyncHandler(async (req, res, next) => {

    // there have check the request method of condition
    if (req.method === 'PUT' || req.method === 'PATCH') {
        // declare payload data of params and body
        let userSignup = req.user;
        let { userProfileId } = req.params;
        let { full_name, gender, dob, abouts } = req.body;


        // here check condition user can access or not
        if (!userSignup) {

            return next(errorHandler("Please login login to access user", 400));

        }
        else {

            // there are declare userprofile_id was found or not
            let existUser = await userProfileModel.findOne({ _id: userProfileId }).exec();

            if (!existUser) {
                return next(errorHandler("User are not found", 404));
            }
            else {

                // there can be updated data of profile
                let userProfiledata = await userProfileModel.updateOne({
                    _id: userProfileId
                }, {
                    $set: {
                        full_name, gender, dob, abouts
                    }
                });

                // check the condition for update data
                if (!userProfiledata.matchedCount && userProfiledata.modifiedCount) {
                    return next(errorHandler("Data can not be changed", 404));
                }
                else {
                    return res.status(200).json({ msg: "Profile was updated successfully" });
                }

            }

        }
    }

    else {
        return next(errorHandler("Wrong Cridential", 400));
    }
});




// export user profile all controllers
export {
    userNewProfile,
    userProfileview,
    userProfileImageupdate,
    userProfiledelete,
    userProfileupdate
};