// udp 服务 
// 为什么会持续发送不停止
const dgram = require('dgram')

const message = Buffer.from('this message comes from client')

const socket = dgram.createSocket('udp4')

socket.send(message, 0, message.length, 8888, 'localhost', (error, bytes) => {
    if(error) {
        console.log(error)
    }

    console.log('client has sent ' + bytes + ' bytes messages')
})

socket.on('message', (msg, info) => {
    const message2Send = 'hello world'
    socket.send(message2Send, 0, message2Send.length, 8888, 'localhost')    
})