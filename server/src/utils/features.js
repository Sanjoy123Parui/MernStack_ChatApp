// Consuming to the importing in fetures modules and lib
import { accessUserToken, refreshUserToken } from "../lib/generatedauth.js";
import { cookieOptions } from "../lib/optionconfig.js";
import { trycatchWrapper } from "../helpers/try-catch.helper.js";
import { forbiddenError, unauthorizedError } from "../utils/utility.js";

// define and exporting for authenticate features function where as send token when user register or login
export const sendUserToken = trycatchWrapper(async (req, res, next) => {
  // declare payload variable of user send token
  const { usersignupId, statusCode, message } = req.tokenPayload;
  const userSignupId = usersignupId._id;
  const access_userToken = accessUserToken(userSignupId);
  const refresh_userToken = refreshUserToken(usersignupId);

  if (!(access_userToken && refresh_userToken)) {
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

// define and exporting for authenticate features function where as send token when user login only with profile _id
export const sendUserTokenAuth = trycatchWrapper(async (req, res, next) => {
  // declare payload variable of user send token auth
  const { usersignupId, userprofileId, statusCode, message } =
    req.tokenPayloadAuth;
  const userSignupId = usersignupId._id;
  const userProfileId = userprofileId._id;
  const access_userToken = accessUserToken(userSignupId);
  const refresh_userToken = refreshUserToken(usersignupId);

  if (!(access_userToken && refresh_userToken)) {
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
      userprofile_id: userProfileId,
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
  let userSignupId = await usersignupId._id;

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

// define and exporting for authenticate features function where as user account remove token
export const removeUserAccount = trycatchWrapper(async (req, res, next) => {
  const { statusCode, message } = req.payloadMsg;

  await Promise.all([
    Promise.resolve(res.clearCookie("access_userToken", cookieOptions)),
    Promise.resolve(res.clearCookie("refresh_userToken", cookieOptions)),
  ]);

  return res.status(statusCode).json({ success: true, msg: message });
});
