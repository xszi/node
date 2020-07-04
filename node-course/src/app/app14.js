const dns = require('dns')

// 解析域名
// const domain = 'www.souhu.com'
// dns.resolve(domain, (error, address) => {
//     if(error) {
//         console.log(error)
//         return
//     }

//     console.log(address)
// })

// 反向解析
dns.reverse('114.114.114.114', (error, domain) => {
    console.log(domain)
})