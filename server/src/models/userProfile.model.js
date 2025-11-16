import { mongoose } from "../config/app.js";

// create user profile schema model
const userProfileSchema = new mongoose.Schema(
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
);

// export userProfile model schema
export const userProfileModel = mongoose.model(
  "userprofiles",
  userProfileSchema
);
