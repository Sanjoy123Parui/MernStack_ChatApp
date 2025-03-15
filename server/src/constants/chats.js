// here was define an export sendChat of users onetoone chat conversation event function
export const sendChat = (userId, usersIo, socket) =>
  socket.on("sendChatMsg", async (data) => {
    try {
      // here was delare data of socket.io events payload
      const sender = userId;
      const { messages } = data;

      await { messages };
      console.log(sender);
      usersIo.emit("sendChatMsg", { messages });
    } catch (error) {
      socket.emit("sendChatMsg", {
        error: `SocketIo events error occured:${error}`,
      });
    }
  });
