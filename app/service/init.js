module.exports = app => {
    return class init extends app.Service { *
        install() {
            // 假如 我们拿到用户 id 从数据库获取用户详细信息
            // DROP TABLE IF EXISTS `users`;
            yield app.mysql.query("DROP TABLE IF EXISTS `users`;");
            // alter table users AUTO_INCREMENT=10000;
            const result = yield app.mysql.query("CREATE TABLE IF NOT EXISTS `users` (" +
                "`_id` int(11) NOT NULL AUTO_INCREMENT," +
                "`name` varchar(20) NOT NULL," +
                "`createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP," +
                "`updateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP," +
                "`timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP," +
                "PRIMARY KEY(`_id`)," +
                "UNIQUE KEY `name_UNIQUE` (`name`)" +
                ") ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8;");
            // alter table users AUTO_INCREMENT = 10000;
            yield app.mysql.query("alter table users AUTO_INCREMENT = 10000;");

            return {
                result,
            };
        }
    }
};