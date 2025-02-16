import { mongoose } from "../connections/socketconnection.js";

// create user model schema
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

const userSignupModel = mongoose.model("usersignups", userSignupSchema);

// export user signup Model schema
export { userSignupModel };
