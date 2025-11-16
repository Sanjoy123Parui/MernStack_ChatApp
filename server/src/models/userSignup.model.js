import { mongoose } from "../config/app.js";

// create userSignup model schema
const userSignupSchema = new mongoose.Schema(
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
);

// export userSignup model schema
export const userSignupModel = mongoose.model("usersignups", userSignupSchema);
