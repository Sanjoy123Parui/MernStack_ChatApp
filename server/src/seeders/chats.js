// here import specific library
import { io, userSocketIds } from "../connections/socketconnection.js";
import { userSocketAuth } from "../middlewares/socketAuth.middleware.js";

// here define and export chats namespace functionality
export const chatsContent = async () => {
  try {
    // declare chat namespace
    const chatNamespace = io.of("/chats-namespace");

    // here was declare socket event authentication middleware use
    chatNamespace.use(userSocketAuth);

    // define connection was io of chatsNamespace
    await chatNamespace.on("connection", (socket) => {
      // here was retrive userId
      let userId = socket.user._id;
      // here can set userId with socketId
      userSocketIds.set(userId.toString(), socket.id);
      console.log("User connection successfully", userSocketIds);

      // here was one to one sender chat event
      socket.on("sendChatMsg", async (data) => {
        try {
          const { messages } = await data;
          // check condition at first for authentication
          if (!userId) {
            socket.emit("sendChatMsg", "Unauthorized user token");
          } else {
            console.log("sendChatMsg", { userId, messages });
            chatNamespace.emit("sendChatMsg", { userId, messages });
          }
        } catch (error) {
          socket.emit("sendChatMsg", error);
        }
      });

      // here was disconnect socket of chatNamespace
      socket.on("disconnect", () => {
        // here remove userId of sockets when disconnect
        userSocketIds.delete(userId.toString());
        console.log("User disconnected", userSocketIds);
      });
    });
  } catch (error) {
    console.log(`Socket error occurred:${error}`);
  }
};
