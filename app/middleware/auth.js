module.exports = {
    clientAuth: () => {
        return function* (next) {
            if (!this.session.clientLogin) {
                this.status = 403;
                this.session.orgUrl = this.request.url;
                return this.redirect('/client/login');
            }
            yield next;
        }
    },
    serverAuth: () => {
        return function* (next) {
            if (!this.session.serverLogin) {
                this.status = 403;
                this.session.orgUrl = this.request.url;
                return this.redirect('/server/login');
            }
            yield next;
        }
    }
};