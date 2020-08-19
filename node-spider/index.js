const axios = require('axios')
const fs = require('fs')
let request = require('request')
const path = require('path')
const cheerio = require('cheerio');	

const page = 1;
let searchUrl = `https://huaban.com/search/?q=%E6%A0%91&kdwqmi48&page=${page}2&per_page=20&wfl=1`;

axios.get(searchUrl)
    .then(resp => {
        var $ = cheerio.load(resp.data);
        const content = [];
        $('script').each(function () {
            var script = $(this).html();
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
            // 两种写文件到本地的方式： 1.使用buffer；2. 使用createWriteStream
            axios.get(element.url, {
                responseType: 'arraybuffer'
            })
            .then(res => {
                // console.log(res)
                let buffer = Buffer.from(res.data, 'binary')
                fs.writeFileSync(path.resolve(__dirname, `./images/${element.id}.webp`), buffer)
            }).catch(err => {
                console.log(err);
            })
            // const img_filename = `${element.id}.jpg`;  
            // request.head(element.url, (err, res, body) => {
            //     if(err){
            //         console.log(err);
            //     }
            // });
            // request(element.url).pipe(fs.createWriteStream('./images/'+ img_filename)); 
            
        })
})
