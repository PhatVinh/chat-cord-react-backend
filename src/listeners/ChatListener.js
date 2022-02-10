const formatMessage = require('../helper/message');

function ChatListener(io) {
    const botName = "ChatApp Bot";
    // Run when client connect 
    io.on('connection', socket => {
        socket.on('joinRoom', ({username, room }) => {
            console.log(`user ${username} has joined room ${room}`);
            socket.emit('message', formatMessage(botName, 'Welcome to ChatApp'));
        })
        
        // Listen for chat message
        socket.on('chatMessage', (msg) => {
            io.emit('message', formatMessage("Phats", msg));
        })
    })
}

module.exports = ChatListener;