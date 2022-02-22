const roomRouter = require('./room');
const userRouter = require('./user');
const messageRouter = require('./message');

function router (app) {
    app.use('/user', userRouter);
    app.use('/room', roomRouter);
    app.use('/message', messageRouter);
}

module.exports = router;