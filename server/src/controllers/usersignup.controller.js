// Consuming to the importing some module & lib for usersignup controllers
import { jwt, bcryptjs, cache } from "../config/app.js";
import { usersignupModel } from "../models/usersignup.model.js";
import { userprofileModel } from "../models/userprofile.model.js";
import {
  badRequestError,
  notfoundError,
  unauthorizedError,
} from "../utils/utility.js";
import { selectCountryCode } from "../lib/optionconfig.js";

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

  if (!userInfo) throw badRequestError("Invalid country code");

  let userPhone = `${userInfo.dial_code}-${phone}`;

  // querying the specific data of user with phone are find into the database
  let usersignupId = await usersignupModel.findOne({ phone: userPhone }).exec();

  if (!usersignupId) {
    throw badRequestError("Please required the valid phone number");
  } else {
    // password synchronise for comparison of match condition
    let isMatchPassword = bcryptjs.compareSync(password, usersignupId.password);

    if (!isMatchPassword) throw badRequestError("Invalid password");

    // querying for retrive specific particular data for _id from database
    let userprofileId = await userprofileModel
      .findOne({ usersignup_id: usersignupId._id })
      .exec();

    return { usersignupId, userprofileId };
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

  // clear cache data
  cache.del(`usersignupId:${usersignupId}`);

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

    // clear cache data
    cache.del(`usersignupId:${usersignupId}`);

    return { userRefreshToken, usersignupRefreshToken, usersignupId };
  }
};

// usersignupChangePass controller function handle
export const usersignupChangePass = async (req) => {
  // declare varibales for payload in params & body
  const { _id } = req.params;
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
        { _id: _id },
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
