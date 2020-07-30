const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
    console.log('myFunction1 started')
    await next();
    console.log('myFunction1 finished')
})

app.use(async (ctx, next) => {
    console.log('myFunction2 started')
    await next();
    console.log('myFunction2 finished')
})

app.use(async (ctx, next) => {
    console.log('myFunction3 started')
    await next();
    console.log('myFunction3 finished')
})

app.use(async (ctx) => {
    // ctx.body = 'hello koa'

    ctx.response.type = 'text/html'
    ctx.response.body = '<h2>hello koa</h2>'
    console.log('洋葱中心')
})

app.listen(3000)