const formatMessage = require('../helpers/message');
const {
    getCurrentUser,
} = require('../../config/fake_db');
const MessageController = require('../controllers/MessageController');

module.exports = (socket, io) => {
    socket.on('chatMessage', (messageText) => {
        let user = getCurrentUser(socket.id);
        let message = formatMessage(user.userName, messageText, user.roomId);
        MessageController.addMessage(message, () => {
            io.to(user.roomId).emit('message', message);
        });
    });
}