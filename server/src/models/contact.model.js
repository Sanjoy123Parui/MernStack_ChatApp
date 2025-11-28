// Consuming to the importing some modules & lib of contact model schema
import { mongoose } from "../config/app.js";

// define cotact model schema for mapping tables or collections into the database
const contactSchema = new mongoose.Schema(
  {
    contact_username: {
      type: String,
      require: true,
    },

    contact_userphone: {
      type: String,
      unique: true,
      require: true,
    },

    contact_countrycode: {
      type: String,
      require: true,
    },

    contact_countryname: {
      type: String,
      require: true,
    },

    contact_userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userprofiles",
      require: true,
    },

    user_id: {
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

// exporting contact model schema
export const contactModel = mongoose.model("contacts", contactSchema);
