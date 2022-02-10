const loginRouter = require('./login');

function router (app) {
    app.use('/login', loginRouter);
}

module.exports = router;