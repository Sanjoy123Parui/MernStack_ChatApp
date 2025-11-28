// Consuming to the importing some modules & lib of userprofile model schema
import { mongoose } from "../config/app.js";

// define userprofile model schema for mapping table or collections records of database
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
