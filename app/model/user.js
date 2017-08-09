module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const User = app.model.define('users', {
        idCard: STRING,
        name: STRING(20),
        password: STRING(32),
        mobile: STRING(11),
        email: STRING(20),
        age: INTEGER,
        last_sign_in_at: DATE,
        created_at: DATE,
        updated_at: DATE,
    });

    User.findByLogin = function* (login) {
        return yield this.findOne({
            login: login
        });
    }

    User.prototype.logSignin = function* () {
        yield this.update({
            last_sign_in_at: new Date()
        });
    }

    return User;
};