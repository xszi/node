//创建express服务

//1. 加载express模块
const express = require('express');
const app = express();
const { getUrlListV1, getUrlListAsyncV1 } = require('./v1')
const { getUrlListV2 } = require('./v2')
const { getUrlListFetch } = require('./v3')
const { getUrlListReferer } = require('./v4')

// 2. 访问路由执行回调
app.get('/', (req, res) => {

    // const cheerio = require('cheerio')
    // const $ = cheerio.load('<h2 class="title">Hello world</h2>')
    
    // $('h2.title').text('Hello there!')
    // $('h2').addClass('welcome')
    
    // const result = $.html();
    // <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>

    // const jsdom = require("jsdom");
    // const { JSDOM } = jsdom;
    // const dom = new JSDOM(`<!DOCTYPE html><p><span>Hello world</span></p>`);
    // const result = dom.window.document.querySelector("p").innerHTML;

    // res.send('hello spider!' + result);
});

app.get('/v1', (req, res) => {
    // promise
    getUrlListV1(1);
    // saveData();

    // async await
    // let result = await getUrlListAsyncV1(1)

    

    res.json('v1 spider');
});

app.get('/v2', async (req, res) => {
    let result = await getUrlListV2(1)
    res.json(result);
});

app.get('/v3', async (req, res) => {
    let result = await getUrlListFetch(1)
    res.send(result);
});

app.get('/v4', (req, res) => {
    // getUrlList();
    getUrlListReferer(2)
    res.send('hello v4');
});

//3. 绑定端口
app.listen(3000, () => {
    console.log('server listening on port 3000!')
})
