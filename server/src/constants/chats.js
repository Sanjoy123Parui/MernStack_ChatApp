import { cache } from "../connections/socketconnection.js";
import { userProfileModel } from "../models/userProfile.model.js";
import { chatMessageModel } from "../models/chatMessage.model.js";
import { chatModel } from "../models/chats.model.js";
import { getCurrentDate, getCurrentTime } from "../lib/optionconfig.js";

// here was define an export sendChat of users onetoone chat conversation event function
export const sendChat = (userId, socket) =>
  socket.on("sendChatMsg", async (data) => {
    try {
      // here was declare userSignupId for cache
      let userSignup;

      // here can check id can be stor in cache memory
      if (cache.has("userSignup")) {
        userSignup = JSON.parse(cache.get("userSignup"));
      } else {
        userSignup = userId;
        cache.set("userSignup", JSON.stringify(userSignup));
      }

      // here can check the condition from login to userId access
      if (!userSignup) {
        socket.emit("sendChatMsg", { message: "Please login to access user" });
      } else {
        // here declare variables of data
        const sender = userSignup;
        const { reciever, messages, recieverPhone, recieverName } = data;
        const senderName = "You";

        // here was retrieve senderInfo data list from database
        const senderList = await userProfileModel
          .findOne({ userSignup: sender })
          .populate({ path: "userSignup" })
          .exec();

        // here was retrieve recieverInfo data from database
        const recieverList = await userProfileModel
          .findOne({ userSignup: reciever })
          .populate({ path: "userSignup" })
          .exec();

        // here create one-to-one chatMessage data create into the database
        const realChatMsg = {
          sender: sender,
          messages: messages,
          chatCreatedDate: getCurrentDate(),
          chatCreatedTime: getCurrentTime(),
        };

        const chatMessage = await chatMessageModel.create({
          sender: sender,
          senderInfo: [
            {
              senderProfileId: senderList._id,
              senderPhone: senderList.userSignup.phone,
              senderName: senderName,
            },
          ],
          messages: messages,
          chatCreatedDate: getCurrentDate(),
          chatCreatedTime: getCurrentTime(),
        });

        let chatMessageId = chatMessage._id;

        // here was declare data was check and retrive to th database
        let chat = await chatModel.findOne({ sender, reciever }).exec();

        // here can check condition for chat data
        if (!chat) {
          // here was create chat into the database
          chat = new chatModel({
            sender: sender,
            reciever: reciever,
            senderInfo: [
              {
                senderProfileId: senderList._id,
                senderPhone: senderList.userSignup.phone,
                senderName: senderName,
              },
            ],
            recieverInfo: [
              {
                recieverProfileId: recieverList._id,
                recieverPhone: recieverPhone,
                recieverName: recieverName,
              },
            ],
            chatMessageItems: [{ chatMessageId: chatMessageId }],
          });

          // here was insert chat data
          await chat.save();
        } else {
          // here was new message create into the chatModel of database
          chat = await chatModel.updateOne(
            {
              sender: sender,
              reciever: reciever,
              senderInfo: [
                {
                  senderProfileId: senderList._id,
                  senderPhone: senderList.userSignup.phone,
                  senderName: senderName,
                },
              ],
              recieverInfo: [
                {
                  recieverProfileId: recieverList._id,
                  recieverPhone: recieverPhone,
                  recieverName: recieverName,
                },
              ],
            },
            { $push: { chatMessageItems: [{ chatMessageId: chatMessageId }] } }
          );
        }

        socket.to(reciever).emit("sendChatMsg", { realChatMsg });
      }
    } catch (error) {
      socket.emit("sendChatMsg", {
        error: `SocketIo events error occured:${error}`,
      });
    }
  });
