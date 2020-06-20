module.exports = app => {
  app.once('server', server => {
    // websocket
  });
  app.on('error', (err, ctx) => {
    // report error
    // console.log(ctx.request)
  });
  app.on('request', ctx => {
    // log receive request
    console.log(ctx.request)
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    console.log(used, 'used')
    // log total cost
  });
  // 在中间件最前面统计请求时间
  app.config.coreMiddleware.unshift('report');
};