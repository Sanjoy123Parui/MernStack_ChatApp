import { mongoose } from "../connections/socketconnection.js";

// create admin profile model schema
const adminProfileSchema = new mongoose.Schema(
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

    adminSignup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adminsignups",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const adminProfileModel = mongoose.model("adminprofiles", adminProfileSchema);

// export admin profile model schema
export { adminProfileModel };
