// Consuming to the importing some module & lib for usersignup controllers
import { jwt, bcryptjs } from "../config/app.js";
import { usersignupModel } from "../models/usersignup.model.js";
import {
  badRequestError,
  notfoundError,
  unauthorizedError,
} from "../utils/utility.js";
import { selectCountryCode } from "../lib/optionconfig.js";

// there import libraries and modules
// import jwt from "jsonwebtoken";
// import bcyptjs from "bcryptjs";
// import { cache } from "../connections/socketconnection.js";
// import { userSignupModel } from "../models/usersignup.model.js";
// import { userProfileModel } from "../models/userProfile.model.js";
// import { asyncHandler } from "../helpers/try-catch.helper.js";
// import { errorHandler } from "../utils/utility.js";
// import {
//   sendUserToken,
//   sendUserTokenAuth,
//   cookieOptions,
// } from "../utils/features.js";

// there are define user signup controllers

// userRegister controller
/* export const userRegister = asyncHandler(async (req, res, next) => {
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
}); */

// part-2
/* export const userRegister = async (req) => {
  const { phone, password, confirmPassword } = req.body;

  // password match
  if (password !== confirmPassword) {
    throw errorHandler("Password are not matched", 404);
  }

  // check existing user
  const existUser = await userSignupModel.findOne({ phone }).exec();
  if (existUser) {
    throw errorHandler("This Account has been already exist", 400);
  }

  // hashing
  const salt = bcyptjs.genSaltSync(10);
  const hashPassword = bcyptjs.hashSync(password, salt);

  // create document
  const newUser = new userSignupModel({
    phone: phone,
    password: hashPassword,
  });

  const savedUser = await newUser.save();

  // if (!savedUser) {
  //   throw "Occured user registered";
  // }

  return savedUser; // Return data to router
}; */

// user login controller
/* export const userLogin = asyncHandler(async (req, res, next) => {
  // there are declare payload
  let { phone, password } = req.body;

  // there was declare phone are valid for exist user
  let userSignupId = await userSignupModel
    .findOne({
      phone,
    })
    .exec();

  // condition are check user are valid or not
  if (!userSignupId) {
    return next(errorHandler("Please required the correct phone", 400));
  } else {
    // passwor synchronise compare
    let isMatchPassword = bcyptjs.compareSync(password, userSignupId.password);

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
      // declare userProfileId
      let userProfileId = await userProfileModel
        .findOne({ userSignup: userSignupId._id })
        .exec();

      // here check condition for userProfileId are exist or not
      if (!userProfileId) {
        return sendUserToken(res, userSignupId, 201, "Logged in Successfully");
      }
      return sendUserTokenAuth(
        res,
        userSignupId,
        userProfileId,
        201,
        "Logged in Successfully"
      );
    }
  }
}); */

// user refresh token to access token recover controller
/* export const userRecover = asyncHandler(async (req, res, next) => {
  // there generate user refresh token from cookie and another
  let userRefresh = req.cookies.refresh_userToken || req.body.refresh_userToken;

  // there check verified token
  if (!userRefresh) {
    return next(errorHandler("Unatuthorized user please access the user", 401));
  } else {
    // there decoded token verify from user
    let decodedData = jwt.verify(userRefresh, process.env.JWT_REFRESH_SCKEY);

    // there was retrive user _id from database
    let userSignup = await userSignupModel.findById(decodedData._id).exec();
    let userProfile = await userProfileModel
      .findOne({ userSignup: userSignup._id })
      .exec();

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
    if (!userSignup) {
      return next(errorHandler("Invalid user", 401));
    } else {
      // here condition will be check to the matched refresh token from user
      if (userRefresh !== userSignup.refresh_userToken) {
        return next(errorHandler("Auth was expired or not used", 404));
      } else {
        return sendUserTokenAuth(
          res,
          userSignup,
          userProfile,
          200,
          "User authenticated successfully"
        );
      }
    }
  }
}); */

// user logout controller
/* export const userLogout = asyncHandler(async (req, res, next) => {
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
}); */

// user accout delete controller
/* export const userAccountdelete = asyncHandler(async (req, res, next) => {
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
}); */

// user change password controller
/* export const userChangePassword = asyncHandler(async (req, res, next) => {
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
}); */

// here define and exporting for handle all usersignup controller functions

