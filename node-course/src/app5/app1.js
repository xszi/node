// 观察者模式
const http = require('http')
const events = require('events')

const httpServer = http.createServer();

// 修改当前实例的监听数量
httpServer.setMaxListeners(2)

// addListener
httpServer.addListener('request', (request, response) => {
    if(request.url === '/') {
        console.log('addListener')
        response.end('end')
    }
})


console.log('default max listener count: ' + events.EventEmitter.defaultMaxListeners)
const listener = (request, response) => {
    if(request.url === '/') {
        console.log('hello world')
        // 这个会被丢弃掉，不执行
        response.end('welcome') // 只会执行一个response.end()
    }
}

httpServer.on('request', listener)

httpServer.listen(3000, () => {
    console.log('listening to port 3000')
})