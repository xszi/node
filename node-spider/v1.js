const axios = require('axios')
const fs = require('fs')
const path = require('path')
const request = require('request')

function getUrlListV1 (page) {
    // let searchUrl = `https://unsplash.com/napi/search/photos?query=food&xp=$per_page=20&page=${page}`;

    // 使用axios + buffer + fs.writeFileSync
    // axios.get(searchUrl)
    // .then(resp => {
    //     const data = resp.data;
    //     const results = data.results
    //     results.forEach(result => {
    //         const url = result.links.download
    //         console.log(url)
    //         const id = result.id
    //         axios.get(url, {
    //             responseType: 'arraybuffer'
    //         })
    //         .then(resp => {
    //             const buffer = Buffer.from(resp.data, 'binary')
    //             fs.writeFileSync(path.resolve(__dirname, `./unsplash_images/${id}.jpeg`), buffer)
    //         }).catch(err => {
    //             console.log(err);
    //         })
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // })

    
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p><script>11111</script>`);
    console.log(dom.window.document.querySelector("script").textContent); 

    // console.log('get data')
    // 使用request
    // request({url: searchUrl}, (error, response, body) => {
    //     //Do Something with the response
    //     if (error) {
    //         console.log(error)
    //     } else {
    //         console.log(response.body.results)
    //         return response.body.results
    //     }
    // });
}

async function getUrlListAsyncV1 (page) {
    let searchUrl = `https://unsplash.com/napi/search/photos?query=food&xp=$per_page=20&page=${page}`;
    let { data } = await axios.get(searchUrl)
    let urlList = []
    data.results.forEach( (item) => {
        const url = item.links.download
        urlList.push(url)
    })
    console.log(urlList)
    return data
}

module.exports = { getUrlListV1, getUrlListAsyncV1 }

// UnhandledPromiseRejectionWarning: Error: connect ETIMEDOUT 151.101.1.181:443     at TCPConnectWrap.afterConnect [as oncomplete]