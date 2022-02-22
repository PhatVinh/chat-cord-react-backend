const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Room = new Schema({
    name: { type: String, maxLength: 150 }
})

module.exports = mongoose.model("Room", Room);