const { Server } = require("socket.io");

const io = new Server();

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

io.listen(parseInt(process.env.PORT));
console.log(`Listening on port ${process.env.PORT}`);
