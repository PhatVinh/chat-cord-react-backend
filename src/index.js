const express = require('express');
const http = require('http');
const router = require('./routes/index');
const socketio = require('socket.io');
const chatListener = require('./listeners/ChatListener');
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    serveClient: false, 
    // Enable CORS for http://localhost:3000
    cors: {
        origin: 'http://localhost:3000'
    } 
});
chatListener(io);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



