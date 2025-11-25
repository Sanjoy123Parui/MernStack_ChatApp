// Consuming to the importing some modules & lib of userprofile model schema
import { mongoose } from "../config/app.js";

// import { mongoose } from "../connections/socketconnection.js";

// create user profile schema model
/* const userProfileSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },

    profile_img: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    dob: {
      type: String,
      required: true,
    },

    abouts: {
      type: String,
      required: true,
    },

    userSignup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usersignups",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
); */

// export userProfile model schema
/* export const userProfileModel = mongoose.model(
  "userprofiles",
  userProfileSchema
); */

// define userprofile model schema for mapping table or collections records into the database
const userprofileSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      require: true,
    },

    last_name: {
      type: String,
      require: true,
    },

    userprofileimage: {
      type: String,
      require: true,
    },

    gender: {
      type: String,
      require: true,
    },

    dob: {
      type: String,
      require: true,
    },

    abouts: {
      type: String,
      require: true,
    },

    usersignup_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usersignups",
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// exporting the userprofile model schema
export const userprofileModel = mongoose.model(
  "userprofiles",
  userprofileSchema
);
