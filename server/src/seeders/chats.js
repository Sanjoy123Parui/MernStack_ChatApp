import { io } from "../connections/socketconnection.js";
import { userSocketIds } from "../connections/socketconnection.js";
// here define and export chats namespace functionality
export const chatsContent = async () => {
  // here declare chatNamaespace
  const chatNamespace = io.of("/chats-namespace");

  try {
    // here can chatNamespace connection
    await chatNamespace.on("connection", (socket) => {
      // here was connectivity od soketIo id with userId
      let userId = "hgvbvbvkscl";
      userSocketIds.set(userId.toString(), socket.id);

      console.log("User connected successfully", userSocketIds);

      // here was one to one chat events
      socket.on("sendChatMsg", (data) => {
        const { msg } = data;
        console.log(msg);
        chatNamespace.emit(msg);
      });

      //   here was disconnect chatNamespace
      socket.on("disconnect", () => {
        userSocketIds.delete(userId.toString());
        console.log("User disconnected", userSocketIds);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
