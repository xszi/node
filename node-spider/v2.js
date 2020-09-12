const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const { JSDOM } = require('jsdom')
const request = require('request')
const circularJSON = require('circular-json');


async function getUrlListV2 (page) {

    // 第一步：分析请求链接，找到爬虫目标所在返回数据结构中的位置
    const searchUrl = `https://huaban.com/search/?q=food&page=${page}&per_page=20&wfl=1`

    // 第二步：获取到数据，查看数据
    let { data } = await axios.get(searchUrl)
    // return data

    // 解析字符串(html字符串)
    const $ = cheerio.load(data);
    // return $('script')

    // 使用jsdom解析
    // const dom = new JSDOM(res.data);
    // console.log(dom.window.document.querySelector("script").textContent)
    
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
    const keyArr = content.filter(item => item.includes('app.page["pins"]'))[0].split(';').filter(item => item.includes('app.page["pins"]'))
    // return keyArr

    const index = keyArr[0].indexOf('= [{')
    const resultArr = JSON.parse(keyArr[0].slice(index + 1))
    return resultArr

    // 拼接图片Url，是用request下载
    // https://hbimg.huabanimg.com/be0104c0e147838f44ed79942fd44480fd8eaee6e7d4-7rUfO4_/fw/480/format/webp
    // autoprefixer 解决浏览器兼容问题，为css属性在不同浏览器上添加对应的前缀

}


// axios.get(searchUrl)
//     .then(resp => {
//         const $ = cheerio.load(resp.data);
//         const content = [];
//         $('script').each(function () {
//             const script = $(this).html();
//             if (script.includes('[{') && script.includes('}]') && script.includes('app.page["pins"]')) {
//                 content.push(script)
//             }
//         })
//         // console.log(content)
//         const startIndex = content[0].indexOf('[{');
//         const endIndex = content[0].indexOf('}]');
//         const strRes = content[0].slice(startIndex, endIndex+2);
//         const arrRes = JSON.parse(strRes)
//         const getImgUrl = (imgKey) => `https://hbimg.huabanimg.com/${imgKey}_/fw/480/format/webp`
//         let imgList = []
//         imgList = arrRes.map(element => {
//             return {
//                 id: element.pin_id,
//                 url: getImgUrl(element.file.key)
//             }
//         })
//         console.log(imgList, '111')
//         imgList.forEach(element => {
//             // 两种写文件到本地的方式：
//             // 1.使用buffer & fs.writeFileSync；
//             axios.get(element.url, {
//                 responseType: 'arraybuffer'
//             })
//             .then(res => {
//                 // console.log(res)
//                 // let buffer = Buffer.from(res.data, 'uft8')
//                 let buffer = Buffer.from(res.data, 'binary')
//                 fs.writeFileSync(path.resolve(__dirname, `./huaban_images/${element.id}.webp`), buffer)
//             }).catch(err => {
//                 console.log(err);
//             })
//             // 2. 使用request & createWriteStream
//             // const img_filename = `${element.id}.jpg`;  
//             // request(element.url).pipe(fs.createWriteStream('./images/'+ img_filename)); 
//         })
// })

module.exports = { getUrlListV2 }
