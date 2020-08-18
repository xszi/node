const axios = require('axios')
const fs = require('fs')
let request = require('request')
const path = require('path')
const cheerio = require('cheerio');	

// // axios.get('https://unsplash.com/napi/search/photos?query=food&xp=$per_page=20&page=2')
// //     .then(resp => {
// //         const data = resp.data
// //         console.log(data, 'data11111');
//         // const results = data.results
//         // results.forEach(result => {
//         //     const url = result.links.download
//         //     const id = result.id
//         //     // console.log(url)
//         //     axios.get(url, {
//         //         responseType: 'arraybuffer'
//         //     })
//         //     .then(resp => {
//         //         const buffer = Buffer.from(resp.data, 'binary')
//         //         fs.writeFileSync(path.resolve(__dirname, `./unsplash/${id}`), buffer)
//         //     })
//         // })
// // })

axios.get('https://huaban.com/search/?q=%E6%A0%91&kdwqmi48&page=2&per_page=20&wfl=1')
    .then(resp => {
        const data = resp.data
        var $ = cheerio.load(data);
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
            // axios.get(element.url, {
            //     responseType: 'arraybuffer'
            // })
            // .then(res => {
            //     // console.log(res)
            //     let buffer = Buffer.from(res.data, 'binary')
            //     fs.writeFileSync(path.resolve(__dirname, `./unsplash/${element.id}.`), buffer)
            // }).catch(err => {
            //     console.log(err);
            // })
            const img_filename = `${element.id}.jpg`;  
            request.head(element.url, (err, res, body) => {
                if(err){
                    console.log(err);
                }
            });
            request(element.url).pipe(fs.createWriteStream('./images/'+ img_filename)); 
        })
})