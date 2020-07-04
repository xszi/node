const http = require('http')
const server = http.createServer(function(request, response) {
    let data = ''

    request.on('data', function(chunk) {
        data += chunk
    })

    request.on('end', function() {
        let method = request.method
        let headers = JSON.stringify(request.headers)
        let httpVersion = request.httpVersion
        let requestUrl = request.url

        response.writeHead(200, {'Content-Type': 'text/html'})

        let responseData = method + ", " + headers + ', ' + httpVersion + ', ' + requestUrl

        response.end(responseData)
    })
})

server.listen(3000, function() {
    console.log('Node Server started on port 3000')
})
