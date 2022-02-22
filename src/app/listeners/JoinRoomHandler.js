const formatMessage = require('../helpers/message');
const {
    userJoin,
    getRoomUsers,
} = require('../../config/fake_db');
const MessageController = require('../controllers/MessageController');

module.exports = (socket, io) => {
    socket.on('joinRoom', ({ userName, roomId }) => {
        console.log(`user ${userName} has join room ${roomId}`);
        const botName = "ChatApp Bot";
    
        // Add current user to users 
        let user = userJoin(socket.id, userName, roomId);
    
        // Join current user to room (subscribe to a channel) used for broadcast to a specific room
        socket.join(user.roomId);
    
        let message = formatMessage(botName, `user ${userName} has joined the room`, roomId);
        MessageController.addMessage(message, () => {
            // Broadcast when a new user connects (sending to all clients in room(channel) except sender)
            socket.broadcast.to(user.roomId).emit('message', message)
            
            // Emit room users to the sender
            socket.emit('userName', userName);
            
            // Update room users (sending to all clients in room(channel) include sender)
            io.to(user.roomId).emit('roomUsers', getRoomUsers(user.roomId));
        });
    })
}