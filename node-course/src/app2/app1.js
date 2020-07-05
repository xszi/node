// Node 操作文件系统 --- fs模块

const fs = require('fs')

// 文件打开
// fs.open('test.txt', 'r+', (error, fd) => {
//     if (error) {
//         return console.error(error)
//     }
//     console.log('file is open')
// })

// 文件关闭
// fs.open('test.txt', 'r+', (error, fd) => {
//     if (error) {
//         return console.error(error)
//     }
//     console.log('file is open')

//     fs.close(fd, (error) => {
//         if (error) {
//             console.error(error)
//         }
//         console.log('file is closed')
//     })
// })

// 文件删除
// fs.unlink('hello.txt', (error) => {
//     if (error) {
//         throw error
//     }

//     console.log('success')
// })

// 文件重命名
fs.rename('test.txt', 'world.txt', (error) => {
    if (error) {
        console.log(error)
    }

    // 查看文件基本信息
    fs.stat('world.txt', (error, stats) => {
        if (error) {
            console.log(error)
        }
    
        console.log(JSON.stringify(stats))
    })
})