const http = require('http')
const httpServer = new http.Server()

httpServer.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('hello node.js222')
})

httpServer.listen(3000, function() {
    console.log('Node Server started on port 3000')
})