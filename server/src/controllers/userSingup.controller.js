// there import bcryptjs libraries and modules
import bcyptjs from "bcryptjs";
import { userSignupModel } from '../models/userSignup.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from '../utils/utility.js';
import { sendUserToken, cookieOptions } from '../utils/features.js';

// there are define user signup controllers

// userRegister controller
const userRegister = TryCatch(async (req, res, next) => {

    // there are declare payload
    let { country, phone, password, confirmPassword } = req.body;

    // check for compare the password
    if (password !== confirmPassword) {
        return next(errorHandler("Password are not matched", 404));
    }
    else {

        // existUser define
        let existUser = await userSignupModel.findOne({
            phone: phone
        }).exec();

        // there are password can be bcrypted
        let salt = bcyptjs.genSaltSync(10);
        let hashPassword = bcyptjs.hashSync(password, salt);

        // check the condition user can be found or not
        if (existUser) {
            return res.status(200).json({ msg: "This Account has been already exist" });
        }
        else {

            // there are data save into the database

            let userInfo = await userSignupModel.create({
                country,
                phone,
                password: hashPassword
            });

            // check condition
            if (!userInfo) {
                return next(errorHandler("Occured user registered", 404));
            }
            else {
                return res.status(201).send({ msg: "Account has been create successfully"});
            }

        }


    }

});



// user login controller
const userLogin = TryCatch(async (req, res, next) => {

    // there are declare payload
    let { phone, password } = req.body;

    // there was declare phone are valid for exist user
    let existUser = await userSignupModel.findOne({
        phone: phone
    }).exec();

    // condition are check user are valid or not
    if (!existUser) {
        return next(errorHandler("This is are not valid phone number", 400));
    }
    else {

        // passwor synchronise compare
        let userPassword = existUser.password;
        let isMatchPassword = bcyptjs.compareSync(password, userPassword);

        // check password with condition
        if (!isMatchPassword) {
            return next(errorHandler("Invalid password", 404));
        }
        else {
            return sendUserToken(res, existUser, 201, "Logged in Successfully");
        }

    }

});



// user logout controller
const userLogout = TryCatch(async (req, res, next) => {

    // declare the user
    let userInfo = await userSignupModel.findById(req.user).exec();

    if (!userInfo) {
        return next();
    }
    else {
        return res.status(200).cookie('token', '', { ...cookieOptions, maxAge: 0 }).json({ msg: 'Logged out successfully' });
    }

});


//  there export user signup controlle
export { userRegister, userLogin, userLogout };
console.log('User signup controller is worked successfully');
