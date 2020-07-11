// TCP 服务
const net = require('net')

const server = net.createServer((socket) => {
    console.log('client connected')
    // console.log(socket)
})

// server.listen(8888, () => {
//     console.log('server is listening')
// })

server.listen(8888) 
server.on('listening', () => {
    console.log('server is listening')
})