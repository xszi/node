// 观察者模式
const http = require('http')

const httpServer = http.createServer();

// addListener
httpServer.addListener('request', (request, response) => {
    if(request.url === '/') {
        console.log('addListener')
        response.end('end')
    }
})

// httpServer.once('request', (request, response) => {
//     if(request.url === '/') {
//         console.log('on')
//         response.end('end2')
//     }
// })

const listener = (request, response) => {
    if(request.url === '/') {
        console.log('hello world')
        // 这个会被丢弃掉，不执行
        response.end('welcome') // 只会执行一个response.end()
    }
}

httpServer.on('request', listener)

// off = removeListener
// httpServer.removeListener('request', listener)

httpServer.listen(3000, () => {
    console.log('listening to port 3000')
})