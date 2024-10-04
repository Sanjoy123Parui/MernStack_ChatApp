import { adminProfileModel } from '../models/adminProfile.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';
import { uploadFiles } from '../helpers/fileuploads.helper.js';

// there are define all admin profile controllers here

// admin profile create controller
const adminNewprofile = TryCatch(async (req, res, next) => {

    // there are declare payloads
    let adminsignup_id = req.admin;
    let { admin_name, gender, dob, abouts } = req.body;
    // let filePath = req.file.path;
    let filePath = req.file.filename;

    if (!adminsignup_id) {
        return next(errorHandler("Wrong Cridential", 400));
    }
    else {

        // this data are find or not check

        let adminInfo = await adminProfileModel.findOne({ adminsignup_id }).exec();

        // check the condition from this admin are exist or not
        if (adminInfo) {
            return next(errorHandler("Admin already exist", 400));
        }
        else {

            // check file path of admin
            if (!filePath) {
                return next(errorHandler("File is required", 404));
            }
            else {

                // there will be uploads admin preofile images with cloudinary and multer
                // let uploads = await uploadFiles(filePath);

                // there upload file in localserver
                let uploads = await uploadFiles();

                if (!uploads) {
                    return next(errorHandler("File are not uploaded", 404));
                }
                else {

                    // there are data can be create and save into the database
                    let adminProfiledata = await adminProfileModel.create({
                        adminsignup_id,
                        admin_name,
                        // admin_profileimg: uploads.secure_url,
                        admin_profileimg: uploads+'uploads/'+filePath,
                        gender,
                        dob,
                        abouts
                    });


                    if (!adminProfiledata) {
                        return next(errorHandler("Profile can not inserted"));
                    }
                    else {
                        
                        return res.status(201).send({ msg: "Your profile was created successfully" });
                    }
                }

            }
        }

    }

});



// there admin own profile read
const adminViewprofile = TryCatch(async (req, res, next) => {

    // there are declare payload of params
    let { adminprofile_id } = req.params;

    // there can check findn the data
    let existAdmin = await adminProfileModel.findById(adminprofile_id).populate({
        path: 'adminsignup_id'
    }).exec();

    // there was check existAdmin
    if (!existAdmin) {
        return next(errorHandler("Admin data are not found"));
    }
    else {
        return res.status(200).json({
            data: {
                admin_name: existAdmin.admin_name,
                admin_profileimg: existAdmin.admin_profileimg,
                gender:existAdmin.gender,
                dob: existAdmin.dob,
                abouts: existAdmin.abouts,
                phone: existAdmin.adminsignup_id.phone
            }
        });
    }

});



// admin profile image data update controller
const adminProfileImageupdate = TryCatch(async (req, res, next) => {

    // there declare payload
    let { adminprofile_id } = req.params;
    // let filePath = req.file.path;
    let filePath = req.file.filename;

    // there are declare existadmin data
    let existAdmin = await adminProfileModel.findById(adminprofile_id).exec();

    if (!existAdmin) {
        return next(errorHandler("Admin are not found", 404));
    }
    else {

        // check filepath
        if (!filePath) {
            return next(errorHandler("File ar not required", 400));
        }
        else {

            // there upload admin profile image with coludinary and multer filepath
            // let uploads = await uploadFiles(filePath);

            // there upload file in localserver
            let uploads = await uploadFiles();

            // check condition
            if (!uploads) {
                return next(errorHandler("File can not uploaded", 400));
            }
            else {

                let adminProdfiledata = await adminProfileModel.updateOne({
                    _id: adminprofile_id
                }, {
                    // admin_profileimg: uploads.secure_url
                    admin_profileimg: uploads+'uploads/'+filePath
                });

                if (!adminProdfiledata.acknowledged) {
                    return next(errorHandler("Profile picture can't changed"));
                }
                else {
                    return res.status(200).json({ msg: "Your profile picture are changed successfully" });
                }

            }

        }

    }

});



// admin profile update cotroller
const adminProfileupdate = TryCatch(async (req, res, next) => {

    // check condition for request
    if (req.method === 'PUT' || req.method === 'PATCH') {

        // there are declare payload
        let { adminprofile_id } = req.params;
        let { admin_name, gender, dob, abouts } = req.body;

        // existAdmin for are found or not
        let existAdmin = await adminProfileModel.findById(adminprofile_id).exec();

        if (!existAdmin) {
            return next(errorHandler("Admin are not found", 404));
        }
        else {

            // there update admin profile data into the database
            let adminProfiledata = await adminProfileModel.updateOne({
                _id: adminprofile_id
            }, {
                $set: {
                    admin_name,
                    gender,
                    dob,
                    abouts
                }
            });

            if (!adminProfiledata.matchedCount && adminProfiledata.modifiedCount) {
                return next(errorHandler("Your profile are not updated"));
            }
            else {
                return res.status(200).json({ msg: "Your profile has been updated successfully" });
            }

        }

    }
    else {
        return next(errorHandler("Wrong Cridential", 400));
    }

});


// export there admin profile all controllers operation
export { adminNewprofile, adminViewprofile, adminProfileImageupdate, adminProfileupdate };
console.log('Admin profile controller is worked successfully');