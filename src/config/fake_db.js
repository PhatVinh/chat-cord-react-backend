const users = [];

// Join user to chat 
function userJoin(id, userName, roomId) {
    const user = {
        id,
        userName,
        roomId
    }

    users.push(user);
    return user;
}

// Get current user
function getCurrentUser(id) {
    console.log(users);
    return users.find(user => user.id === id);
}

// Get room users 
function getRoomUsers(roomId) {
    return users.filter(user => user.roomId === roomId);
}

function userLeaves(id) {
    const index = users.findIndex(user => user.id === id);
    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
    return false;
}

// Get user by username 
function getUserByUserName(userName) {
    return users.find(user => user.userName === userName);
}

module.exports = {
    userJoin,
    getCurrentUser,
    getRoomUsers,
    userLeaves,
    getUserByUserName
}