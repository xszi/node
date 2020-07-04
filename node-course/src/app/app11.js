const querystring = require('querystring')

const obj = {
    name: 'zhangshan',
    address: 'xiamen'
}

const result = querystring.stringify(obj)

console.log(result)