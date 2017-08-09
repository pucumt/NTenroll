'use strict';

module.exports = appInfo => {
  const config = {
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.html': 'nunjucks',
      },
    },
    proxyworker: {
      port: 10086,
    },
    news: {
      pageSize: 5,
      serverUrl: 'https://hacker-news.firebaseio.com/v0',
    },
    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'test',
      host: '127.0.0.1',
      port: '3306',
      username: 'root',
      password: 'password'
    },
    session: {
      key: 'EGG_SESS',
      maxAge: 60 * 1000, // 1 天
      httpOnly: true,
      encrypt: true,
    },
    security: {
      csrf: {
        headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      },
    }
  };

  // should change to your own
  config.keys = appInfo.name + '_1501657373751_1282';
  // add your config here
  return config;
};