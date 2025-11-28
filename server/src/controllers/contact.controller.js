// Consuming to the importing some modules & lib of contact controller
import { cache, path } from "../config/app.js";
import { badRequestError, notfoundError } from "../utils/utility.js";
import { contactModel } from "../models/contact.model.js";
import { userprofileModel } from "../models/userprofile.model.js";
import { usersignupModel } from "../models/usersignup.model.js";
import { selectCountryCode } from "../lib/optionconfig.js";

// here define & exporting of all contact controller functions handle
// here define for handle contactViewAll controller function
export const contactList = async (req) => {
  const usersignupId = req.user;

  if (!usersignupId) {
    throw badRequestError("No more user access to login");
  } else {
    // declare variables for handle caching
    const cacheKey = "contactlistview:contactall";
    let contactInfo = [];

    // check condition for cache data
    if (cache.has(cacheKey)) {
      // here was get caching data
      contactInfo = JSON.parse(cache.get(cacheKey));
    } else {
      // querying data for retrieve contact list from contact model into the database
      contactInfo = await contactModel
        .find({ user_id: usersignupId })
        .populate([{ path: "contact_userid" }, { path: "user_id" }])
        .exec();
      // here was set cache data from database
      cache.set(cacheKey, JSON.stringify(contactInfo), 300);
    }

    let data = contactInfo.map((result) => ({
      contact_id: result._id,
      contact_userphone: result.contact_userphone,
      contact_username: result.contact_username,
      contact_userid: result.contact_userid._id,
      contact_image: result.contact_userid.userprofileimage,
      user_id: result.user_id._id,
      user_phone: result.user_id.phone,
    }));

    return { data };
  }
};

// here define for handle contact view profile for specific user controller function
export const contactProfile = async (req) => {
  // here declare payload for params
  const usersignupId = req.user;
  const { contact_id } = req.params;

  if (!usersignupId) {
    throw badRequestError("No more user access to login");
  } else {
    // declare for handle caching variables of data
    const cacheKey = `contactprofile:${usersignupId}`;
    let contactInfo = [];

    if (cache.has(cacheKey)) {
      // here was get cache data
      contactInfo = JSON.parse(cache.get(cacheKey));
    } else {
      // querying for retrieving contact specific profile data from contact model into the database
      contactInfo = await contactModel
        .findOne({ _id: contact_id })
        .populate([
          {
            path: "contact_userid",
            populate: {
              path: "usersignup_id",
            },
          },
          { path: "user_id" },
        ])
        .exec();

      // here was caching data set from database into the cache
      cache.set(cacheKey, JSON.stringify(contactInfo), 300);
    }

    let data = {
      contact_id: contactInfo._id,
      contact_username: contactInfo.contact_username,
      contact_userphone: contactInfo.contact_userphone,
      contact_countrycode: contactInfo.contact_countrycode,
      contact_countryname: contactInfo.contact_countryname,
      contact_userid: contactInfo.contact_userid._id,
      contact_image: contactInfo.contact_userid.userprofileimage,
      contact_gender: contactInfo.contact_userid.gender,
      contact_dob: contactInfo.contact_userid.dob,
      contact_abouts: contactInfo.contact_userid.abouts,
      user_id: contactInfo.user_id._id,
      user_phone: contactInfo.user_id.phone,
    };

    return { data };
  }
};

// here define for handle contactSave controller function
export const contactSave = async (req) => {
  // declare variables of payload
  const usersignupId = req.user;
  const { contact_username, contact_userphone, contact_countrycode } = req.body;
  // here destruct select country handle function
  const { countryLists } = selectCountryCode();

  if (!usersignupId) {
    throw badRequestError("No more user access to login");
  } else {
    // check the exist country data with methods
    let conutryInfo = countryLists.find(
      (country) => country.iso === contact_countrycode
    );

    // check condition for country
    if (!conutryInfo) throw badRequestError("Invalid country");

    // declare variables for userPhone contact with country dial
    const userPhone = `${conutryInfo.dial_code}-${contact_userphone}`;

    // querying for retrieve contact user specific _id data from usersignup model
    // into the database
    let userInfo = await usersignupModel
      .findOne({
        phone: userPhone,
        country_code: contact_countrycode,
      })
      .exec();

    if (!userInfo) throw notfoundError("No more user has found");

    // querying for retrieve contact user specific _id data from userprofile model
    // into the database
    let existUser = await userprofileModel
      .findOne({ usersignup_id: userInfo._id })
      .populate({ path: "usersignup_id" })
      .exec();

    if (!existUser) throw badRequestError("User are not exist");

    // here querying for existing contact data are find or not
    let existContact = await contactModel
      .findOne({ contact_userphone: userPhone })
      .populate([
        {
          path: "contact_userid",
          populate: {
            path: "usersignup_id",
          },
        },
        {
          path: "user_id",
        },
      ]);

    if (existContact) {
      throw badRequestError("Contact has already exist");
    } else {
      // querying for inserted new record and save of contact model into
      // the database
      let userSavedata = new contactModel({
        contact_username: contact_username,
        contact_userphone: userInfo.phone,
        contact_countrycode: userInfo.country_code,
        contact_countryname: userInfo.country_name,
        contact_userid: existUser._id,
        user_id: usersignupId,
      });

      let addContact = await userSavedata.save();

      // here declare caching clear
      const cacheKeys = [
        `userprofileInfo:${usersignupId}`,
        "userprofileInfoAll:all",
        "contactlistview:contactall",
        `contactprofile:${usersignupId}`,
      ];
      cache.del(cacheKeys);

      return { addContact };
    }
  }
};

// here define for handle contactRemove controller function
export const contactRemove = async (req) => {};

// here define for handle contactEdit controller function
export const contactEdit = async (req) => {};
