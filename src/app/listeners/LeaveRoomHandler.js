const formatMessage = require('../helpers/message');
const {
    getRoomUsers,
    userLeaves,
} = require('../../config/fake_db');
const MessageController = require('../controllers/MessageController');

module.exports = (socket, io) => {
    socket.on('leaveRoom', () => {
        const botName = "ChatApp Bot";
        const user = userLeaves(socket.id);
        if(user) {
            socket.leave(user.roomId);
            let message = formatMessage(botName, `user ${user.userName} has left the room`, user.roomId);
            MessageController.addMessage(message, () => {
                // Broadcast when a user disconnects 
                socket.broadcast.to(user.roomId).emit('message', message)
                // Update room users (sending to all clients in room)
                io.to(user.roomId).emit('roomUsers', getRoomUsers(user.roomId));
            });
        }
    });
}