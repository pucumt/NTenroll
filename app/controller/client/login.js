module.exports = app => {
  class LoginController extends app.Controller { *
    login() {
      const ctx = this.ctx;
      yield ctx.render('client/login.html', {});
    }
  }
  return LoginController;
};