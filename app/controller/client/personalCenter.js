module.exports = app => {
  class PersonalCenterController extends app.Controller { *
    index() {
      const ctx = this.ctx;
      yield ctx.render('client/personalCenter.html', {});
    }
  }
  return PersonalCenterController;
};