import { userProfileModel } from '../models/userProfile.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';
import { uploadFiles } from '../helpers/fileuploads.helper.js';

// create user Profile all controllers operation perform

// create new user profile
const userNewProfile = TryCatch(async (req, res, next) => {

    //there are declare payloads
    let usersignup_id = req.user;
    let { user_name, gender, dob, abouts } = req.body;
    // let filePath = req.file.path;
    let filePath = req.file.filename;
    
    if (!usersignup_id) {
        return next(errorHandler("Wrong cridential", 400));
    }
    else {

        // this data are find or not is check
        let userInfo = await userProfileModel.findOne({ usersignup_id }).exec();

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
                        usersignup_id,
                        user_name,
                        // user_profileimg: uploads.secure_url,
                        user_profileimg: uploads+'uploads/'+filePath,
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


// admin view all user profile with controller
const userProfileviewAll = TryCatch(async (req, res, next) => {

    // there are view profile data of user into the database
    let userProfiledata = await userProfileModel.find({}).populate({
        path: 'usersigup_id'
    }).exec();

    return res.status(200).json({ data: userProfiledata });

});


// view profile data controller
const userProfileview = TryCatch(async (req, res, next) => {

    // declare payload of params
    let { userprofile_id } = req.params;

    // there are user profile fetch
    let userProfiledata = await userProfileModel.findById(userprofile_id)
        .populate({
            path: 'usersignup_id'
        }).exec();


    // check the condition user data
    if (!userProfiledata) {
        return next(errorHandler("Profile data are not find here"));
    }
    else {

        return res.status(200).json({
            data: {
                user_name: userProfiledata.user_name,
                user_profileimg: userProfiledata.user_profileimg,
                gender:userProfiledata.gender,
                dob: userProfiledata.dob,
                abouts: userProfiledata.abouts,
                phone: userProfiledata.usersignup_id.phone
            }
        });
    }

});



// update profile image controller
const userProfileImageupdate = TryCatch(async (req, res, next) => {

    // there declare payload
    let { userprofile_id } = req.params;
    // let filePath = req.file.path;
    let filePath = req.file.filename;

    // check exist user
    let existUser = await userProfileModel.findOne({ _id: userprofile_id }).exec();

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
                    _id: userprofile_id
                }, {
                    $set: {
                        // user_profileimg: uploads.secure_url
                        user_profileimg: uploads + 'uploads/' + filePath
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


});






// update profile data controller
const userProfileupdate = TryCatch(async (req, res, next) => {

    // there have check the request method of condition
    if (req.method === 'PUT' || req.method === 'PATCH') {
        // declare payload data of params and body
        let { userprofile_id } = req.params;
        let { user_name, gender, dob, abouts } = req.body;

        // there are declare userprofile_id was found or not
        let existUser = await userProfileModel.findOne({ _id: userprofile_id }).exec();

        if (!existUser) {
            return next(errorHandler("User are not found", 404));
        }
        else {

            // there can be updated data of profile
            let userProfiledata = await userProfileModel.updateOne({
                _id: userprofile_id
            }, {
                $set: {
                    user_name,
                    gender,
                    dob,
                    abouts
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
    else {
        return next(errorHandler("Wrong Cridential", 400));
    }
});




// export user profile all controllers
export { userNewProfile, userProfileviewAll, userProfileview, userProfileImageupdate, userProfileupdate };
console.log('User profile controller is worked successfully');