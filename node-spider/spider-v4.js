const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio');
const request = require('request')


const page = 1;
const searchUrl = `https://www.bigbigwork.com/q?w=food&c=food&p=${page}&h=%E7%A9%BA%E9%97%B4%E5%85%A8%E9%83%A8&token=OTIzODkwNTEsbnVsbCxudWxsLHdhbHR6LDE1OTc4MzYwMzMyNjc%3D`;
const headers = {
    'referer': 'https://www.bigbigwork.com/tupian/image/20148309331.html'
}

axios.get(searchUrl, { 'headers': headers })
    .then(resp => {
        const resList = resp.data.data;
        let imageList = [];
        imageList = resList.map((element) => {
            return {
                id: element.idStr,
                url: element.bUrl
            }
        })
        console.log(imageList);

        imageList.forEach(element => {
            // 两种写文件到本地的方式：
            // 1.使用buffer；
            axios.get(element.url, {
                responseType: 'arraybuffer',
                'headers': headers
            })
            .then(res => {
                // console.log(res)
                let buffer = Buffer.from(res.data, 'binary')
                fs.writeFileSync(path.resolve(__dirname, `./bigbigwork/${element.id}.webp`), buffer)
            }).catch(err => {
                console.log(err);
            })
            // 2. 使用createWriteStream
            // const img_filename = `${element.id}.jpg`;  
            // request.head(element.url, { headers: headers }, (err, res, body) => {
            //     if(err){
            //         console.log(err);
            //     }
            // });
            // request(element.url).pipe(fs.createWriteStream('./images/'+ img_filename)); 
        })    
})
