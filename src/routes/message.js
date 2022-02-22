const express = require('express');
const router = express.Router();
const MessageController = require('../app/controllers/MessageController');

router.get('/:room/:skip/:limit', MessageController.getRoomMessages);

module.exports = router;