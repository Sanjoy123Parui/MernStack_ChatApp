import { adminProfileModel } from '../models/adminProfile.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';
import { uploadFiles } from '../helpers/fileuploads.helper.js';

// there are define all admin profile controllers here

// admin profile create controller
const adminNewprofile = TryCatch(async (req, res, next) => {

    // there are declare payloads
    let adminsignup_id = req.admin;
    let { admin_name, dob, abouts } = req.body;
    let filePath = req.file.path;

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
                let uploads = await uploadFiles(filePath);

                if (!uploads) {
                    return next(errorHandler("File are not uploaded", 404));
                }
                else {

                    // there are data can be create and save into the database
                    let adminProfiledata = await adminProfileModel.create({
                        adminsignup_id,
                        admin_name,
                        avatar: uploads.secure_url,
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
    let adminprofile_id = req.params.adminprofile_id;

    // there can check findn the data
    let existAdmin = await adminProfileModel.findById(adminprofile_id).populate({
        'path': 'adminsignup_id'
    }).exec();

    // there was check existAdmin
    if (!existAdmin) {
        return next(errorHandler("Admin data are not found"));
    }
    else {
        return res.status(200).json({
            data: {
                'admin_name': existAdmin.admin_name,
                'avatar': existAdmin.avatar,
                'dob': existAdmin.dob,
                'abouts': existAdmin.abouts,
                'phone': existAdmin.adminsignup_id.phone
            }
        });
    }

});


// there view all admin data
const viewAlladmin = TryCatch(async (req, res, next) => {

    // there was find all data
    let adminProfiledata = await adminProfileModel.find({}).populate({
        'path': 'adminsignup_id'
    }).exec();

    return res.status(200).json({ data: adminProfiledata });

});


// export there admin profile all controllers operation
export { adminNewprofile, adminViewprofile, viewAlladmin };
console.log('Admin profile controller is worked successfully');