const path = require('path')

// 获取当前文件的绝对路径__dirname
// const outputPath = path.join(__dirname, 'myDir', 'hello.js')

// 获取当前文件的拓展名
// const extInfo = path.extname(path.join(__dirname, 'myDir', 'hello.js'))

// 解析地址
const filePath = '/Users/helloworld/node/test.js'
const obj = path.parse(filePath)

// console.log(outputPath)

// console.log(extInfo)

console.log(obj)