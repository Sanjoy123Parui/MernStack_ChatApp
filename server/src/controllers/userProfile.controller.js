// Consuming to the importing some modules & lib for userprofile controllers
import { path, cache } from "../config/app.js";
import { userprofileModel } from "../models/userprofile.model.js";
import { usersignupModel } from "../models/usersignup.model.js";
import { badRequestError, notfoundError } from "../utils/utility.js";
import { baseUrlPath, uploadfilesPath } from "../helpers/fileuploads.helper.js";

// here define and exporting for handlle all userprofile controller functions
// declare userprofile fetch all controller function handle
export const userprofilefetchAll = async (req) => {
  const usersignupId = req.user;

  if (!usersignupId) {
    throw badRequestError("No more user access to login");
  } else {
    // declare userprofileInfo caching data variables
    const cacheKey = `userprofileInfo:${usersignupId}`;
    let userprofileInfo = [];

    // check condition for cache data or not
    if (cache.has(cacheKey)) {
      // caching get for all user profile data
      userprofileInfo = JSON.parse(cache.get(cacheKey));
    } else {
      // querying to the retrieve of all user data from database
      userprofileInfo = await userprofileModel
        .find({})
        .populate({ path: "usersignup_id" })
        .exec();
      // caching set for all user profile data
      cache.set(cacheKey, JSON.stringify(userprofileInfo), 300);
    }

    let data = userprofileInfo.map((result) => ({
      userprofile_id: result._id,
      first_name: result.first_name,
      last_name: result.last_name,
      userprofileimage: result.userprofileimage,
      gender: result.gender,
      dob: result.dob,
      abouts: result.abouts,
      usersignup_id: result.usersignup_id._id,
      phone: result.usersignup_id.phone,
      country_name: result.usersignup_id.country_name,
      country_code: result.usersignup_id.country_code,
    }));

    return { userprofileInfo, data };
  }
};

// userprofileView controller function for specific data retrieve
export const userprofileView = async (req) => {
  // declare variables for specific user signup_id
  const usersignupId = req.user;

  if (!usersignupId) {
    throw badRequestError("No more user access to login");
  } else {
    // declare userprofileInfo caching data variables
    const cacheKey = `userprofileInfo:all`;
    let userprofileInfo = [];

    // check condition for cache data or not
    if (cache.has(cacheKey)) {
      // get cache data
      userprofileInfo = JSON.parse(cache.get(cacheKey));
    } else {
      // querying to the retrieve of specific user data from database
      userprofileInfo = await userprofileModel
        .findOne({ usersignup_id: usersignupId })
        .populate({ path: "usersignup_id" })
        .exec();
      // set cache data
      cache.set(cacheKey, JSON.stringify(userprofileInfo), 300);
    }

    let data = {
      userprofile_id: userprofileInfo._id,
      first_name: userprofileInfo.first_name,
      last_name: userprofileInfo.last_name,
      userprofileimage: userprofileInfo.userprofileimage,
      gender: userprofileInfo.gender,
      dob: userprofileInfo.dob,
      abouts: userprofileInfo.abouts,
      usersignup_id: userprofileInfo.usersignup_id._id,
      phone: userprofileInfo.usersignup_id.phone,
      country_name: userprofileInfo.usersignup_id.country_name,
    };

    return { userprofileInfo, data };
  }
};

