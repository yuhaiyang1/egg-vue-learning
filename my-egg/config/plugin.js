'use strict';

// had enabled by egg
// exports.static = true;
exports.mysql = {
    enable: true,
    package: 'egg-mysql',
  };
// 编辑 config/plugin.js
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.security = {
  domainWhiteList: '*' 
};
