'use strict';

const Controller = require('egg').Controller;

class ProxyController extends Controller {
  async proxy() {
    const { ctx } = this;
    const method = ctx.method.toLowerCase();

    const data = method === 'get' ? ctx.query : ctx.request.body;
    const options = {
      method,
      server: ctx.params[0], // 所属服务
      path: ctx.params[1], // 请求地址
      headers: ctx.headers,
    };


    const res = await ctx.service.mall.proxy(data, options);

    // TODO: 只在测试环境加
    // 把后台的请求时间, 响应回去
    ctx.set('response-time', `${res.res.rt || 0}ms`);
    ctx.set('content-type', res.headers['content-type']);
    ctx.body = res.data || res;

  }
}

module.exports = ProxyController;
