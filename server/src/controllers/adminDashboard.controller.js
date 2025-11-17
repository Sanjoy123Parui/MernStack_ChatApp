import { cache } from "../connections/socketconnection.js";
import { asyncHandler } from "../helpers/try-catch.helper.js";
import { errorHandler } from "../utils/utility.js";
import { userSignupModel } from "../models/userSignup.model.js";
import { userProfileModel } from "../models/userProfile.model.js";
import { contactModel } from "../models/contact.model.js";

// here was define all admin-dashboard data controller functions

// userProfile data

// here was retrieve all the profile data controller functionality
export const userAllProfile = asyncHandler(async (req, res, next) => {
  // here declare variables
  let adminSignup, profileData, data;

  // check conditon of adminSignup cache data
  if (cache.has("adminSignup")) {
    adminSignup = JSON.parse(cache.get("adminSignup"));
  } else {
    adminSignup = req.admin;
    cache.set("adminSignup", JSON.stringify(adminSignup), 300);
  }

  // check condition of adminSignup
  if (!adminSignup) {
    return next(errorHandler("Please login to access admin", 400));
  } else {
    // here was specified pagination
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1) * limit;

    // here was declare totalPages
    let total = await userSignupModel.countDocuments();
    let totalPages = Math.ceil(total / limit);

    // check condtion for cache
    if (cache.has(`profileData_page_${page}_limit_${limit}`)) {
      data = JSON.parse(cache.get(`profileData_page_${page}_limit_${limit}`));
    } else {
      // here was fetch userProfile model data from database
      profileData = await userProfileModel
        .find({})
        .populate({
          path: "userSignup",
        })
        .skip(skip)
        .limit(limit)
        .exec();

      // here was map of userProfiledata
      let result = await profileData.map((profile) => ({
        userProfileId: profile._id,
        profile_img: profile.profile_img,
        full_name: profile.full_name,
        phone: profile.userSignup.phone,
      }));

      data = { result, page, totalPages };
      cache.set(
        `profileData_page_${page}_limit_${limit}`,
        JSON.stringify(data),
        300
      );
    }

    return res.status(200).json({
      data: data.result,
      currentPage: data.page,
      totalPages: data.totalPages,
    });
  }
});

// here was retrieve the profile details controller functionality
export const userProfiledetails = asyncHandler(async (req, res, next) => {
  // here was declare adminSignup and userProfile full details variables
  let adminSignup, userProfiledetails;

  // here declare payload of params
  let { userId } = req.params;

  // check cache of adminSignup
  if (cache.has("adminSignup")) {
    adminSignup = JSON.parse(cache.get("adminSignup"));
  } else {
    adminSignup = req.admin;
    cache.set("adminSignup", JSON.stringify(adminSignup), 300);
  }

  // check condition of adminSignup
  if (!adminSignup) {
    return next(errorHandler("Please login to access admin", 400));
  } else {
    // here can check cache data
    if (cache.has(`userProfiledetails_${userId}`)) {
      userProfiledetails = JSON.parse(
        cache.get(`userProfiledetails_${userId}`)
      );
    } else {
      // retrieve the data from database to the cache
      userProfiledetails = await userProfileModel
        .findById(userId)
        .populate({
          path: "userSignup",
        })
        .exec();

      cache.set(
        `userProfiledetails_${userId}`,
        JSON.stringify(userProfiledetails),
        300
      );
    }

    return res.status(200).json({
      data: {
        userProfileId: userProfiledetails._id,
        full_name: userProfiledetails.full_name,
        profile_img: userProfiledetails.profile_img,
        gender: userProfiledetails.gender,
        dob: userProfiledetails.dob,
        abouts: userProfiledetails.abouts,
        phone: userProfiledetails.userSignup.phone,
      },
    });
  }
});

// here was fetch of search profile data from users controller functionality
export const userProfileSearch = asyncHandler(async (req, res, next) => {
  // declare variables
  let adminSignup;

  // here can check cache of adminSignup
  if (cache.has("adminSignup")) {
    adminSignup = JSON.parse(cache.get("adminSignup"));
  } else {
    adminSignup = req.admin;
    cache.set("adminSignup", JSON.stringify(adminSignup), 300);
  }

  // here was declare payload
  let { full_name, dob } = req.body;

  // check admin
  if (!adminSignup) {
    return next(errorHandler("Please login to access admin", 400));
  } else {
    // check payload
    if (!(full_name || dob)) {
      return next(errorHandler("Please give some required data", 400));
    } else {
      // here was retrieve search data of userProfile from database
      let searchProfile = await userProfileModel
        .find({
          $or: [{ full_name: full_name }, { dob: dob }],
        })
        .populate({ path: "userSignup" })
        .exec();

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

      // here was map of search profile data
      let data = await searchProfile.map((search) => {
        return {
          userProfileId: search._id,
          profile_img: search.profile_img,
          full_name: search.full_name,
          phone: search.userSignup.phone,
        };
      });

      return res.status(200).json({ data });
    }
  }
});

