const axios = require('axios')
const fs = require('fs')
const path = require('path')
const request = require('request')


const page = 1;
const searchUrl = `https://www.bigbigwork.com/q?w=food&c=food&p=${page}&h=%E7%A9%BA%E9%97%B4%E5%85%A8%E9%83%A8&token=OTIzODkwNTEsbnVsbCxudWxsLHdhbHR6LDE1OTc4MzYwMzMyNjc%3D`;
const requestHeaders = {
    'referer': 'https://www.bigbigwork.com/tupian/image/20148309331.html'
}

axios.get(searchUrl, { 'headers': requestHeaders })
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
            // 1.使用axios + fs.writeFileSync + buffer；
            // axios.get(element.url, {
            //     responseType: 'arraybuffer',
            //     'headers': requestHeaders
            // })
            // .then(res => {
            //     // console.log(res)
            //     let buffer = Buffer.from(res.data, 'binary')
            //     fs.writeFileSync(path.resolve(__dirname, `./bigbigwork_images/${element.id}.webp`), buffer)
            // }).catch(err => {
            //     console.log(err);
            // })
            
            // 2. 使用request + fs.createWriteStream
            let img_filename = `${element.id}.webp`;  
            request({url: element.url, headers: requestHeaders}).pipe(fs.createWriteStream('./bigbigwork_images/'+ img_filename));
        })    
})
