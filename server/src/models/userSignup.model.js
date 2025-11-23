// Consuming to the importing some modules & lib of here usersignup model schema
import { mongoose } from "../config/app.js";

// define usersignup model schema for mapping table or collections records into the database
const usersignupSchema = new mongoose.Schema(
  {
    email: {
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
