'use strict';

module.exports = app => {
  const user = app.role.can('user');

  app.get('/init', app.controller.init.install);

  app.get('/', 'home.index');
  app.get('/news', app.controller.news.list);
  app.get('/user/:id', app.controller.user.info);

  // client side rules
  app.get('/client/login', app.controller.client.login.login);
  app.get('/client/personalCenter', app.middleware.clientAuth(), app.controller.client.personalCenter.index);
  //app.controller.client.middleware.auth(),
  // app.resources('client/users', '/client/users', app.role.can('user'), app.controller.client.user);

  // server side rules

};