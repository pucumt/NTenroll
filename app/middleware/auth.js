module.exports = {
  clientAuth: () => {
    return function*(next) {
      if (!this.session.clientLogin) {
        this.status = 403;
        return this.redirect('/client/login');
      }
      yield next;
    }
  },
  serverAuth: () => {
    return function*(next) {
      if (!this.session.serverLogin) {
        this.status = 403;
        return this.redirect('/server/login');
      }
      yield next;
    }
  }
};