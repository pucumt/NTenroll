'use strict';

const crypto = require('crypto');

module.exports = app => {
    return class User extends app.Service {
        * login(idCard, password) {
            const md5Password = crypto.createHash('md5').update(password).digest('hex');
            const user = yield app.mysql.select('users', {
                where: {
                    idCard: idCard,
                    password: md5Password,
                },
            });
            return user.length;
        }

        * insert(name, idCard, password, mobile) {
            const user = yield app.mysql.insert('users', {
                name: name,
                idCard: idCard,
                password: password,
                mobile: mobile
            });
            return user;
        }

        * update() {
            const user = yield app.mysql.update('users', {
                mobile: '11111111111'
            }, {
                where: {
                    _id: 3
                },
            });
            return user;
        }
    }
};