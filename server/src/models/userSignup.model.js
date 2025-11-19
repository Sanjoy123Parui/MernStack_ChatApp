// Consuming to the importing some modules & lib of here usersignup model schema
import { mongoose } from "../config/app.js";

// import { mongoose } from "../connections/socketconnection.js";
// create userSignup model schema
/* const userSignupSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    refresh_userToken: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
); */
// export userSignup model schema
/* export const userSignupModel = mongoose.model("usersignups", userSignupSchema); */

// define usersignup model schema for mapping table or collections records into the database
const usersignupSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    refresh_userToken: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// exporting usersignup model schema
export const usersignupModel = mongoose.model("usersignups", usersignupSchema);
