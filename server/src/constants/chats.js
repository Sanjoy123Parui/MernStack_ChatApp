// here was define an export sendChat of users onetoone chat conversation event function
export const sendChat = (usersIo, socket) =>
  socket.on("sendChatMsg", async (data) => {
    try {
      const { messages } = data;

      await { messages };
      //   console.log("sendChatMsg", { messages });
      usersIo.emit("sendChatMsg", { messages });
    } catch (error) {
      socket.emit("sendChatMsg", {
        error: `SocketIo events error occured:${error}`,
      });
    }
  });
