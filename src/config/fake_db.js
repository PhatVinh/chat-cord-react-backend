const users = [];

// Join user to chat 
function userJoin(id, userName, roomName) {
    const user = {
        id,
        userName,
        roomName
    }

    users.push(user);
    return user;
}

// Get current user
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// Get room users 
function getRoomUsers(roomName) {
    return users.filter(user => user.roomName === roomName);
}

function userLeaves(id) {
    const index = users.findIndex(user => user.id === id);
    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
    return false;
}

module.exports = {
    userJoin,
    getCurrentUser,
    getRoomUsers,
    userLeaves
}