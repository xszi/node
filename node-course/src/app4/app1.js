const net = require('net')

const server = new net.createServer()


server.on('connection', () => {
    console.log('server is connected')
})

server.listen(8888) 

server.on('listening', () => {
    console.log('server is listening')
    server.close();
})

server.on('close', () => {
    console.log('server closed')
})

server.on('error', (error) => {
    console.log('server error')
})