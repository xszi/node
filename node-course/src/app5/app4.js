const EventEmitter = require('events')

const emitter = new EventEmitter();

// 不使用once会死循环
emitter.once('newListener', (event, listener) => {
    if(event === 'myEvent') {
        emitter.on('myEvent', () => {
            console.log('hello')
        })
    }
})

emitter.on('myEvent', () => {
    console.log('world')
})

emitter.emit('myEvent')