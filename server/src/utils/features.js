// Consuming to the importing in fetures modules and lib
import { accessUserToken, refreshUserToken } from "../lib/generatedauth.js";
import { cookieOptions } from "../lib/optionconfig.js";
import { trycatchWrapper } from "../helpers/try-catch.helper.js";
import { forbiddenError, unauthorizedError } from "../utils/utility.js";
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

// define and exporting for authenticate features function where as send token when user register or login
export const sendUserToken = trycatchWrapper(async (req, res, next) => {
  // declare payload variable of user send token
  const { usersignupId, statusCode, message } = req.tokenPayload;
  const userSignupId = usersignupId._id;
  const access_userToken = accessUserToken(userSignupId);
  const refresh_userToken = refreshUserToken(usersignupId);

  if (!(userSignupId && access_userToken && refresh_userToken)) {
    return next(forbiddenError("User can't able to access"));
  }
  usersignupId.refresh_userToken = refresh_userToken;
  await usersignupId.save({ validateBeforeSave: false });

  return res
    .status(statusCode)
    .cookie("access_userToken", access_userToken, cookieOptions)
    .cookie("refresh_userToken", refresh_userToken, cookieOptions)
    .send({
      usersignup_id: userSignupId,
      success: true,
      msg: message,
      access_userToken: access_userToken,
      refresh_userToken: refresh_userToken,
    });
});

// define and exporting for authenticate features function where as user remove token
export const removeUserToken = trycatchWrapper(async (req, res, next) => {
  // declare payload for remove token user
  const { usersignupId, statusCode, message } = req.tokenRemovePayload;
  let userSignupId = usersignupId._id;

  if (!userSignupId) {
    return next(
      unauthorizedError(`User are not authenticate, please login again`)
    );
  }

  return res
    .status(statusCode)
    .clearCookie("access_userToken", cookieOptions)
    .clearCookie("refresh_userToken", cookieOptions)
    .json({ success: true, msg: message });
});
