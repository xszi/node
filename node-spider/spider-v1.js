const axios = require('axios')
const fs = require('fs')
const path = require('path')

const page = 1;
let searchUrl = `https://unsplash.com/napi/search/photos?query=food&xp=$per_page=20&page=${page}`;

axios.get(searchUrl)
    .then(resp => {
        const data = resp.data
        console.log(data, 'data11111');
        const results = data.results
        results.forEach(result => {
            const url = result.links.download
            const id = result.id
            axios.get(url, {
                responseType: 'arraybuffer'
            })
            .then(resp => {
                const buffer = Buffer.from(resp.data, 'binary')
                fs.writeFileSync(path.resolve(__dirname, `./unsplash_images/${id}.jpeg`), buffer)
            }).catch(err => {
                console.log(err);
            })
        })
})