// usersignupRegister controller function handle
export const usersignupRegister = async (req) => {
  // declare variable of payload in body
  const { phone, password, confirmPassword, country_code } = req.body;
  // here declare destruct list of data
  const { countryLists } = selectCountryCode();

  // check password and confirmPassword matched or not
  if (password !== confirmPassword) {
    throw notfoundError("Password and confirm password are not matched");
  } else {
    // here was declare to check country code are matched or not
    let userInfo = countryLists.find((country) => country.iso === country_code);

    if (!userInfo) throw badRequestError("Invalid country code");

    // here declare append phone number with country code
    const userPhone = `${userInfo.dial_code}-${phone}`;

    // querying for existing user with phone are check into the database
    const existUser = await usersignupModel
      .findOne({ phone: userPhone })
      .exec();

    if (existUser) {
      throw badRequestError("This account was already exist");
    } else {
      // here vas declare variable for hashing password
      let salt = bcryptjs.genSaltSync(10);
      let hashPassword = bcryptjs.hashSync(password, salt);

      // querying for new data can insert into the database
      let savedUser = new usersignupModel({
        phone: userPhone,
        password: hashPassword,
        country_code: userInfo.iso,
        country_name: userInfo.name,
      });

      let result = await savedUser.save();

      return { result };
    }
  }
};

// usersignupLogin controller function handle
export const usersignupLogin = async (req) => {
  // declare payload for body
  const { phone, password, country_code } = req.body;
  // here declare destruct list of data
  const { countryLists } = selectCountryCode();

  // check specific data
  let userInfo = countryLists.find((country) => country.iso === country_code);

  if (!userInfo) throw badRequestError("Invalida country code");

  let userPhone = `${userInfo.dial_code}-${phone}`;

  // querying the specific data of user with phone are find into the database
  let usersignupId = await usersignupModel.findOne({ phone: userPhone }).exec();

  if (!usersignupId) {
    throw badRequestError("Please required the valid phone number");
  } else {
    // password synchronise for comparison of match condition
    let isMatchPassword = bcryptjs.compareSync(password, usersignupId.password);

    if (!isMatchPassword) throw badRequestError("Invalid password");

    return { usersignupId };
  }
};

// usersignupLogout controller function handle
export const usersignupLogout = async (req) => {
  let usersignupId = req.user;

  if (!usersignupId) throw notfoundError("This user are not found");

  // querying the find existUser refresh_token
  const existUser = await usersignupModel.findByIdAndUpdate(
    usersignupId,
    {
      $set: {
        refresh_userToken: undefined,
      },
    },
    { new: true }
  );

  return { existUser };
};

// usersignupAuthToken controller function handle
export const usersignupAuthToken = async (req) => {
  // here declare payload for token which are from cookies or header
  const userRefreshToken =
    req.cookies.refresh_userToken || req.body.refresh_userToken;

  // check conditon for user token are exist or not
  if (!userRefreshToken) {
    throw unauthorizedError("Unauthorized user please login to access");
  } else {
    // here jwt verified from decode user
    let decode = jwt.verify(userRefreshToken, process.env.JWT_REFRESH_SCKEY);

    // querying for retrieve the data of specific user _id from database
    let usersignupId = await usersignupModel.findById(decode._id).exec();

    if (!usersignupId) throw badRequestError("Invalid user");

    let usersignupRefreshToken = usersignupId.refresh_userToken;

    return { userRefreshToken, usersignupRefreshToken, usersignupId };
  }
};

// usersignupChangePass controller function handle
export const usersignupChangePass = async (req) => {
  // declare varibales for payload in params & body
  const { usersignup_id } = req.params;
  const { phone, password, confirmPassword, country_code } = req.body;
  // here declare destruct list of data
  const { countryLists } = selectCountryCode();

  if (password !== confirmPassword) {
    throw notfoundError("Password and confirm password are not matched");
  } else {
    // here was declare to check country code are matched or not
    let userInfo = countryLists.find((country) => country.iso === country_code);

    if (!userInfo) throw badRequestError("Invalid country code");

    // here declare append phone number with country code
    const userPhone = `${userInfo.dial_code}-${phone}`;

    // querying to the retrieve data for existing user can signup with phone from database
    let existUser = await usersignupModel.findOne({ phone: userPhone }).exec();

    if (!existUser) {
      throw badRequestError("User are not exist");
    } else {
      // declare variables for hashing password
      let salt = bcryptjs.genSaltSync(10);
      let hashPassword = bcryptjs.hashSync(password, salt);

      // querying the update password with specific id of usersignup into the database
      let userPassword = await usersignupModel.updateOne(
        { _id: usersignup_id },
        {
          $set: {
            phone: userPhone,
            password: hashPassword,
            country_code: userInfo.iso,
          },
        }
      );

      return { userPassword };
    }
  }
};
