// Consuming to the import lib of database ORM technique
import { mongoose } from "../config/app.js";

// define user signup schema model
const usersignupSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      unique: true,
      require: true,
    },
    refresh_usertoken: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// exporting to the usersignup schema model
export const usersignupModel = mongoose.model("usersignups", usersignupSchema);
