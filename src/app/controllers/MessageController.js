const MessageService = require('../services/message/MessageService');

class MessageController {
    getRoomMessages(req, res) {
        let searchParams = {};
        searchParams['roomId'] = req.params.room;
        let skip = req.params.skip;
        let limit = req.params.limit;
        let query = MessageService.getAll(searchParams, skip, limit);
        query
            .then((messages) => {
                res.json({ messages });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    addMessage(data, successCallback) {
        let query = MessageService.create(data);
        query
            .then((messages) => {
                successCallback(messages);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

module.exports = new MessageController;