// userNewprofile controller function handle
export const userNewprofile = async (req) => {
  // declare payload for creating new user profile
  const usersignupId = req.user;
  const { first_name, last_name, gender, dob, abouts } = req.body;
  const filename = req.file.filename;

  // declare variables for destructing baseurl
  const { baseUrl } = await baseUrlPath();

  if (!usersignupId) {
    throw badRequestError("No more user access to login");
  } else {
    // querying to the database for read the specific data
    let userInfo = await userprofileModel
      .findOne({ usersignup_id: usersignupId })
      .exec();

    if (userInfo) {
      throw badRequestError("User are already exist");
    } else {
      // condition check file name select
      if (!filename) throw badRequestError("Avatar image is required");

      // here can joining fullpath for resizing and then ahndle fs also destructiong
      const fullPath = path.join("src/public/uploads", filename);
      const { fileSize } = await uploadfilesPath(fullPath);

      // check condition of fileSize chunks
      if (!fileSize) throw badRequestError("File chunks not set path");

      // declare variables for append file path
      const filePath = baseUrl + "uploads/" + filename;

      // querying for inserted new profile record into the database
      let savedUserProfile = new userprofileModel({
        first_name: first_name,
        last_name: last_name,
        userprofileimage: filePath,
        gender: gender,
        dob: dob,
        abouts: abouts,
        usersignup_id: usersignupId,
      });

      let userProfiledata = await savedUserProfile.save();

      // declare cacheKeys & clear cache data
      const cacheKeys = [
        `userprofileInfo:${usersignupId}`,
        "userprofileInfo:all",
      ];
      cache.del(cacheKeys);

      return { userProfiledata, fileSize };
    }
  }
};

// userprofileChangeImage controller function handle
export const userprofileChangeImage = async (req) => {
  // declare payload for file uploading
  const { userprofile_Id } = req.params;
  const usersignupId = req.user;
  const filename = req.file.filename;

  // destruct baseUrl
  const { baseUrl } = await baseUrlPath();

  // check condition for user signup
  if (!usersignupId) {
    throw badRequestError("No more user access to login");
  } else {
    // check condition for filename
    if (!filename) throw badRequestError("Avatar image is required");

    // here can joining fullpath for resizing and then ahndle fs also destructiong
    const fullPath = path.join("src/public/uploads", filename);
    const { fileSize } = await uploadfilesPath(fullPath);

    // check condition of fileSize chunks
    if (!fileSize) throw badRequestError("File chunks not set path");

    // declare variables for append file path
    const filePath = baseUrl + "uploads/" + filename;

    // query for update profile picture for specific user id into the database
    let profileChangePic = await userprofileModel.updateOne(
      { _id: userprofile_Id },
      {
        $set: { userprofileimage: filePath },
      }
    );

    // declare cacheKeys & clear cache data
    const cacheKeys = [
      `userprofileInfo:${usersignupId}`,
      "userprofileInfo:all",
    ];
    cache.del(cacheKeys);

    return { profileChangePic };
  }
};

// userprofileDelete controller function handle
export const userprofileDelete = async (req) => {
  // declare payload for auth user
  const usersignupId = req.user;

  // check condition for usersignupId
  if (!usersignupId) {
    throw badRequestError("No more user access to login");
  } else {
    // querying for deleted account parallel of authenticate user in database
    await Promise.all([
      usersignupModel.findOneAndDelete({ _id: usersignupId }),
      userprofileModel.findOneAndDelete({ usersignup_id: usersignupId }),
    ]);

    // declare cacheKeys & clear cache data
    const cacheKeys = [
      `userprofileInfo:${usersignupId}`,
      "userprofileInfo:all",
    ];
    cache.del(cacheKeys);

    return true;
  }
};

// userprofileUpdate controller function handle
export const userprofileUpdate = async (req) => {
  // declare payload for data
  const usersignupId = req.user;
  const { userprofile_Id } = req.params;
  const { first_name, last_name, gender, dob, abouts } = req.body;

  // check condition for exist user
  if (!usersignupId) {
    throw badRequestError("No more user access to login");
  } else {
    // querying for update data of specific authenticate user into the database
    let userInfo = await userprofileModel.updateOne(
      { _id: userprofile_Id, usersignup_id: usersignupId },
      {
        $set: {
          first_name: first_name,
          last_name: last_name,
          gender: gender,
          dob: dob,
          abouts: abouts,
        },
      }
    );

    // declare cacheKeys & clear cache data
    const cacheKeys = [
      `userprofileInfo:${usersignupId}`,
      "userprofileInfo:all",
    ];
    cache.del(cacheKeys);

    return { userInfo };
  }
};
