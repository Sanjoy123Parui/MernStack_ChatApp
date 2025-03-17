import { userProfileModel } from "../models/userProfile.model.js";
import { getCurrentDate, getCurrentTime } from "../lib/optionconfig.js";

// here was define an export sendChat of users onetoone chat conversation event function
export const sendChat = (userId, socket) =>
  socket.on("sendChatMsg", async (data) => {
    try {
      // here declare variables of data
      const sender = userId;
      const { reciever, messages } = data;
      const senderName = "You";

      // here was retrieve senderInfo data from database
      const senderInfo = await userProfileModel
        .findOne({ userSignup: sender })
        .populate({ path: "userSignup" })
        .exec();

      // here create one-to-one chatMessage data create into the database
      const chatMessage = await {
        sender: sender,
        senderProfileId: senderInfo._id,
        senderPhone: senderInfo.userSignup.phone,
        senderName: senderName,
        messages: messages,
        chatCreatedDate: getCurrentDate(),
        chatCreatedTime: getCurrentTime(),
      };

      console.log({ chatMessage, reciever });

      socket.emit("sendChatMsg", { chatMessage });
    } catch (error) {
      socket.emit("sendChatMsg", {
        error: `SocketIo events error occured:${error}`,
      });
    }
  });
