const axios = require('axios')
const fs = require('fs')
const path = require('path')

function getUrlList (page) {
    let searchUrl = `https://unsplash.com/napi/search/photos?query=food&xp=$per_page=20&page=${page}`;

    axios.get(searchUrl)
        .then(resp => {
            const data = resp.data;
            const results = data.results
            results.forEach(result => {
                const url = result.links.download
                console.log(url)
                // const id = result.id
                // axios.get(url, {
                //     responseType: 'arraybuffer'
                // })
                // .then(resp => {
                //     const buffer = Buffer.from(resp.data, 'binary')
                //     fs.writeFileSync(path.resolve(__dirname, `./unsplash_images/${id}.jpeg`), buffer)
                // }).catch(err => {
                //     console.log(err);
                // })
            })
    })
}

async function getUrlListAsync (page) {
    let searchUrl = `https://unsplash.com/napi/search/photos?query=food&xp=$per_page=20&page=${page}`;
    let { data } = await axios.get(searchUrl)
    let urlList = []
    data.results.forEach( (item) => {
        const url = item.links.download
        urlList.push(url)
    })
    console.log(urlList)
}

module.exports = { getUrlList, getUrlListAsync }