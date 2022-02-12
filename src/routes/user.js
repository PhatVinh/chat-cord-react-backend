const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/UserController');

router.get('/check-username/:username', UserController.checkUserNameInUse);

module.exports = router;