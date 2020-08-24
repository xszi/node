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
// }).then(res => {
//     console.log(res);
// });
const fetch = require('node-fetch')
// node-fetch
fetch("https://unsplash.com/napi/search/photos?query=food&xp=&per_page=20&page=2", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "dpr": "1.5",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "viewport-width": "744",
    "cookie": "ugid=6a177638c55b179857c85f630eca57365311086; _ga=GA1.2.1731245643.1595074026; uuid=3a131710-c8ef-11ea-8597-a5907c5e8cb7; xpos=%7B%7D; azk=3a131710-c8ef-11ea-8597-a5907c5e8cb7; azk-ss=true; _gid=GA1.2.201177984.1597836799; lux_uid=159783680262518741; _gat=1; _sp_ses.0295=*; _sp_id.0295=0a8a73c8-4516-45ea-b9e1-ec471606da7d.1595074040.6.1597836876.1597562612.0faae217-50db-4668-9d13-3a223e1eb164"
  },
  "referrer": "https://unsplash.com/s/photos/food",
  "referrerPolicy": "origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(resp => resp.json()).then(res => {
    console.log(res);
});