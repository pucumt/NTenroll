'use strict';

// had enabled by egg
// exports.static = true;
module.exports = {
  proxyworker: {
    enable: true,
    package: 'egg-development-proxyworker'
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  }
};