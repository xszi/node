// udp 连接 

const dgram = require('dgram')

const message = Buffer.from('this message comes from server')

const socket = dgram.createSocket('udp4', (msg, info) => {
    socket.send(message, 0, message.length, info.port, info.address, (error, bytes) => {
        if(error) {
            console.log(error)
            return
        }

        console.log('Server has sent ' + bytes + ' bytes message')
    })
})

socket.bind(8888, 'localhost', () => {
    console.log('Server has binded to 8888')
})

socket.on('message', (msg, info) => {
    console.log('message event occured');
    console.log(msg.toString())
})