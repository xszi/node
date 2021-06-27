const koa = require('koa');
const chalk = require('chalk')
const log = contents => {
    console.log(chalk.red(contents))
}

const app = new koa();
const cors = require('koa2-cors');
const static = require('koa-static')
app.use(static(__dirname + '/views'))

app.use(cors());

app.use(async (ctx, next) => {
    // 允许来自所有域名请求
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("X-Content-Type-Options", "nosniff");
    console.log(44444);
    await next();
})

app.use(async (ctx, next) => {
    log('Hack...:' + ctx.url)
    await next()
})

module.exports = app