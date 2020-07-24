const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/mytest'

// 使用新的url解析器，使用统一的拓扑结构 不使用会有警告
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if (error) {
        console.log(error)
        throw error
    } else {
        console.log('connection successful')

        const parentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            address: String
        })

        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            address: String,
            married: Boolean,
            parents: parentSchema
        })

        mongoose.model('student', studentSchema)

        // 目前的Student表示数据库中特定的数据模式
        const Student = mongoose.model('student')


        const student = new Student({
            name: 'tttt',
            age: 20,
            address: 'tianjin',
            married: false,
            parents: {
                name: 'lisi',
                age: 50,
                address: 'dalian'
            }
        })

        student.save((error) => {
            if (error) {
                console.log(error)
                throw error
            } else {
                console.log('save successful')

                Student.find({}, (error, docs) => {
                    if (error) {
                        console.log(error)
                        throw error
                    } else {
                        console.log(docs)
                        mongoose.connection.close()

                        // docs.forEach(doc => {
                        //     doc.remove()
                        // })
                    }
                })
            }
        })
    }
})