import { cache } from "../connections/socketconnection.js";
import { adminProfileModel } from "../models/adminProfile.model.js";
import { asyncHandler } from "../helpers/try-catch.helper.js";
import { errorHandler } from "../utils/utility.js";
import { uploadFiles } from "../helpers/fileuploads.helper.js";

// there are define all admin profile controllers here

// admin profile create controller
const adminNewprofile = asyncHandler(async (req, res, next) => {
  // there are declare adminSignup variables
  let adminSignup;

  // here can check condition for cache data of admin
  if (cache.has("adminSignup")) {
    adminSignup = JSON.parse(cache.get("adminSignup"));
  } else {
    adminSignup = req.admin;
    cache.set("adminSignup", JSON.stringify(adminSignup), 300);
  }

  // there are declare payloads
  let { full_name, gender, dob, abouts } = req.body;
  // let filePath = req.file.path;
  let filePath = req.file.filename;

  if (!adminSignup) {
    return next(errorHandler("Please Login to access admin", 400));
  } else {
    // this data are find or not check

    let adminInfo = await adminProfileModel.findOne({ adminSignup }).exec();

    // check the condition from this admin are exist or not
    if (adminInfo) {
      return next(errorHandler("Admin already exist", 400));
    } else {
      // check file path of admin
      if (!filePath) {
        return next(errorHandler("File is required", 404));
      } else {
        // there will be uploads admin preofile images with cloudinary and multer
        // let uploads = await uploadFiles(filePath);

        // there upload file in localserver
        let uploads = await uploadFiles();

        if (!uploads) {
          return next(errorHandler("File are not uploaded", 404));
        } else {
          // there are data can be create and save into the database
          let adminProfiledata = await adminProfileModel.create({
            adminSignup,
            full_name,
            // admin_profileimg: uploads.secure_url,
            profile_img: uploads + "uploads/" + filePath,
            gender,
            dob,
            abouts,
          });

          // declare delete cache key admin
          let userId, page, limit;
          const admincacheKey = [
            "existAdmin",
            `profileData_page_${page}_limit_${limit}`,
            `userProfiledetails_${userId}`,
            `contactList_page_${page}_limit_${limit}`,
            `userContact_userId_${userId}_page_${page}_limit_${limit}`,
          ];
          cache.del(admincacheKey);

          if (!adminProfiledata) {
            return next(errorHandler("Profile can not inserted"));
          } else {
            return res
              .status(201)
              .send({ msg: "Your profile was created successfully" });
          }
        }
      }
    }
  }
});

// there admin own profile read
const adminViewprofile = asyncHandler(async (req, res, next) => {
  // there are declare adminSignup variables
  let adminSignup;

  // here can check condition for cache data of admin
  if (cache.has("adminSignup")) {
    adminSignup = JSON.parse(cache.get("adminSignup"));
  } else {
    adminSignup = req.admin;
    cache.set("adminSignup", JSON.stringify(adminSignup), 300);
  }

  // check condition for admin can be access or not
  if (!adminSignup) {
    return next(errorHandler("Please Login to access admin", 400));
  } else {
    // here declare existAdmin profile data variables
    let existAdmin;

    // here can check condition of admin cache data
    if (cache.has("existAdmin")) {
      existAdmin = JSON.parse(cache.get("existAdmin"));
    } else {
      // there can check find the data into the database
      existAdmin = await adminProfileModel
        .findOne({ adminSignup })
        .populate({
          path: "adminSignup",
        })
        .exec();

      cache.set("existAdmin", JSON.stringify(existAdmin), 300);
    }

    // there was check existAdmin
    if (!existAdmin) {
      return next(errorHandler("Admin data are not found"));
    } else {
      return res.status(200).json({
        data: {
          adminProfileId: existAdmin._id,
          full_name: existAdmin.full_name,
          profile_img: existAdmin.profile_image,
          gender: existAdmin.gender,
          dob: existAdmin.dob,
          abouts: existAdmin.abouts,
          phone: existAdmin.adminSignup.phone,
        },
      });
    }
  }
});

