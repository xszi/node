const Koa = require('koa')

const app = new Koa()

app.use(async (ctx) => {
    // ctx.body = 'hello koa'

    ctx.response.type = 'text/html'
    ctx.response.body = '<h2>hello koa</h2>'

    


})

app.listen(3000)