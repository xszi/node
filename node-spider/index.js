const axios = require('axios')

axios.get('https://unsplash.com/napi/search/photos?query=food&xp=$per_page=20&page=2')
    .then(resp => {
        const data = resp.data
        const results = data.results
        results.forEach(result => {
            const url = result.links.download
            const id = result.id
            // console.log(url)
            axios.get(url, {
                responseType: 'arraybuffer'
            })
            .then(resp => {
                const buffer = Buffer.from(resp.data, 'binary')
                false.writeFileSync(path.reslove(__dirname, `./unsplash/${id}`), buffer)
            })
        })
})