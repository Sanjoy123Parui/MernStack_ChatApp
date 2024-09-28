// there import libraries and modules
import jwt, { decode } from "jsonwebtoken"
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
                return res.status(201).send({ msg: "Account has been create successfully" });
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
        return next(errorHandler("This is user are not valid", 400));
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



// user refresh token to access token recover
const userRecover = TryCatch(async (req, res, next) => {

    // there generate refresh token from cookie and another
    let userRefresh = req.cookies.refresh_userToken || req.body.refresh_userToken;

    // there check verified token
    if(!userRefresh){
        return next(errorHandler("Unatuthorized please access the user", 401));
    }
    else{

        // there decoded token verify from user
        let decodedData = jwt.verify(
            userRefresh, 
            process.env.JWT_REFRESH_SCKEY
        );

        // there was retrive _id from database
        let user = await userSignupModel.findById(decodedData._id).exec();

        // there can check right user are authorized
        if(!user){
            return next(errorHandler("Invalid user", 401))
        }
        else{

            // here condition will be check to the matched refresh token
            if(userRefresh!==user.refresh_userToken){

                return next(errorHandler("Auth was expired or not used", 404));

            }else{

                return sendUserToken(res, user, 200, "User authenticated successfully");

            }
        }
        
        
    }


});



// user logout controller
const userLogout = TryCatch(async (req, res, next) => {

    // here is declare user_id
    let user_Id = req.user;


    // declare the user can check exist or not
    let existUser = await userSignupModel.findByIdAndUpdate(user_Id, {
        $set: {
            refresh_userToken: undefined
        }
    }, {
        new: true
    });

    if (!existUser) {
        return next(errorHandler('Unauthorized user', 404));
    }
    else {

        return res.status(200)
            .clearCookie('access_userToken', cookieOptions)
            .clearCookie('refresh_userToken', cookieOptions)
            .json({ msg: "Logged out successfully" });
    }

});


//  there export user signup controlle
export { userRegister, userLogin, userRecover, userLogout };
console.log('User signup controller is worked successfully');
