const formatMessage = require('../../helper/message');
const {
    userJoin,
    getCurrentUser,
    getRoomUsers,
    userLeaves,
} = require('../../config/fake_db');


function ChatListener(io) {
    const botName = "ChatApp Bot";
    // Run when client connect 
    io.on('connection', socket => {
        socket.on('joinRoom', ({userName, roomName }) => {
            console.log(`user ${userName} has join room ${roomName}`);

            // Add current user to users 
            let user = userJoin(socket.id, userName, roomName);

            // Join current user to room (subscribe to a channel) used for broadcast to a specific room
            socket.join(user.roomName);

            socket.emit('message', formatMessage(botName, 'Welcome to ChatApp'));
            socket.emit('userName', userName);
            
            // Broadcast when a new user connects (sending to all clients in room(channel) except sender)
            socket.broadcast.to(user.roomName).emit(
                'message',
                formatMessage(botName, `user ${userName} has joined the room`)
            )
            
            // Update room users (sending to all clients in room(channel) include sender)
            io.to(user.roomName).emit('roomUsers', getRoomUsers(user.roomName));
            
            
        })

        socket.on('leaveRoom', () => {
            const user = userLeaves(socket.id);
            if(user) {
                socket.leave(user.roomName);
                // Broadcast when a user disconnects 
                socket.broadcast.to(user.roomName).emit(
                    'message',
                    formatMessage(botName, `user ${user.userName} has left the room`)
                )
                // Update room users (sending to all clients in room)
                io.to(user.roomName).emit('roomUsers', getRoomUsers(user.roomName));
            }
        })

        // Listen for chat message
        socket.on('chatMessage', (msg) => {
            let user = getCurrentUser(socket.id);
            io.to(user.roomName).emit('message', formatMessage(user.userName, msg));
        })

        socket.on('disconnect', () => {
            console.log("User leave");
            console.log(socket.id);
            const user = userLeaves(socket.id);
            
            if(user) {
                socket.leave(user.roomName);
                // Broadcast when a user disconnects 
                socket.broadcast.to(user.roomName).emit(
                    'message',
                    formatMessage(botName, `user ${user.userName} has left the room`)
                )
                // Update room users (sending to all clients in room
                io.to(user.roomName).emit('roomUsers', getRoomUsers(user.roomName));
            }
        })
    })
}

module.exports = ChatListener;