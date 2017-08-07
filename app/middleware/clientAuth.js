module.exports = () => {
  return function*(next) {
    if (!this.session.clientLogin) {
      this.status = 403;
      return this.redirect.call('/client/login');
      //   this.redirect("/client/login");
      //   yield Promise.reject(); //Promise.redirect("/client/login");
      //   return;
    }
    yield next;
  }
};