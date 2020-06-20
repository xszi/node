'use strict';
module.exports = require('koa-compress');
module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1490750627161_5967';

  config.middleware = [ 'errorHandler', 'gzip', 'compress' ];

  // 配置 gzip 中间件的配置
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
    enable: true,  // 控制中间件是否开启
    // match: '/static', // 设置只有符合某些规则的请求才会经过这个中间件。只针对 /static 前缀开头的 url 请求开启
    match(ctx) {
      // 只有 ios 设备才开启
      const reg = /iphone|ipad|ipod/i;
      return reg.test(ctx.get('user-agent'));
    },
    ignore: '' // 设置符合某些规则的请求不经过这个中间件。
  }
  config.compress = {
    threshold: 2048,
  }
  config.bodyParse = {
    jsonLimit: '10mb',
  }
  config.security = {
    csrf: {
      enable: false,
    },
  }
  return config;
};