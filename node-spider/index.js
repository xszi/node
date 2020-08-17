const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio');

// axios.get('https://unsplash.com/napi/search/photos?query=food&xp=$per_page=20&page=2')
//     .then(resp => {
//         const data = resp.data
//         console.log(data, 'data11111');
        // const results = data.results
        // results.forEach(result => {
        //     const url = result.links.download
        //     const id = result.id
        //     // console.log(url)
        //     axios.get(url, {
        //         responseType: 'arraybuffer'
        //     })
        //     .then(resp => {
        //         const buffer = Buffer.from(resp.data, 'binary')
        //         fs.writeFileSync(path.resolve(__dirname, `./unsplash/${id}`), buffer)
        //     })
        // })
// })

axios.get('https://huaban.com/search/?q=%E6%A0%91&kdwqmi48&page=2&per_page=20&wfl=1')
    .then(resp => {
        const data = resp.data
        // console.log(data, 'data2222');
        var $ = cheerio.load(data);
        // var t = $('html').find('.pin');
        // console.log(t)
        // console.log($('script').text())
        const content = [];
        $('script').each(function () {
            var script = $(this).html();
            // script就是js代码了
            // console.log(typeof script)
            // script = script.match(/\[\{(\S*)\}\]/)[1];
            if (script.includes('"key"'))
            content.push(script)
            // console.log(script.length);
        })
        console.log(content[1].match(/\[\{(\S*)\}\]/))
        // const results = data.results
        // results.forEach(result => {
        //     const url = result.links.download
        //     const id = result.id
        //     // console.log(url)
        //     axios.get(url, {
        //         responseType: 'arraybuffer'
        //     })
        //     .then(resp => {
        //         const buffer = Buffer.from(resp.data, 'binary')
        //         fs.writeFileSync(path.resolve(__dirname, `./unsplash/${id}`), buffer)
        //     })
        // })
})

// function parseHtml(html) {
//     let $ = cheerio.load(html);
//     let hrefList = $('.album_page .glide .slide dl a');
//     console.log(hrefList, '22222')
//     return (Array.from(hrefList)).map((ele) => {
//         return 'http://www.meisupic.com/' + $(ele).attr('href')
//     });
// }

// const $ = cheerio.load('<h2 class="title">Hello world</h2>')
 
// $('h2.title').text('Hello there!')
// $('h2').addClass('welcome')
 
// console.log($.html())