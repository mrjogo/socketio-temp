const io = require("socket.io-client");

const address = process.env.URL;

// Connect to the server
const socket = io(address);

// Listen for the 'connect' event
socket.on("connect", () => {
  console.log("Connected to server");
});

// Listen for messages from the server
socket.on("message", (data) => {
  console.log("Message from server:", data);
});

// Listen for the 'disconnect' event
socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

console.log("Setup done");
