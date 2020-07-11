const net = require('net')

const server = net.createServer((socket) => {
    console.log('client connected')

    server.maxConnections = 2

    server.getConnections((error, count) => {
        console.log('client count' + count)
    })
})

server.listen(8888, () => {
    const address = server.address()
    console.log(address.port + ',' + address.address + ',' + address.family)
})