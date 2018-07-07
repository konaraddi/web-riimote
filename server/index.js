const DEBUG_MODE = true;
const PORT = 3000;

const Koa = require("koa");
const socket = require("socket.io");
const http = require("http");
const app = new Koa();

const server = http.createServer(app.callback());
const io = new socket(server);

io.on("connection", function(socket) {

  log(`${socket.id} connected`, DEBUG_MODE);

  const room = getRandomInt(10247, 99999); // TODO assign an unused number instead of this random one

  socket.room = room
  socket.join(room);
  socket.emit("ROOM", room); // Main Display uses this to display its room number
  
  log(`${socket.id} in room ${room}`, DEBUG_MODE);

  // used for the controller to switch to the main display's room
  socket.on('SWITCH_ROOMS', function(data){
    socket.leave(socket.room)
    socket.join(data.new_room)
    socket.room = data.new_room
    log(`${socket.id} switched to ${socket.room}`, DEBUG_MODE)
  })

  // SEND_EULER_ANGLES is emitted by Controller
  socket.on("SEND_EULER_ANGLES", function(data) {
    socket.broadcast.to(data.room).emit("EULER_ANGLES", data.euler_angles);
  });
  // SEND_ACCELERATION is emitted by Controller
  socket.on("SEND_ACCELERATION", function(data) {
    socket.broadcast.to(data.room).emit("ACCELERATION", data.acceleration);
  });

  socket.on("disconnect", function() {
    log(`${socket.id} disconnected`, DEBUG_MODE);
  });
});

server.listen(PORT, () => {
  log(`Server listening on port ${PORT}`, DEBUG_MODE);
});

/**
 * Returns a random number between the min and max (inclusive).
 * @param {Number} min The minimum number
 * @param {Number} max The maximum number
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min)) + min;
}

// logs messages only on debug mode
function log(message, debugMode){
  debugMode ? console.log(message) : null;
}