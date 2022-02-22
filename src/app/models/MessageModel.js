const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Message = new Schema({
    text: { type: String },
    roomId: { type: ObjectId, ref: 'rooms', required: [true,'No room id found'] },
    username: { type: String },
    time: { type: String }
})

module.exports = mongoose.model("Message", Message);