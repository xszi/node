// Node 操作文件系统 --- fs模块

// api 大部分都存在同步和异步两个版本 同步加 ‘sync’ 标识

const fs = require('fs')

// 同步版本需要使用try-catch
try {
    const data = fs.readFileSync('./test.txt', 'utf-8')
    console.log(data)
} catch (e) {
    console.log(e)
}

fs.readFile('test.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log('error occured')
        console.log(error)
    } else {
        console.log(data)
    }
})

fs.writeFile('myText.txt', 'mytest, node.js', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('write successful')
    }
})

fs.writeFile('myText2.txt', 'mytest2, node.js\r\n', {flag: 'a'}, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('write successful')
    }
})