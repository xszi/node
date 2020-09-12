//创建express服务

//1. 加载express模块
const express = require('express');
const app = express();
const { getUrlListV1, getUrlListAsyncV1 } = require('./v1')
const { getUrlListV2 } = require('./v2')
const { getUrlListFetch } =require('./v3')


// 2. 访问路由执行回调
app.get('/', (req, res) => {
    res.send('hello spider!');
});

app.get('/v1', async (req, res) => {
    console.log('get data');

    // promise
    // let result = await getUrlListV1();

    // async await
    let result = await getUrlListAsyncV1(1)
    res.send(result);
});

app.get('/v2', async (req, res) => {
    let result = await getUrlListV2(1)
    res.json(result);
});

app.get('/v3', (req, res) => {
    // getUrlList();
    getUrlListFetch(1)
    res.send('hello v3');
});

app.get('/v4', (req, res) => {
    // getUrlList();
    // getUrlListAsync(2)
    res.send('hello v2');
});

//3. 绑定端口
app.listen(3000, () => {
    console.log('server listening on port 3000!')
})
