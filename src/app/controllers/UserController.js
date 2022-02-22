const {
    getUserByUserName
} = require('../../config/fake_db');

class UserController {

    // [GET]
    checkUserNameInUse(req, res) {
        let userName = req.params.username;
        
        if(getUserByUserName(userName) === undefined){
            res.json({
                userName: userName,
                isValid: true
            });
            return;
        }
        
        res.json({
            userName: userName,
            isValid: false
        });
    }
}

module.exports = new UserController();