const util = require('util')

const obj = {
    name: 'zhangshan',
    address: 'xiamen',
    age: 25,
    married: false,
    getAge: function() {
        return this.age
    }
}

const str = util.inspect(obj, {
    'colors': true
})

console.log(str)