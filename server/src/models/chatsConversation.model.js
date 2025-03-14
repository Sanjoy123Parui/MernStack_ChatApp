import { mongoose } from "../connections/socketconnection.js";

// here was define chatContent model schema
const chatContentSchema = new mongoose.Schema(
  {
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chats",
      required: true,
    },
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

// here was export chatContent model schema
export const chatContentModel = mongoose.model(
  "chatmessages",
  chatContentSchema
);
