// TCP 连接 创建客户端连接
const net = require('net')

const client = new net.Socket()

client.connect(8888, 'localhost', () => {
    console.log('connected to the server')
})