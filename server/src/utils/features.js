// Consuming to the importing in fetures modules and lib
import { cookieOptions } from "../lib/optionconfig.js";
import { forbiddenError } from "./utility.js";
import { trycatchWrapper } from "../helpers/try-catch.helper.js";
import {
  accessUserToken,
  refreshUserToken,
  // accessAdminToken,
  // refreshAdminToken,
} from "../lib/generatedauth.js";

// declare options of cookie expiration
// export const cookieOptions = {
//   httpOnly: true,
//   secure: true,
// };

// define amd export there sendUserToken features function
/* export const sendUserToken = async (res, userSignup, statusCode, message) => {
  // use normal try-catch
  try {
    // there are declare user_id
    let userSignupId = userSignup._id;

    // there was declare user access token and refresh token
    let access_userToken = accessUserToken(userSignupId);
    let refresh_userToken = refreshUserToken(userSignup);

    // there was save user refresh token into the database
    userSignup.refresh_userToken = refresh_userToken;
    await userSignup.save({ validateBeforeSave: false });

    return res
      .status(statusCode)
      .cookie("access_userToken", access_userToken, cookieOptions)
      .cookie("refresh_userToken", refresh_userToken, cookieOptions)
      .json({
        message,
        access_userToken,
        refresh_userToken,
        userSignup_id: userSignupId,
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
}; */

// define amd export there sendUserToken features function
/* export const sendUserTokenAuth = async (
  res,
  userSignup,
  userProfile,
  statusCode,
  message
) => {
  try {
    // there are declare user_id
    let userSignupId = userSignup._id;
    let userProfileId = userProfile._id;

    // there was declare user access token and refresh token
    let access_userToken = accessUserToken(userSignupId);
    let refresh_userToken = refreshUserToken(userSignupId);

    // there was save user refresh token into the database
    userSignup.refresh_userToken = refresh_userToken;
    await userSignup.save({ validateBeforeSave: false });

    return res
      .status(statusCode)
      .cookie("access_userToken", access_userToken, cookieOptions)
      .cookie("refresh_userToken", refresh_userToken, cookieOptions)
      .json({
        message,
        access_userToken,
        refresh_userToken,
        userSignup_id: userSignupId,
        userProfile_id: userProfileId,
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
}; */

// define and export there sendAdminToken features function
/* export const sendAdminToken = async (res, adminSignup, statusCode, message) => {
  // user normal try-catch
  try {
    // there declare admin_id
    let adminSignupId = adminSignup._id;

    // there was declare admin access token and refresh token
    let access_adminToken = accessAdminToken(adminSignupId);
    let refresh_adminToken = refreshAdminToken(adminSignupId);

    // there was save admin refresh token into the database
    adminSignup.refresh_adminToken = refresh_adminToken;
    await adminSignup.save({ validateBeforeSave: false });

    // admin token and refresh token access into the cookie
    return res
      .status(statusCode)
      .cookie("access_adminToken", access_adminToken, cookieOptions)
      .cookie("refresh_adminToken", refresh_adminToken, cookieOptions)
      .json({
        message,
        access_adminToken,
        refresh_adminToken,
        adminSignup_id: adminSignupId,
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
}; */

// define and export there sendAdminToken features function
/* export const sendAdminTokenAuth = async (
  res,
  adminSignup,
  adminProfile,
  statusCode,
  message
) => {
  // user normal try-catch
  try {
    // there declare admin_id
    let adminSignupId = adminSignup._id;
    let adminProfileId = adminProfile._id;

    // there was declare admin access token and refresh token
    let access_adminToken = accessAdminToken(adminSignupId);
    let refresh_adminToken = refreshAdminToken(adminSignupId);

    // there was save admin refresh token into the database
    adminSignup.refresh_adminToken = refresh_adminToken;
    await adminSignup.save({ validateBeforeSave: false });

    // admin token and refresh token access into the cookie
    return res
      .status(statusCode)
      .cookie("access_adminToken", access_adminToken, cookieOptions)
      .cookie("refresh_adminToken", refresh_adminToken, cookieOptions)
      .json({
        message,
        access_adminToken,
        refresh_adminToken,
        adminSignup_id: adminSignupId,
        adminProfile_id: adminProfileId,
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
}; */

// define and exporting for authenticate features function where as send token with usersignupId
export const sendUserToken = trycatchWrapper(
  async (res, next, userSignup, statusCode, message) => {
    // here declare variable for stored usersignupId
    const userSignupId = userSignup._id;

    // declare variables for stored access_token and refresh_token
    let access_userToken = accessUserToken(userSignupId);
    let refresh_userToken = refreshUserToken(userSignupId);

    if (userSignupId && access_userToken && refresh_userToken) {
      // here stored refreshtoken into the database
      userSignup.refresh_userToken = refresh_userToken;
      await userSignup.save({ validateBeforeSave: false });

      return res
        .status(statusCode)
        .cookie("access_userToken", access_userToken, cookieOptions)
        .cookie("refresh_userToken", refresh_userToken, cookieOptions)
        .json({
          msg: message,
          access_userToken: accessUserToken,
          refresh_userToken: refresh_userToken,
          userSignup_id: userSignupId,
        });
    } else {
      return next(forbiddenError("User can't able to access"));
    }
  }
);

// define and exporting for authenticate features function where as send token with usersignupId & userprofileId
export const sendUserTokenAuth = trycatchWrapper(
  async (res, next, userSignup, userProfile, statusCode, message) => {
    // here declare variable for stored usersignupId & userprofileId
    const userSignupId = userSignup._id;
    const userProfileId = userProfile._id;

    // declare variables for stored access_token and refresh_token
    let access_userToken = accessUserToken(userSignupId);
    let refresh_userToken = refreshUserToken(userSignupId);

    if (userSignupId && access_userToken && refresh_userToken) {
      // here stored refreshtoken into the database
      userSignup.refresh_userToken = refresh_userToken;
      await userSignup.save({ validateBeforeSave: false });

      return res
        .status(statusCode)
        .cookie("access_userToken", access_userToken, cookieOptions)
        .cookie("refresh_userToken", refresh_userToken, cookieOptions)
        .json({
          msg: message,
          access_userToken: accessUserToken,
          refresh_userToken: refresh_userToken,
          userSignup_id: userSignupId,
          userProfile_id: userProfileId,
        });
    } else {
      return next(forbiddenError("User can't able to access"));
    }
  }
);
