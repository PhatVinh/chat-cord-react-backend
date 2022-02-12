const loginRouter = require('./login');
const userRouter = require('./user');

function router (app) {
    app.use('/user', userRouter);
}

module.exports = router;