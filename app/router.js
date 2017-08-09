'use strict';

module.exports = app => {
  app.beforeStart(function* () {
    yield app.model.sync({
      force: true
    });
  });

  app.get('/init', app.controller.init.install);

  // client side rules
  app.get('/client/login', app.controller.client.personalCenter.login);
  app.get('/client/reg', app.controller.client.personalCenter.reg);
  app.get('/client/personalCenter', app.middleware.auth.clientAuth(), app.controller.client.personalCenter.index);

  app.post('/client/login', app.controller.client.user.login);
  app.post('/client/reg', app.controller.client.user.reg);
  app.post('/client/update', app.controller.client.user.update);

  // app.resources('client/users', '/client/users', 'client.users');
  // server side rules

};