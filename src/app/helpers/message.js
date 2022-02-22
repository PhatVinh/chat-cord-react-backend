const moment = require('moment');

function formatMessage(username, text, roomId) {
    return {
        username, 
        text,
        roomId: roomId || '',
        time: moment().format('hh:mm a'),
    }
}

module.exports = formatMessage;