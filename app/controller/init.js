module.exports = app => {
    class InitController extends app.Controller { *
        install() {
            const ctx = this.ctx;
            const result = yield ctx.service.init.install();
            yield ctx.render('install/index.tpl', { result: result });
        }
    }
    return InitController;
};