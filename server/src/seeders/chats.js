import { io } from "../connections/socketconnection.js";

// here was define namespace for chat
const chatNamespace = io.of("/chat-namespace");

// here was connect chat with namespace
chatNamespace.on("connection", (socket) => {
  console.log("User connected successfully");

  // disconnect chat user
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// export chatNamespace
export { chatNamespace };
