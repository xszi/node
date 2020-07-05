const path = require('path')

const myPath1 = path.join('/hello', 'world', 'text/welocome')

const myPath2 = path.join('/hello', 'world', 'text/welocome', '..')

console.log(myPath1)

console.log(myPath2)