const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio');
const request = require('request')


const page = 1;
const searchUrl = `https://huaban.com/search/?q=food&page=${page}&per_page=20&wfl=1`;

axios.get(searchUrl)
    .then(resp => {
        const $ = cheerio.load(resp.data);
        const content = [];
        $('script').each(function () {
            const script = $(this).html();
            if (script.includes('[{') && script.includes('}]') && script.includes('app.page["pins"]')) {
                content.push(script)
            }
        })
        // console.log(content)
        const startIndex = content[0].indexOf('[{');
        const endIndex = content[0].indexOf('}]');
        const strRes = content[0].slice(startIndex, endIndex+2);
        const arrRes = JSON.parse(strRes)
        const getImgUrl = (imgKey) => `https://hbimg.huabanimg.com/${imgKey}_/fw/480/format/webp`
        let imgList = []
        imgList = arrRes.map(element => {
            return {
                id: element.pin_id,
                url: getImgUrl(element.file.key)
            }
        })
        console.log(imgList, '111')
        imgList.forEach(element => {
            // 两种写文件到本地的方式：
            // 1.使用buffer & fs.writeFileSync；
            axios.get(element.url, {
                responseType: 'arraybuffer'
            })
            .then(res => {
                // console.log(res)
                let buffer = Buffer.from(res.data, 'binary')
                fs.writeFileSync(path.resolve(__dirname, `./huaban_images/${element.id}.webp`), buffer)
            }).catch(err => {
                console.log(err);
            })
            // 2. 使用request & createWriteStream
            // const img_filename = `${element.id}.jpg`;  
            // request(element.url).pipe(fs.createWriteStream('./images/'+ img_filename)); 
        })
})
