// there import libraries and modules
import jwt from "jsonwebtoken";
import bcyptjs from "bcryptjs";
import { cache } from "../connections/socketconnection.js";
import { userSignupModel } from "../models/userSignup.model.js";
import { userProfileModel } from "../models/userProfile.model.js";
import { asyncHandler } from "../helpers/try-catch.helper.js";
import { errorHandler } from "../utils/utility.js";
import { sendUserToken, cookieOptions } from "../utils/features.js";

// there are define user signup controllers

// userRegister controller
const userRegister = asyncHandler(async (req, res, next) => {
  // there are declare payload
  let { phone, password, confirmPassword } = req.body;

  // check for compare the password
  if (password !== confirmPassword) {
    return next(errorHandler("Password are not matched", 404));
  } else {
    // existUser define
    let existUser = await userSignupModel
      .findOne({
        phone: phone,
      })
      .exec();

    // there are password can be bcrypted
    let salt = bcyptjs.genSaltSync(10);
    let hashPassword = bcyptjs.hashSync(password, salt);

    // check the condition user can be found or not
    if (existUser) {
      return next(errorHandler("This Account has been already exist", 400));
    } else {
      // there are data save into the database

      let userInfo = await userSignupModel.create({
        phone,
        password: hashPassword,
      });

      // here declare cache variables
      let myProfile, contactId;

      // delete cache key
      const cacheKey = [
        "userSignup",
        "userProfiledata",
        "existUserprofile",
        "userContact",
        `userSearchContact:${myProfile}`,
        `userContact:${contactId}`,
      ];
      cache.del(cacheKey);

      // check condition for register user
      if (!userInfo) {
        return next(errorHandler("Occured user registered", 404));
      } else {
        return res
          .status(201)
          .send({ msg: "Account has been created successfully" });
      }
    }
  }
});

// user login controller
const userLogin = asyncHandler(async (req, res, next) => {
  // there are declare payload
  let { phone, password } = req.body;

  // there was declare phone are valid for exist user
  let existUser = await userSignupModel
    .findOne({
      phone,
    })
    .exec();

  // condition are check user are valid or not
  if (!existUser) {
    return next(errorHandler("Please required the correct phone", 400));
  } else {
    // passwor synchronise compare
    let isMatchPassword = bcyptjs.compareSync(password, existUser.password);

    // here declare cache variables
    let myProfile, contactId;

    // delete cache key
    const cacheKey = [
      "userSignup",
      "userProfiledata",
      "existUserprofile",
      "userContact",
      `userSearchContact:${myProfile}`,
      `userContact:${contactId}`,
    ];
    cache.del(cacheKey);

    // check password with condition
    if (!isMatchPassword) {
      return next(errorHandler("Invalid password", 404));
    } else {
      return sendUserToken(res, existUser, 201, "Logged in Successfully");
    }
  }
});

// user refresh token to access token recover controller
const userRecover = asyncHandler(async (req, res, next) => {
  // there generate user refresh token from cookie and another
  let userRefresh = req.cookies.refresh_userToken || req.body.refresh_userToken;

  // there check verified token
  if (!userRefresh) {
    return next(errorHandler("Unatuthorized user please access the user", 401));
  } else {
    // there decoded token verify from user
    let decodedData = jwt.verify(userRefresh, process.env.JWT_REFRESH_SCKEY);

    // there was retrive user _id from database
    let user = await userSignupModel.findById(decodedData._id).exec();

    // here declare cache variables
    let myProfile, contactId;

    // delete cache key
    const cacheKey = [
      "userSignup",
      "userProfiledata",
      "existUserprofile",
      "userContact",
      `userSearchContact:${myProfile}`,
      `userContact:${contactId}`,
    ];
    cache.del(cacheKey);

    // there can check right user are authorized
    if (!user) {
      return next(errorHandler("Invalid user", 401));
    } else {
      // here condition will be check to the matched refresh token from user
      if (userRefresh !== user.refresh_userToken) {
        return next(errorHandler("Auth was expired or not used", 404));
      } else {
        return sendUserToken(res, user, 200, "User authenticated successfully");
      }
    }
  }
});

