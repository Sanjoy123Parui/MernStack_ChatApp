// there import bcryptjs libraries and modules
import bcyptjs from "bcryptjs";
import { userSignupModel } from '../models/userSignup.model.js';
import { TryCatch } from '../helpers/try-catch.helper.js';
import { errorHandler } from "../utils/utility.js";

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
            return res.status(200).json({msg: "This Account has been already exist"});
        }
        else {

            // there are data save into the database
            let userList = new userSignupModel({
                country: country,
                phone: phone,
                password: hashPassword
            });

            let signupInfo = await userList.save();

            return res.status(201).send({  msg:"Account has been create successfully" , data:signupInfo });

        }


    }

});


//  there export user signup controlle
export { userRegister };
console.log('User signup controller is worked successfully');
