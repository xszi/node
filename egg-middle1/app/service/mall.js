'use strict';

const Service = require('egg').Service;

class ProxyService extends Service {
  async proxy(data, options) {
    // const { ctx } = this;
    const { server, method, path, headers } = options;
    // 匹配响应二进制流的接口路径
    const streamReg = /uc\/seller-image\/|uc\/pro-image\//;

    // 响应二进制流时, 需要把dataType设置为空
    streamReg.test(path) && (params.dataType = '');

    let root = 'https://nbmall.deeptel.com.cn'
    const result = await this.ctx.curl(`${root}/uc/cart/basic`, {
        method: method, // 请求方式
        data: data, // 请求的参数
        dataType: 'json', // 自动解析 JSON response
        contentType: 'json', // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
        headers: { // 请求header
            ucBusId: headers.ucbusid,
            ucToken: headers.uctoken
        }
      });
    return result;
  }
}

module.exports = ProxyService;
