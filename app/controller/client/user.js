module.exports = app => {
  class LoginController extends app.Controller {
    // checklogin
    * login() {
      const idCard = this.ctx.request.body.idCard;
      const password = this.ctx.request.body.password;
      const login = yield this.service.client.user.login(idCard, password);
      if (login) {
        this.ctx.session.clientLogin = true;
        this.ctx.body = {
          url: this.ctx.session.orgUrl || '/client/personalCenter'
        };
      } else {
        this.ctx.body = {
          error: '用户名或密码错误'
        };
      }
    }

    * reg() {
      const name = this.ctx.request.body.name;
      const idCard = this.ctx.request.body.idCard;
      const password = this.ctx.request.body.password;
      const mobile = this.ctx.request.body.mobile;
      const isSucess = yield this.service.client.user.insert(name, idCard, password, mobile);
      if (isSucess) {
        this.ctx.session.clientLogin = true;
        this.ctx.body = {
          url: this.ctx.session.orgUrl || '/client/personalCenter'
        };
      } else {
        this.ctx.body = {
          error: '注册失败'
        };
      }
    }

    * update() {
      const isSucess = yield this.service.client.user.update();
      if (isSucess) {
        this.ctx.body = {};
      } else {
        this.ctx.body = {
          error: '更新失败'
        };
      }
    }
  }
  return LoginController;
};