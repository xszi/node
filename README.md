# node-study

some node demos

有个面试题 exports = 'hello world' 不能导出，引用已经断了

top level await

从mongodb开始继续操作----

OSI模型
物理层 -> 数据链路层 -> 网络层 -> 传输层（TCP/UDP） -> 绘画 -> 表示层 -> 应用层(HTTP)

# HTTP - 应用层协议

## HEAD(请求资源的头部信息)

OPTIONS(用于获取目的资源所支持的通信选项) --- 跨域请求 不等过滤，是浏览器发出的

PUT(用于新增资源或者使用请求中的有效负载替换目标 资源的表现形式)
PATCH(修改部分内容)
get 和 post 的区别

- 数据载体不同， get通过 url， post 通过 body
- get url利于缓存结果
- post 多次调用，可能造成多次提交；get 一般具有幂等性。

JSONP 跨域

代理跨域（现在大部分是这样）

## HTTP 部首

- Content-Type
- Accept
- Date
- Expires
- Last-Modified (协商缓存1,最后一次更新时间)
- If-Modified-Since (协商缓存1) 基于时间
- ETag (协商缓存2)
- If-None-Match (协商缓存2) 基于hash
- Cache-Control (Cache-control: max-age=0 最大设置为一年， Cache-control: no-cahe(会请求后台，会缓存)/no-store（不缓存）)

## HTTP 状态码

2XX  成功 200 OK
3XX  重定向 301永久重定向   304 资源未更改
4XX  客户端错误 401没有权限 404 找不到资源
5XX  服务端错误

## 套接字 （转换水管）

## websocket 实例讲解 socket.io

## Node 服务部署

pm2



## ES-module 和 common.js的使用区别，熟练掌握

```js
    // ES-module 编译时加载，即静态加载, 可按需加载 ---> tree-shaking
    // a.js
    export const count = 1
    export function sum (a, b) {
        return a + b
    }

    // 换种方式导出
    // const count = 1
    // function sum (a, b) {
    //     return a + b
    // }
    // export default { count, sum }

    // b.js
    import res from './a.js'
    // import { sum } from './a.js' 按需加载

    console.log(res.count)
    console.log(res.sum(1, 3))
```

```js
    // common.js 运行时加载, 加载整个对象
    // c.js
    const count = 1;
    const sum = (a, b) =>{ 
        return a + b;
    }
    module.exports = {
        count,
        sum
    }
    // d.js
    const res = require('./c.js')
    // const { sum } = require('./c.js') 可按需加载？？？
    console.log(res.count)
    console.log(res.sum(1, 3))
```


