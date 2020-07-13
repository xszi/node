// 自定义事件
const http = require('http')

const httpServer = http.createServer();


httpServer.on('request', (request, response) => {
    if(request.url === '/') {
        console.log('addListener')
        response.end('end')
    }
})

httpServer.listen(3000, () => {
    console.log('listening to port 3000')
})

// 注意事件的顺序，先添加事件在发送
httpServer.on('serverEvent', (param1, param2, param3) => {
    console.log(param1 + ',' + param2 + ',' + param3)
})

httpServer.emit('serverEvent', 'hello', 'world', 'welcome')

