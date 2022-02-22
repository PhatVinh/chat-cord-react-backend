const express = require('express');
const router = express.Router();
const RoomController = require('../app/controllers/RoomController');

router.get('/get-all', RoomController.getAllRoomData);
router.get('/:id', RoomController.getRoomInfo);

module.exports = router;