// user logout controller
const userLogout = asyncHandler(async (req, res, next) => {
  // here is declare userSignupId
  let userSignup = req.user;

  // declare the user can check exist or not
  let existUser = await userSignupModel.findByIdAndUpdate(
    userSignup,
    {
      $set: {
        refresh_userToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  // here declare cache variables
  let myProfile, contactId;

  // delete cache key
  const cacheKey = [
    "userSignup",
    "userProfiledata",
    "existUserprofile",
    "userContact",
    `userSearchContact:${myProfile}`,
    `userContact:${contactId}`,
  ];
  cache.del(cacheKey);

  if (!existUser) {
    return next(errorHandler("Unauthorized user", 404));
  } else {
    return res
      .status(200)
      .clearCookie("access_userToken", cookieOptions)
      .clearCookie("refresh_userToken", cookieOptions)
      .json({ msg: "Logged out successfully" });
  }
});

// user accout delete controller
const userAccountdelete = asyncHandler(async (req, res, next) => {
  // declare payload
  let { user_Id } = req.params;

  // declare query from delete user into the database
  let userAccout = await Promise.all([
    userSignupModel.findOneAndDelete({ _id: user_Id }),
    userProfileModel.findOneAndDelete({ userSignup: user_Id }),
  ]);

  // here declare cache variables
  let myProfile, contactId;

  // delete cache key
  const cacheKey = [
    "userSignup",
    "userProfiledata",
    "existUserprofile",
    "userContact",
    `userSearchContact:${myProfile}`,
    `userContact:${contactId}`,
  ];
  cache.del(cacheKey);

  // check condition user account are delete or not
  if (!userAccout) {
    return next(errorHandler("This accront are not found", 404));
  } else {
    return res.status(200).json({ msg: "Account are deleted successfully" });
  }
});

// user change password controller
const userChangePassword = asyncHandler(async (req, res, next) => {
  // here check condition for request method
  if (req.method === "PUT" || req.method === "PATCH") {
    // here declare payload
    let { user_Id } = req.params;
    let { phone, password, confirmPassword } = req.body;

    // here check condition to match password and confirmPassword
    if (password !== confirmPassword) {
      return next(
        errorHandler("Password are not matched to the confirmPassword", 404)
      );
    } else {
      // declare here query to check and retrieve user signup phone number into the database
      let existUser = await userSignupModel.findOne({ phone: phone }).exec();

      // here password can bcrypted
      let salt = bcyptjs.genSaltSync(10);
      let hashPassword = bcyptjs.hashSync(password, salt);

      // check condition existUser are found or not
      if (!existUser) {
        return next(errorHandler("This user can't found", 404));
      } else {
        // declare query from update or change password into the database
        let userPassword = await userSignupModel.updateOne(
          { _id: user_Id },
          {
            $set: {
              phone: phone,
              password: hashPassword,
            },
          }
        );

        // here declare cache variables
        let myProfile, contactId;

        // delete cache key
        const cacheKey = [
          "userSignup",
          "userProfiledata",
          "existUserprofile",
          "userContact",
          `userSearchContact:${myProfile}`,
          `userContact:${contactId}`,
        ];
        cache.del(cacheKey);

        // check condition for password are changed or not
        if (userPassword.matchedCount && userPassword.modifiedCount) {
          return res
            .status(200)
            .json({ msg: "Password are updated successfully" });
        } else {
          return next(errorHandler("Password can't be changed", 404));
        }
      }
    }
  } else {
    return next(errorHandler("Request are not found", 400));
  }
});

//  there export user signup controller
export {
  userRegister,
  userLogin,
  userRecover,
  userLogout,
  userAccountdelete,
  userChangePassword,
};
