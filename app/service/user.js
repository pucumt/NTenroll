module.exports = app => {
    return class User extends app.Service { *
        find(uid) {
            // 假如 我们拿到用户 id 从数据库获取用户详细信息

            const user = yield app.mysql.query('users', {
                id: uid,
            });
            return {
                user,
            };
        }
    }
};