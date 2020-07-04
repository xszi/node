const url = require('url')

const urlOject = {
    'host': 'www.test.com',
    'port': '80',
    'protocal': 'http',
    'search': '?order=12345',
    'query': 'order=12345',
    'path': '/'
}

let realAddress = url.format(urlOject)

console.log(realAddress)