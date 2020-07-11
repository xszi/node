// TCP 连接 创建客户端连接
const net = require('net')

const client = new net.Socket()

client.connect(8888, 'localhost', () => {
    console.log('connected to the server')
    // send data to server
    client.write('message from client')
})

client.on('data', (data) => {
    console.log('data from server: ' + data.toString())
    client.write('hello wrold')
})

client.on('end', () => {
    console.log('end event')
})