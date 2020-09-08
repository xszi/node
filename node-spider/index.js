//创建HTTP服务器

//1. 加载http模块
const http = require('http');
const { getUrlList, getUrlListAsync } = require('./spider-v1')

//2. 创建http服务器
// 参数: 请求的回调, 当有人访问服务器的时候,就会自动调用回调函数
const server = http.createServer((req, res) => {
    //回调数据
    // getUrlList();
    getUrlListAsync(2)
    res.write('Hello, spider')
})

//3. 绑定端口
server.listen(3000, () => {
    console.log('server listening on port 3000!')
})
