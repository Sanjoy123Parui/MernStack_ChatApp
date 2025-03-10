// here import some libraries
import { io, userSocketIds } from "../connections/socketconnection.js";
import { userSocketAuth } from "../middlewares/socketAuth.middleware.js";
// here import all events
import { sendChat } from "../constants/chats.js";

// here was conversation funtions are define for namespace
export const socketUsers = async () => {
  try {
    // here was define usernamespce
    const usersIo = io.of("/users-namespace");

    // here was declare socket event authentication middleware use
    usersIo.use(userSocketAuth);

    // here define connection of namespace
    await usersIo.on("connection", (socket) => {
      // here was retrive userId
      let userId = socket.user._id;
      // here can set userId with socketId
      userSocketIds.set(userId.toString(), socket.id);
      console.log("User connection successfully", userSocketIds);

      // here was declare all events of socketIo
      sendChat(usersIo, socket);

      // here define disconnect socket of namespace
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
