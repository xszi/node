'use strict';

module.exports = app => {
  const { router, controller } = app;
  // topics路由有点疑问
  app.router.resources('topics', '/api/topics', controller.topics.show);
  router.get('cart', '/uc/cart/basic', controller.mall.proxy);
  router.post('createPost', '/api/posts', controller.post.create);
};

// router 中使用中间件
// module.exports = app => {
//   const gzip = app.middleware.gzip({ threshold: 1024 });
//   app.router.get('/needgzip', gzip, app.controller.handler);
// };