// contact data

// here was define to fetch all contacts controller functionality
export const userContactLists = asyncHandler(async (req, res, next) => {
  // here was declare variables
  let adminSignup, contactList, data;

  // here check condition of adminSignup cache
  if (cache.has("adminSignup")) {
    adminSignup = JSON.parse(cache.get("adminSignup"));
  } else {
    adminSignup = req.admin;
    cache.set("adminSignup", JSON.stringify(adminSignup), 300);
  }

  // check admin
  if (!adminSignup) {
    return next(errorHandler("Please login to access admin", 400));
  } else {
    // here was specified pagination
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1) * limit;

    // here was declare totalPages
    let total = await userSignupModel.countDocuments();
    let totalPages = Math.ceil(total / limit);

    // check condition of cache
    if (cache.has(`contactList_page_${page}_limit_${limit}`)) {
      data = JSON.parse(cache.get(`contactList_page_${page}_limit_${limit}`));
    } else {
      // here was retrive the all contacts data in contactModel where who was contact in another person from database
      contactList = await contactModel
        .find({})
        .populate([
          { path: "userProfile", populate: { path: "userSignup" } },
          { path: "contactProfile", populate: { path: "userSignup" } },
        ])
        .skip(skip)
        .limit(limit)
        .exec();

      // here was map for contact data
      let result = await contactList.map((contact) => {
        return {
          contactId: contact._id,
          userimg: contact.userProfile.profile_img,
          username: contact.userProfile.full_name,
          userphone: contact.userProfile.userSignup.phone,
          contactimg: contact.contactProfile.profile_img,
          contactname: contact.contactProfile.full_name,
          contactphone: contact.contactProfile.userSignup.phone,
          savename: contact.contact_name,
          savephone: contact.contact_phone,
          userProfile: contact.userProfile._id,
          contactProfile: contact.contactProfile._id,
        };
      });

      data = { result, page, totalPages };

      cache.set(
        `contactList_page_${page}_limit_${limit}`,
        JSON.stringify(data),
        300
      );
    }

    return res.status(200).json({
      data: data.result,
      currentPage: data.page,
      totalPages: data.totalPages,
    });
  }
});

// here was define to fetch particular user contacts controller functionality
export const particularContact = asyncHandler(async (req, res, next) => {
  // here declare variables
  let adminSignup, userContact, data;

  // ccheck  condition of cache data
  if (cache.has("adminSignup")) {
    adminSignup = JSON.parse(cache.get("adminSignup"));
  } else {
    adminSignup = req.admin;
    cache.set("adminSignup", JSON.stringify(adminSignup), 300);
  }

  // declare payload of params
  let { userId } = req.params;

  // check condition for admin
  if (!adminSignup) {
    return next(errorHandler("Please login to access admin", 400));
  } else {
    // here was specified pagination
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1) * limit;

    // here was declare totalPages
    let total = await userSignupModel.countDocuments();
    let totalPages = Math.ceil(total / limit);

    // check condition of cache how many contact connect which data fetch
    if (cache.has(`userContact_userId_${userId}_page_${page}_limit_${limit}`)) {
      data = JSON.parse(
        cache.get(`userContact_userId_${userId}_page_${page}_limit_${limit}`)
      );
    } else {
      // here was declare how many contact are save in thos user in contacModel from database
      userContact = await contactModel
        .find({ userProfile: userId })
        .populate([
          { path: "userProfile", populate: { path: "userSignup" } },
          { path: "contactProfile", populate: { path: "userSignup" } },
        ])
        .skip(skip)
        .limit(limit);

      // here was particular contact data map
      let result = await userContact.map((contact) => {
        return {
          contactId: contact._id,
          contactimg: contact.contactProfile.profile_img,
          contacphone: contact.contact_phone,
          contactname: contact.contact_name,
          userProfile: contact.userProfile._id,
          contactProfile: contact.contactProfile._id,
        };
      });

      data = { result, page, totalPages };
      cache.set(
        `userContact_userId_${userId}_page_${page}_limit_${limit}`,
        JSON.stringify(data),
        300
      );
    }

    return res.status(200).json({
      data: data.result,
      currentPage: data.page,
      totalPages: data.totalPages,
    });
  }
});
