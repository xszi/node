// TCP 连接
const net = require('net')

const server = net.createServer((socket) => {
    const address = socket.address()
    // 这段话为什么会打印在客户端
    const message = 'server address is ' + JSON.stringify(address)

    socket.write(message, () => {
        const writeSize = socket.bytesWritten;

        console.log(message)
        console.log('message size is: ' + writeSize)
    })

    socket.on('data', (data) => {

        console.log(data.toString())

        const readSize = socket.bytesRead

        console.log('data size is ' + readSize)
    })
})

server.listen(8888, () => {
    console.log('server is listening')
})