const express = require('express');
const http = require('http');
const router = require('./routes/index');
const socketio = require('socket.io');
const cors = require('cors');
const chatListener = require('./app/listeners/index.js');
const database = require('./config/db/index');
const PORT = process.env.PORT || 5000;

const app = express();

//  Enable CORS for all site
app.use(cors());

// Setup route
router(app);

// Connect to database
database.connect();

// Setup socketio
const server = http.createServer(app);
const io = socketio(server, {
    // Enable CORS for http://localhost:3000
    serveClient: false,
    cors: {
        origin: '*',
    } 
});
chatListener(io);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



