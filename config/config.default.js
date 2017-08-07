'use strict';

module.exports = appInfo => {
    const config = {
        view: {
            defaultViewEngine: 'nunjucks',
            mapping: {
                '.tpl': 'nunjucks',
            },
        },
        proxyworker: {
            port: 10086,
        },
        news: {
            pageSize: 5,
            serverUrl: 'https://hacker-news.firebaseio.com/v0',
        },
        mysql: {
            // 单数据库信息配置
            client: {
                // host
                host: '127.0.0.1',
                // 端口号
                port: '3306',
                // 用户名
                user: 'root',
                // 密码
                password: 'password',
                // 数据库名
                database: 'test',
            },
            // 是否加载到 app 上，默认开启
            app: true,
            // 是否加载到 agent 上，默认关闭
            agent: false,
        }
    };

    // should change to your own
    config.keys = appInfo.name + '_1501657373751_1282';
    // add your config here
    return config;
};