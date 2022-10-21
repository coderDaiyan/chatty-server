const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Socket: ", socket.id);

  socket.on("chat", (payload) => {
    console.log("Payload: ", payload);
    io.emit("chat", payload);
  });
});

httpServer.listen(8080, () => {
  console.log("Listening at Port 8080");
});
