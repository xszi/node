const http = require('http')

const server= http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('hello node.js')
})

server.listen(3000, 'localhost')

server.on('listening', function() {
    console.log('Server is listening')
    // server.close()
})

server.on('connection', function() {
    console.log('Client is connected')
})

server.on('close', function() {
    console.log('Server is closed')
})

console.log('Node Server Started on port 3000')