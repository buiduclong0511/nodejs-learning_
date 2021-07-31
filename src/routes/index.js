
const newsRouter = require('./news');
const siteRouter = require('./site');
const audioRouter = require('./audio');
const authRouter = require('./auth');

function route(app) {
    
    app.use('/news', newsRouter);
    app.use('/audio', audioRouter);
    app.use('/auth', authRouter);
    app.use('/', siteRouter);
}

module.exports = route;
