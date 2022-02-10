const users = [];

// Join user to chat 
function userJoin(id, userName, room) {
    const user = {
        id,
        userName,
        room
    }

    users.push(user);
    return user;
}

// Get current user
function getCurrentUser(id) {
    
}