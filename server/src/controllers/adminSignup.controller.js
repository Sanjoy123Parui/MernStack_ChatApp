import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { adminSignupModel } from '../models/adminSignup.model.js';
import { adminProfileModel } from '../models/adminProfile.model.js';
import { asyncHandler } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';
import { sendAdminToken, cookieOptions } from '../utils/features.js';

// there create all admin signup controllers

// admin register controller
const adminRegister = asyncHandler(async (req, res, next) => {

    // there are declare payload of body
    let { phone, password, confirmPassword } = req.body;

    // condition to check password and confirmpassword comparison
    if (password !== confirmPassword) {
        return next(errorHandler("Password are not matched", 400));
    }
    else {

        //there are delare user phone can be exist or not
        let existPhone = await adminSignupModel.findOne({
            phone: phone
        }).exec();

        // there are password bcrypted
        let salt = bcryptjs.genSaltSync(10);
        let hashPassword = bcryptjs.hashSync(password, salt);

        if (existPhone) {
            return res.status(200).json({ msg: "This phone number is already exist" });
        }
        else {

            // there are insert the data and save

            let adminInfo = await adminSignupModel.create({
                phone,
                password: hashPassword
            });

            // check condition
            if (!adminInfo) {
                return next(errorHandler("Unoccured Registered"));
            }
            else {
                return res.status(201).send({ msg: "Account was created successfully" });
            }

        }

    }

});



// admin login controller
const adminLogin = asyncHandler(async (req, res, next) => {

    // there are declare payload of body
    let { phone, password } = req.body;

    // there was check exist phone of user in payload
    let existAdmin = await adminSignupModel.findOne({
        phone
    }).exec();


    // condition can be check there phone number is correct or not
    if (!existAdmin) {
        return next(errorHandler("Please required the correct admin", 400));
    }
    else {

        // there was comparison of admin password with bcryptjs
        let isMatchPassword = bcryptjs.compareSync(password, existAdmin.password);

        // check the comparison password
        if (!isMatchPassword) {
            return next(errorHandler("Invalid admin", 404));
        }
        else {
            return sendAdminToken(res, existAdmin, 201, "Logged in Successfully");
        }

    }

});



// user accout delete controller
const adminAccountdelete = asyncHandler(async (req, res, next) => {

    // declare payload
    let { admin_Id } = req.params;

    // declare query from delete admin into the database
    let adminAccout = await Promise.all([
        adminSignupModel.findOneAndDelete({ _id: admin_Id }),
        adminProfileModel.findOneAndDelete({ adminSignup: admin_Id })
    ]);

    // check condition admin account are delete or not
    if (!adminAccout) {
        return next(errorHandler("This accront are not found", 404));
    }
    else {
        return res.status(200).json({ msg: "Account are deleted successfully" });
    }

});


// admin refresh token to access token recover
const adminRecover = asyncHandler(async (req, res, next) => {

    // there generate admin refresh token from cookie and another
    let adminRefresh = req.cookies.refresh_adminToken || req.body.refresh_adminToken;


    // there check verified admin token
    if (!adminRefresh) {

        return next(errorHandler("Unatuthorized admin please access the user", 401))
    }
    else {

        // there decoded token verify from user
        let decodedData = jwt.verify(
            adminRefresh,
            process.env.JWT_REFRESH_SCKEY
        );

        // there was retrive admin _id from database
        let admin = await adminSignupModel.findById(decodedData._id).exec();

        // there can check right admin are authorized
        if (!admin) {
            return next(errorHandler("Invalid admin", 401));
        }
        else {

            // here condition will be check to the matched refresh token from admin
            if (adminRefresh !== admin.refresh_adminToken) {

                return next(errorHandler("Auth was expired or not used", 404));

            }
            else {

                return sendAdminToken(res, admin, 200, "Admin authenticated successfully");

            }

        }


    }

});




// admin logout controller
const adminLogout = asyncHandler(async (req, res, next) => {

    // here declare admin_id
    let admin_Id = req.admin;


    // here is admin are exist or not into the database
    let existAdmin = await adminSignupModel.findByIdAndUpdate(admin_Id, {
        $set: {
            refresh_adminToken: undefined
        }
    }, {
        new: true
    })

    // check condition for admin are found or not then logout
    if (!existAdmin) {
        return next(errorHandler('Unauthorized admin', 404));
    }
    else {

        return res.status(200)
            .clearCookie('access_adminToken', cookieOptions)
            .clearCookie('refresh_adminToken', cookieOptions)
            .json({ msg: "Logged out successfully" });

    }

});



// admin change password controller function
const adminChangePassword = asyncHandler(async (req, res, next) => {

    // check codition for request method
    if (req.method === 'PUT' || req.method === 'PATCH') {
        // declare payload
        let { admin_Id } = req.params;
        let { phone, password, confirmPassword } = req.body;

        // here check condition for password and confirmPassword match
        if (password !== confirmPassword) {
            return next(errorHandler("Password are not matched to the confirmPassword", 404));
        }
        else {

            // declare here query to check and retrieve admin signup phone number into the database
            let existAdmin = await adminSignupModel.findOne({ phone: phone }).exec();

            // here password can bcrypted
            let salt = bcryptjs.genSaltSync(10);
            let hashPassword = bcryptjs.hashSync(password, salt);

            // check condition existAdmin are found or not
            if (!existAdmin) {
                return next(errorHandler("This user can't found", 404));
            }
            else {

                // declare query from update or change password into the database
                let adminPassword = await adminSignupModel.updateOne({ _id: admin_Id }, {
                    $set: {
                        phone: phone,
                        password: hashPassword
                    }
                });

                // check condition for password are changed or not
                if (adminPassword.matchedCount && adminPassword.modifiedCount) {
                    return res.status(200).json({ msg: "Password are updated successfully" });
                }
                else {
                    return next(errorHandler("Password can't be changed", 404));
                }
            }

        }
    }
    else {
        return next(errorHandler("Request are not found", 400));
    }

});



// export there adminSignup controller
export {
    adminRegister,
    adminLogin,
    adminRecover,
    adminLogout,
    adminAccountdelete,
    adminChangePassword
};