// TCP 连接
const net = require('net')

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(data.toString())
    })
})

server.listen(8888, () => {
    console.log('server is listening')
})