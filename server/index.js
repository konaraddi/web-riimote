const PORT = 3000;

const Koa = require("koa");
const socket = require("socket.io");
const http = require("http");
const app = new Koa();

const server = http.createServer(app.callback());
const io = new socket(server);

io.on("connection", function(socket) {
  console.log(`${socket.id} connected`);

  const room = getRandomInt(1024, 9999); // TODO assign an unused number

  socket.join(room);
  console.log(`${socket.id} in room ${room}`);
  socket.emit("ROOM", room);

  // SEND_EULER_ANGLES is emitted by Controller
  socket.on("SEND_EULER_ANGLES", function(data) {
    socket.broadcast.to(data.room).emit("EULER_ANGLES", data.euler_angles);
  });
  // SEND_ACCELERATION is emitted by Controller
  socket.on("SEND_ACCELERATION", function(data) {
    socket.broadcast.to(data.room).emit("ACCELERATION", data.acceleration);
  });

  socket.on("disconnect", function() {
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

/**
 * Returns a random number between the min and max (inclusive).
 * @param {Number} min The minimum number
 * @param {Number} max The maximum number
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min)) + min;
}
