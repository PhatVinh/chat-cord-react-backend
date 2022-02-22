const MessageModel = require('../../models/MessageModel');

class MessageService {
    get(searchParams) {
        let query = MessageModel.findOne(searchParams);
        return query;
    }

    create (data) {
        const message = new MessageModel(data);
        return message.save();
    }

    getAll (searchParams, skip, limit) {
        let query 
        if(skip !== undefined && limit !== undefined) {
            query = MessageModel.find(searchParams).sort({'_id': -1}).skip(skip).limit(limit);
            return query;
        }
        query = MessageModel.find(searchParams);
        return query;
    }
}

module.exports = new MessageService;