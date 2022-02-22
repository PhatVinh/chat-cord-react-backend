const formatMessage = require('../helpers/message');
const {
    getRoomUsers,
    userLeaves,
} = require('../../config/fake_db');
const MessageController = require('../controllers/MessageController');

module.exports = (socket, io) => {
    socket.on('disconnect', () => {
        console.log("User leave");
        console.log(socket.id);
        const user = userLeaves(socket.id);
        const botName = "ChatApp Bot";
        
        if(user) {
            let message = formatMessage(botName, `user ${user.userName} has left the room`, user.roomId);
            MessageController.addMessage(message, () => {
                socket.leave(user.roomName);
                // Broadcast when a user disconnects 
                socket.broadcast.to(user.roomId).emit('message', message)
                // Update room users (sending to all clients in room)
                io.to(user.roomId).emit('roomUsers', getRoomUsers(user.roomId));
            });
        }
    });
}