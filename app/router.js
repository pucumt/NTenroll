'use strict';

module.exports = app => {
    app.get('/init', app.controller.init.install);

    app.get('/', 'home.index');
    app.get('/news', app.controller.news.list);
    app.get('/user/:id', app.controller.user.info);
};