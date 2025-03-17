import { mongoose } from "../connections/socketconnection.js";

// here was define chat model schema
const chatSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usersignups",
      required: true,
    },

    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usersignups",
      required: true,
    },

    senderInfo: [
      {
        senderProfileId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "userprofiles",
          required: true,
        },
        senderPhone: {
          type: String,
          unique: true,
          required: true,
        },
        senderName: {
          type: String,
        },
      },
    ],

    recieverInfo: [
      {
        recieverProfileId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "userprofiles",
          required: true,
        },
        recieverPhone: {
          type: String,
          unique: true,
          required: true,
        },
        recieverName: {
          type: String,
        },
      },
    ],

    chatMessageItems: [
      {
        chatMessageId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "chatmessages",
          required: true,
        },
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