// admin profile image data update controller
const adminProfileImageupdate = asyncHandler(async (req, res, next) => {
  // declare adminSignup variables
  let adminSignup;

  // check condition of cache data
  if (cache.has("adminSignup")) {
    adminSignup = JSON.parse(cache.get("adminSignup"));
  } else {
    adminSignup = req.admin;
    cache.set("adminSignup", JSON.stringify(adminSignup), 300);
  }

  // there declare payload
  let { adminProfileId } = req.params;
  // let filePath = req.file.path;
  let filePath = req.file.filename;

  // check condition for admin access
  if (!adminSignup) {
    return next(errorHandler("Please Login to access admin", 400));
  } else {
    // there are declare existadmin data
    let existAdmin = await adminProfileModel.findById(adminProfileId).exec();

    if (!existAdmin) {
      return next(errorHandler("Admin are not found", 404));
    } else {
      // check filepath
      if (!filePath) {
        return next(errorHandler("File ar not required", 400));
      } else {
        // there upload admin profile image with coludinary and multer filepath
        // let uploads = await uploadFiles(filePath);

        // there upload file in localserver
        let uploads = await uploadFiles();

        // check condition
        if (!uploads) {
          return next(errorHandler("File can not uploaded", 400));
        } else {
          let adminProdfiledata = await adminProfileModel.updateOne(
            {
              _id: adminProfileId,
            },
            {
              // admin_profileimg: uploads.secure_url
              profile_img: uploads + "uploads/" + filePath,
            }
          );

          // declare delete cache key admin
          let userId, page, limit;
          const admincacheKey = [
            "existAdmin",
            `profileData_page_${page}_limit_${limit}`,
            `userProfiledetails_${userId}`,
            `contactList_page_${page}_limit_${limit}`,
            `userContact_userId_${userId}_page_${page}_limit_${limit}`,
          ];
          cache.del(admincacheKey);

          if (!adminProdfiledata.acknowledged) {
            return next(errorHandler("Profile picture can't changed"));
          } else {
            return res
              .status(200)
              .json({ msg: "Your profile picture are changed successfully" });
          }
        }
      }
    }
  }
});

// admin profile delete controller
const adminProfiledelete = asyncHandler(async (req, res, next) => {
  // here declare adminSignup variables
  let adminSignup;

  // check condition of cache key in adminSignup key
  if (cache.has("adminSignup")) {
    adminSignup = JSON.parse(cache.get("adminSignup"));
  } else {
    adminSignup = req.admin;
    cache.set("adminSignup", JSON.stringify(adminSignup), 300);
  }

  // here can check condition for  adminSignup
  if (!adminSignup) {
    return next(errorHandler("Please login to access admin", 400));
  } else {
    // declare query from delete admin profile into the database
    let existAdminProfile = await adminProfileModel.deleteOne({ adminSignup });

    // declare delete cache key admin
    let userId, page, limit;
    const admincacheKey = [
      "existAdmin",
      `profileData_page_${page}_limit_${limit}`,
      `userProfiledetails_${userId}`,
      `contactList_page_${page}_limit_${limit}`,
      `userContact_userId_${userId}_page_${page}_limit_${limit}`,
    ];
    cache.del(admincacheKey);

    //  here can check condition profile data was delete or not
    if (!existAdminProfile.deletedCount) {
      return next(errorHandler("Profile not found", 404));
    } else {
      return res.status(200).json({ msg: "Profile are deleted successfully" });
    }
  }
});

// admin profile update cotroller
const adminProfileupdate = asyncHandler(async (req, res, next) => {
  // check condition for request
  if (req.method === "PUT" || req.method === "PATCH") {
    // declare adminSignup varibles
    let adminSignup;

    // check adminSignup of cache
    if (cache.has("adminSignup")) {
      adminSignup = JSON.parse(cache.get("adminSignup"));
    } else {
      adminSignup = req.admin;
      cache.set("adminSignup", JSON.stringify(adminSignup), 300);
    }

    // there are declare payload
    let { adminProfileId } = req.params;
    let { full_name, gender, dob, abouts } = req.body;

    // here check condition for admin can be access
    if (!adminSignup) {
      return next(errorHandler("Please Login to access admin", 400));
    } else {
      // existAdmin for are found or not
      let existAdmin = await adminProfileModel.findById(adminProfileId).exec();

      if (!existAdmin) {
        return next(errorHandler("Admin are not found", 404));
      } else {
        // there update admin profile data into the database
        let adminProfiledata = await adminProfileModel.updateOne(
          {
            _id: adminProfileId,
          },
          {
            $set: {
              full_name,
              gender,
              dob,
              abouts,
            },
          }
        );

        // declare delete cache key admin
        let userId, page, limit;
        const admincacheKey = [
          "existAdmin",
          `profileData_page_${page}_limit_${limit}`,
          `userProfiledetails_${userId}`,
          `contactList_page_${page}_limit_${limit}`,
          `userContact_userId_${userId}_page_${page}_limit_${limit}`,
        ];
        cache.del(admincacheKey);

        // here can check condition for update admin prfile
        if (!adminProfiledata.matchedCount && adminProfiledata.modifiedCount) {
          return next(errorHandler("Your profile are not updated"));
        } else {
          return res
            .status(200)
            .json({ msg: "Your profile has been updated successfully" });
        }
      }
    }
  } else {
    return next(errorHandler("Wrong Cridential", 400));
  }
});

// export there admin profile all controllers operation
export {
  adminNewprofile,
  adminViewprofile,
  adminProfileImageupdate,
  adminProfiledelete,
  adminProfileupdate,
};
