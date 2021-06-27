const express = require('express')
const path = require('path')
const app = express()
const port = process.argv[2] || 3002

app.get('/', function (req, res) {
    res.send('<p>hello world!</p>')
})

app.get('/data', function (req, res) {
    console.log('请求正常，只是浏览器将响应数据置空')
    //   res.json({greeting: 'hello chrome!'})
})

app.get('/file', function getState(req, res, next) {
    console.log(req.query, 'req.body');
    res.sendfile(`${__dirname}/public/js/server.js`)
    // res.sendfile(`${__dirname}/public/html/xss.html`)
})

app.listen(port, () => console.log(`app is listening at localhost:${port}`))