const express = require('express');
const http = require('http');
const router = require('./routes/index');
const socketio = require('socket.io');
const chatListener = require('./listeners/ChatListener');
// var cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();
// app.use(cors());
const server = http.createServer(app);
const io = socketio(server, {
    serveClient: false, 
    cors: {
        origin: 'http://localhost:3000'
    } 
});
chatListener(io);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



