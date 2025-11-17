import { mongoose } from "../connections/socketconnection.js";

// here are define contact model schema
const contactSchema = new mongoose.Schema(
  {
    contact_phone: {
      type: String,
      unique: true,
      required: true,
    },

    contact_name: {
      type: String,
      required: true,
    },

    contactProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userprofiles",
      required: true,
    },

    userProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userprofiles",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// export contact model schema
export const contactModel = mongoose.model("contacts", contactSchema);
