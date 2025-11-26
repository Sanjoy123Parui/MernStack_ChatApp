// Consuming to the importing some modules & lib for userprofile controllers
import { path, cache } from "../config/app.js";
import { userprofileModel } from "../models/userprofile.model.js";
import { usersignupModel } from "../models/usersignup.model.js";
import { badRequestError, notfoundError } from "../utils/utility.js";
import { baseUrlPath, uploadfilesPath } from "../helpers/fileuploads.helper.js";

// here define and exporting for handlle all userprofile controller functions

// userprofileView controller function for specific data retrieve
export const userprofileView = async (req) => {
  // declare variables for specific user signup_id
  const usersignupId = req.user;

  if (!usersignupId) {
    throw notfoundError("User not found, please login access");
  } else {
    // declare variables for handling caching key and get caching data
    const cacheKey = `usersignupId:${usersignupId}`;
    const cachedData = cache.get(cacheKey);

    // check condition for cahcing data
    if (cachedData) {
      return {
        userprofileInfo: cachedData.userprofileInfo,
        data: cachedData.data,
      };
    } else {
      // querying to the database are retrieve specific data from database
      let userprofileInfo = await userprofileModel
        .findOne({ usersignup_id: usersignupId })
        .populate({ path: "usersignup_id" })
        .exec();

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

      // here will store data in cache
      cache.set(cacheKey, { userprofileInfo, data });
      return { userprofileInfo, data };
    }
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
    throw notfoundError("User not found, please login access");
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

      // clear cache data
      cache.del(`usersignupId:${usersignupId}`);

      return { userProfiledata, fileSize };
    }
  }
};

// userprofileChangeImage controller function handle
export const userprofileChangeImage = async (req) => {
  // declare payload for file uploading
  const { _id } = req.params;
  const usersignupId = req.user;
  const filename = req.file.filename;

  // destruct baseUrl
  const { baseUrl } = await baseUrlPath();

  // check condition for user signup
  if (!usersignupId) {
    throw notfoundError("User not found, please login access");
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
      { _id: _id },
      {
        $set: { userprofileimage: filePath },
      }
    );

    // clear cache data
    cache.del(`usersignupId:${usersignupId}`);

    return { profileChangePic };
  }
};

// userprofileDelete controller function handle
export const userprofileDelete = async (req) => {
  // declare payload for auth user
  const usersignupId = req.user;

  // check condition for usersignupId
  if (!usersignupId) {
    throw notfoundError("User not found, please login access");
  } else {
    // querying for deleted account parallel of authenticate user in database
    await Promise.all([
      usersignupModel.findOneAndDelete({ _id: usersignupId }),
      userprofileModel.findOneAndDelete({ usersignup_id: usersignupId }),
    ]);

    // clear cache data
    cache.del(`usersignupId:${usersignupId}`);

    return true;
  }
};

// userprofileUpdate controller function handle
export const userprofileUpdate = async (req) => {
  // declare payload for data
  const usersignupId = req.user;
  const { _id } = req.params;
  const { first_name, last_name, gender, dob, abouts } = req.body;

  // check condition for exist user
  if (!usersignupId) {
    throw notfoundError("User not found, please login access");
  } else {
    // querying for update data of specific authenticate user into the database
    let userInfo = await userprofileModel.updateOne(
      { _id: _id },
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

    // here also clear cache data
    cache.del(`usersignupId:${usersignupId}`);

    return { userInfo };
  }
};
