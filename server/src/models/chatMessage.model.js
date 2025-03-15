import { mongoose } from "../connections/socketconnection.js";

// here was define chatMessage model schema
const chatMessageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userprofiles",
      required: true,
    },
    messages: {
      type: String,
    },
    chatCreatedDate: {
      type: String,
      required: true,
    },
    chatCreatedTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// here was export chatMessage model schema
export const chatMessageModel = mongoose.model(
  "chatmessages",
  chatMessageModel
);
