import { mongoose } from "../connections/socketconnection.js";

// here was define chat model schema
const chatSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userprofiles",
      required: true,
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userprofiles",
      required: true,
    },
    chatMessageId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "chatmessages",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// here export chat model schema
export const chatModel = mongoose.model("chats", chatSchema);
