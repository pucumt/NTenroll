exports.info = function*(ctx) {
    const userId = ctx.params.id;
    const user = yield ctx.service.user.find(userId);
    ctx.body = user;
};