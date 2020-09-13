// fetch 请求
// fetch("https://unsplash.com/napi/search/photos?query=food&xp=&per_page=20&page=2", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
//     "dpr": "1.5",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "viewport-width": "744"
//   },
//   "referrer": "https://unsplash.com/s/photos/food",
//   "referrerPolicy": "origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// }).then(resp => resp.json()).then(res => {
//     console.log(res);
// });

// node-fetch
const axios = require('axios')
const fetch = require('node-fetch')

async function getUrlListFetch(page) {
    const result = await fetch("https://huaban.com/search/?q=food&category=photography&kezdae7k&page=2&per_page=20&wfl=1", {
        "headers": {
            "accept": "application/json",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-request": "JSON",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "_uab_collina=159756096371870507472295; UM_distinctid=173f60dc4ea223-0341d6ac4dd77a-3323767-190140-173f60dc4eb220; __auc=63e5b194173f60dcecfc9c3309b; __gads=ID=89dabf22c039da21:T=1597560972:S=ALNI_MZ1IKPR2u_rPCsSxzA6IK-xsoVg3Q; sid=s%3AU-MhuvX2ufEnnA7q5Ct3M8RFN0Gq6iwB.GtlvWgR9JDpwC%2BjnnFg3xvppUIizEXbLgzFRVRbQ3bw; _f=iVBORw0KGgoAAAANSUhEUgAAADIAAAAUCAYAAADPym6aAAACuUlEQVRYR%2B2WT0gUURzHP88gQkXpkAShFkKQGQQ6hRTMGBGR0S0PQlKQRIdYkyDr0MGLHoJcurUdysBDEUGURVQ7S0Hk6iFIiyDJhBALIYhFCvfFb3YW1nV3HHVWEprTg%2Fed976f378ZhdYar0cp5bm%2FSpt9M32ePpWAFCcSRNrbHUuhcJhwKOSs2yMREiUlniAaioEIcENBrFBcvkDkcjOW8hAzzXlrfGREww5AiIf%2FOZANs7O09ffTOjBgAaPAbeACMOFmoBUYkMQB1UAjcAWYAo4CiRw62S8DjqR1Cn74gV9SRmxLPKcey7aZrqhgrLbWkEhrOA68BypkX8pIpwwNAZuAcy6okWnMQ9cs5yn4EDhIdmnlAfkOPAL2Am%2Fd6AuIU1pumdUB0Ty6OgX30oFZTZAW9%2BLLwANATEpmpMSkVK66GUkbNN0IS%2Ba8dE6GAwXJnFqXenq429LC55oaunp7%2BVpVJVGX6D8F3gFPANsFGQTKgW7gFHAxo2%2BkxLJ10j%2F7gJPALdlX0BVoaeU9zMfU8mNkpRrfzf4fZKWh9vl%2BQTKiYyMH0HP9jge1rg2tr0OyXNbKrH%2BZ7U3bw6Oga0GNKathZz7vXrpsEPPbNsbLZpgs%2FZmysdx%2FLW0PdYParSzjmLbj553DLOPaQghH16wso17b8RHQj5W1R6bdvMc9L68uDVL5q5xDk9udd59VfgoCJH4CxRllGvt1dLiPIvUwZzZi8eck%2BaKajNM6Gr9JEVuVaRxcALKILjMjAtM4Vc2bzRMrBxEjOhZ%2FjeY%2BWlWrpoaOXCWj1wSIRFg5%2F1mDucrKhV0DGUn1yVmgU1nGnZwZSWkC6xG5owClJdMr2SEN7zVFs6eR0ytKH86ecl668K5XL9IQ0uylf9bzu2iO6JZxPm6cXv7U8jn%2BA5MV5DsSmLslHLQYyF%2BE5uEo80zUAQAAAABJRU5ErkJggg%3D%3D%2CWin32.1707.960.24; referer=https%3A%2F%2Fwww.google.com%2F; CNZZDATA1256903590=280937819-1597558257-https%253A%252F%252Fwww.baidu.com%252F%7C1599893247; __asc=da2f71ce174814881c2fa2d8a1e; BAIDU_SSP_lcr=https://www.google.com/; Hm_lvt_d4a0e7c3cd16eb58a65472f40e7ee543=1597884567,1599738102,1599885636,1599896847; _cnzz_CV1256903590=is-logon%7Clogged-out%7C1599896873256; Hm_lpvt_d4a0e7c3cd16eb58a65472f40e7ee543=1599896873"
        },
        "referrer": "https://huaban.com/search/?q=food&category=photography",
        "referrerPolicy": "unsafe-url",
        "body": null,
        "method": "GET",
        "mode": "cors"
    }).then(resp => resp.json())
    return result
}

module.exports = { getUrlListFetch }