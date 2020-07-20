const cluster = require('cluster')

const http = require('http')

const os = require('os')

const cpuCount = os.cpus().length

// console.log(cpuCount)

// master-worker 模式

if (cluster.isMaster) {
    for (let i = 0; i < cpuCount; i++) {
        // 每一次fork都会走当前文件
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(worker.process.pid)
    })
} else {
    const httpServer = http.createServer((request, response) => {
        let data = '';

        request.on('data', (chunk) => {
            data += chunk
        })

        request.on('end', () => {
            response.writeHead(200, {'ContentType': 'text/plain'})

            response.end(`${process.pid}`)
        })
    })

    httpServer.listen(3000, () => {
        console.log('listening on 3000')
    })
}
