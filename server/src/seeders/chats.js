import { io } from "../connections/socketconnection.js";

// here define and export chats namespace functionality
export const chatsContent = async () => {
  // here declare chatNamaespace
  const chatNamespace = io.of("/chat-namespace");

  try {
    // here can chatNamespace connection
    await chatNamespace.on("connection", (socket) => {
      console.log("User connected successfully", socket.id);

      //   here was disconnect chatNamespace
      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
  } catch (error) {
    console.log(error);
  }
};
