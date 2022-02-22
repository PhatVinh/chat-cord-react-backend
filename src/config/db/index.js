const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/chat_cord');
        console.log('Connect successfully!!!');
    } catch(err) {
        console.log(err);
    }
}

module.exports = { connect };