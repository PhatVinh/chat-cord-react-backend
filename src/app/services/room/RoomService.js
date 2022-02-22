const RoomModel = require('../../models/RoomModel');

class RoomService {
    get(searchParams) {
        let query = RoomModel.findOne(searchParams);
        return query;
    }

    getAll(searchParams) {
        let query = RoomModel.find(searchParams);
        return query;
    }

}

module.exports = new RoomService;