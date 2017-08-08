module.exports = app => {
  class PersonalCenterController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      yield ctx.render('client/personalCenter.html', {});
    }

    * login() {
      const ctx = this.ctx;
      yield ctx.render("client/login.html", {});
    }

    * reg() {
      const ctx = this.ctx;
      yield ctx.render("client/reg.html", {});
    }
  }
  return PersonalCenterController;
};