const querystring = require('querystring')

const str = 'name=zhangshan&address=xiamen'

const obj = querystring.parse(str)

console.log(obj)