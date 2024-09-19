import bcryptjs from "bcryptjs";
import { adminSignupModel } from '../models/adminSignup.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';
import { sendAdminToken, cookieOptions } from '../utils/features.js'

// there create all admin signup controllers

// admin register controller
const adminRegister = TryCatch(async (req, res, next) => {

    // there are declare payload of body
    let { country, phone, password, confirmPassword } = req.body;

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
                country,
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
const adminLogin = TryCatch(async (req, res, next) => {

    // there are declare payload of body
    let { phone, password } = req.body;

    // there was check exist phone of user in payload
    let existAdmin = await adminSignupModel.findOne({
        phone: phone
    }).exec();

    // condition can be check there phone number is correct or not
    if (!existAdmin) {
        return next(errorHandler("This phone number is not valid", 404));
    }
    else {

        let comparePassword = existAdmin.password;
        let isMatchPassword = bcryptjs.compareSync(password, comparePassword);

        // check the comparison password
        if (!isMatchPassword) {
            return next(errorHandler("Wrong password", 404));
        }
        else {
            sendAdminToken(res, existAdmin, 201, "Logged in Successfully");
        }

    }

});




// admin logout controller
const adminLogout = TryCatch(async (req, res, next) => {


    // declare exist Admin
    let adminInfo = await adminSignupModel.findById(req.admin).exec();

    // check condition
    if (!adminInfo) {
        return next();
    }
    else {
        return res.status(200).cookie('adminToken', '', { ...cookieOptions, maxAge: 0 }).json({ msg: "Logged out successfully" });
    }

});



// export there adminSignup controller
export { adminRegister, adminLogin, adminLogout };
console.log('Admin signup controller is worked successfully');