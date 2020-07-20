const fs = require('fs')

const process = require('process')

const myFunction = () => {
    console.log('MyFucntion invoked')
}

// 下一个同步之后，异步之前
process.nextTick(myFunction)

console.log(fs.readFileSync('./'))