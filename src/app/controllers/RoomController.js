const RoomService = require('../services/room/RoomService');

class RoomController {
    
    // [GET]
    getAllRoomData (req, res) {
        let query = RoomService.getAll();

        query
            .then((room) => {
                res.json({ room });
            })
    }

    // [GET/:_id]
    getRoomInfo (req, res) {
        let _id = {};
        _id['_id'] = req.params.id;
        let query = RoomService.get(_id);

        query
            .then((room) => {
                res.json({ room });
        })
    }
}

module.exports = new RoomController;