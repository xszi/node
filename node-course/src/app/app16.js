const http = require('http')

const querystring = require('querystring')

const url = require('url')

const userService = require('./UserService')

const server = http.createServer((request, response) => {
    let data = ''
    
    request.on('data', (chunk) => {
        data += chunk
    })

    request.on('end', () => {
        const requestUrl = request.url
        const requestMethod = request.method

        if (requestUrl.includes('login') && requestMethod === 'GET') {
            const requestParams = url.parse(requestUrl)
            console.log(requestParams)

            const queryObj = querystring.parse(requestParams.query)

            console.log(queryObj)

            const loginResult = userService.login(queryObj.username, queryObj.password)

            console.log('loginResult:', loginResult)

            response.writeHead(200, {'Content-Type': 'text/plain'})
            response.end('username: ' + queryObj.username + ', password: ' + queryObj.password)
        }
    })
})

server.listen(3000, () => {
    console.log('server is listening on port 3000')
})