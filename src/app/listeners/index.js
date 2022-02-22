const joinRoomHandler = require('./JoinRoomHandler');
const leaveRoomHandler = require('./LeaveRoomHandler');
const chatHandler = require('./ChatHandler');
const disconnectHandler = require('./DisconnectHandler');

function ChatListener(io) {
    // Run when client connect 
    io.on('connection', socket => {
        // socket.on('joinRoom', ({ userName, roomId }) => joinRoomHandler(socket, io, { userName, roomId }));

        joinRoomHandler (socket, io);
        leaveRoomHandler(socket, io);
        // Listen for chat message
        chatHandler(socket, io);
        disconnectHandler(socket, io);
    })
}

module.exports = ChatListener;