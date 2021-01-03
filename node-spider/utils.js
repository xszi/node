const saveData = (data) => {
    const mongoose = require('mongoose')
    const uri = 'mongodb://localhost:27017/spider'

    // 使用新的url解析器，使用统一的拓扑结构 不使用会有警告
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
        if (error) {
            console.log(error)
            throw error
        } else {
            console.log('connection successful')

            const imgSchema = new mongoose.Schema({
                key: String,
                fileid: Number
            })

            mongoose.model('img', imgSchema)

            // 目前的Student表示数据库中特定的数据模式
            const Img = mongoose.model('img')
            
            // console.log(data, '555')
            data && data.forEach(item => {
                const img = new Img({
                    key: item.file.key,
                    fileid: item.file_id
                })
                img.save((error) => {
                    if (error) {
                        console.log(error)
                        throw error
                    } else {
                        console.log('save successful')
                    }
                })
            })
        }
    })
}

module.exports = {
    saveData
}