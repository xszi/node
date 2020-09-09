//创建express服务

//1. 加载express模块
const express = require('express');
const app = express();
const { getUrlList, getUrlListAsync } = require('./spider-v1')

// 2. 访问路由执行回调
app.get('/', (req, res) => {
    // getUrlList();
    getUrlListAsync(2)
    res.send('hello v1');
});

app.get('/v2', (req, res) => {
    // getUrlList();
    // getUrlListAsync(2)
    res.send('hello v2');
});

//3. 绑定端口
app.listen(3000, () => {
    console.log('server listening on port 3000!')
})
