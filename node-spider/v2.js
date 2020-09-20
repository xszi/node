const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const request = require('request')

const { JSDOM } = require('jsdom')
const circularJSON = require('circular-json');

const { saveData } = require('./utils')
 
async function getUrlListV2 (page) {

    // 第一步：分析请求链接，找到爬虫目标所在返回数据结构中的位置
    const searchUrl = `https://huaban.com/search/?q=food&page=${page}&per_page=20&wfl=1`

    // 第二步：获取到数据，查看数据
    let { data } = await axios.get(searchUrl)
    // return data

    // 解析字符串(html字符串)
    const $ = cheerio.load(data);
    // console.log($('script'))
    // return $('script')

    // 使用jsdom解析
    // const dom = new JSDOM(data);
    // const domStr = dom.window.document.body.textContent
    // const jsDomKeyArr = domStr.split(';').filter(item => item.includes('app.page["pins"]'))[0].split(';').filter(item => item.includes('app.page["pins"]'))
    // return jsDomKeyArr
    
    // 获取script脚本里面的内容
    const content = [];
    $('script').each(function () {
        const script = $(this).html()
        content.push(script)
    })
    // console.log(content.length)
    // return content

    // 将script脚本内容过滤截取得到需要的key数组
    // 进一步处理数组得到json对象
    const cheerioKeyArr = content.filter(item => item.includes('app.page["pins"]'))[0].split(';').filter(item => item.includes('app.page["pins"]'))
    // return keyArr

    const index = cheerioKeyArr[0].indexOf('= [{')
    const resultArr = JSON.parse(cheerioKeyArr[0].slice(index + 1))
    // return resultArr

    // 拼接图片Url，是用request下载
    // https://hbimg.huabanimg.com/be0104c0e147838f44ed79942fd44480fd8eaee6e7d4-7rUfO4_/fw/480/format/webp
    resultArr.forEach(item => {

        const url = `https://hbimg.huabanimg.com/${item.file.key}_/fw/480/format/webp`
        const fileId = item.file_id

        // 使用axios + buffer + fs.writeFileSync 存储数据
        axios.get(url, {
            responseType: 'arraybuffer'
        }).then(res => {
            const buffer = Buffer.from(res.data, 'binary')
            fs.writeFileSync(path.resolve(__dirname, `./huaban_images/${fileId}.webp`), buffer)
        }).catch(err => {
            console.error(err)
        })

        // 使用request + pipe + fs.createWriteStream
        // webp格式图片的优势
        // request(url).pipe(fs.createWriteStream(`./huaban_images/${fileId}.webp`))
    })

    // 保存到数据库
    saveData(resultArr)
}

module.exports = { getUrlListV2 }
