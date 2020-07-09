// const buffer = Buffer.alloc(128)

// const length1 = buffer.write('helloworld', 'utf8')

// const length2 = buffer.write('helloworld你好', 'utf8') // 一个中文三个字节

// console.log(('byte count:' + length1 + '-' + length2));

// const buffer1 = Buffer.from('hello')
// const buffer2 = Buffer.from('world')

// // h在w前（字母表）
// const compareResult = buffer1.compare(buffer2)

// console.log(compareResult)

// const buffer = Buffer.alloc(3)

// 不是赋值，而是赋的ASIIC码
// buffer[0] = 65
// buffer[1] = 66
// buffer[2] = 67

// console.log(buffer.toString('utf8'))

// const str = 'abcde天'
// const buffer = Buffer.from(str)

// console.log(str.length)
// console.log(buffer.length)

// console.log(buffer)
// console.log(buffer.toString('utf8'))

// const buffer1 = Buffer.from('hello')
// const buffer2 = Buffer.from('world')
// const buffer3 = Buffer.from('welcome')
// const buffer4 = Buffer.from('你好')

// const bufferArray = [buffer1, buffer2, buffer3, buffer4]

// const bufferResult = Buffer.concat(bufferArray, buffer1.length + buffer2.length + buffer3.length + buffer4.length)

// console.log(bufferResult.length)

// console.log(bufferResult.toString())