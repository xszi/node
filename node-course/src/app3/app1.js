// buffer / json

// const buffer = Buffer.from('你好世界')
// const jsonString = JSON.stringify(buffer)

// console.log(jsonString)

// const jsonObject = JSON.parse(jsonString)

// console.log(jsonObject)

// const buffer2 = Buffer.from(jsonObject)

// console.log(buffer2.toString('utf8'))

// const str = 'utf8'
// const str2 = 'utf-8'
// const str3 = 'UTF-8'
// const str4 = 'utf9'
// const str5 = 'gb2312'  // node 不认识的字符编码
// const str6 = 'gbk' // node 不认识的字符编码

// console.log(Buffer.isEncoding(str));
// console.log(Buffer.isEncoding(str2));
// console.log(Buffer.isEncoding(str3));
// console.log(Buffer.isEncoding(str4));
// console.log(Buffer.isEncoding(str5));
// console.log(Buffer.isEncoding(str6));

const buffer = Buffer.from('hello')
const myObj = {}
const str = 'aa'
const flag = true
const count = 4

console.log(typeof(buffer))

console.log(typeof(myObj))

console.log(typeof(str))

console.log(typeof(flag))

console.log(typeof(count))

console.log(Buffer.isBuffer(buffer))
console.log(Buffer.isBuffer(myObj))


