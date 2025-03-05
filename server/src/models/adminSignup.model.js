import { mongoose } from "../connections/socketconnection.js";

// create there admin signup model schema
const adminSignupSchema = new mongoose.Schema(
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

    refresh_adminToken: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// export adminSignup model schema
export const adminSignupModel = mongoose.model(
  "adminsignups",
  adminSignupSchema
);
