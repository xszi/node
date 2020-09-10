# Node 实现爬虫

### 1. 两方面

* 获取数据
* 数据处理

### 2. 数据请求

- request(superAgent)

    Request最强大的功能在于其CookieJar的功能，它能够保存每一次请求的cookie，让我们的请求和在浏览器中点击一样，我们甚至不用去设置每一次的cookie，他会根据请求的主机域从jar中自动匹配与实时更新。
    request中有个jar库，能够分析搜集返回的response，header, 记录登陆的信息，下次请求 在request header中带上模拟登陆

- axios
- node-fetch(fetch)

### 3. 数据解析

- cheerio

  ```js
  const cheerio = require('cheerio')
  const $ = cheerio.load('<h2 class="title">Hello world</h2>')
   
  $('h2.title').text('Hello there!')
  $('h2').addClass('welcome')
   
  $.html()
  // <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>
  ```

- jsdom

  ```js
  
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
  console.log(dom.window.document.querySelector("p").textContent); 
  // "Hello world"
  ```

### 4. 爬虫攻防

- 设置等待时间

  ```js
  sleep();
  ```

- 设置请求头

  设置请求头的 **referer** 、 **User-Agent** 属性

   **referer **是什么？

  > 当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。
  > 服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。

  ```js
  'headers': {
      'referer': 'https://www.bigbigwork.com/tupian/image/20148309331.html' // eg bigbigwork大作网
  }
  ```

  **User Agent** 是什么？

  > 包含了一个特征字符串，用来让网络协议的对端来识别发起请求的用户代理软件的应用类型、操作系统、软件开发商以及版本号。

  ```js
  'headers': {
      'User-Agent': Mozilla/<version> (<system-information>) <platform> (<platform-details>) <extensions>
  }
  ```

- 采用代理 **ip**

    ```js
  request({
      //检测网址为百度的某个js文件，速度快，文件小，非常适合作为检测方式
      url:'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js',
      proxy: `${proxy.type.toLowerCase()}://${proxy.ip}:${proxy.port}`,
      method:'GET',
      //这里延迟使用了2000，如果希望通过检测的ip多一些，可以适当延长
      timeout: 2000,
      headers,
  } ,function(err, response,body){
      if(!err && response.statusCode == 200){
          console.log(proxy.ip+' 链接成功：')
          resolve()
      } else {
          console.log(proxy.ip+' 链接失败')
          removeIp(proxy.ip)
          resolve()
      }
  })
    ```

- 避开不可见元素陷阱 （如图）

    ```css
  display: none;
  opacity: 0
    ```

![不可见陷阱](https://github.com/xszi/node-study/blob/master/node-spider/%E4%B8%8D%E5%8F%AF%E8%A7%81%E9%99%B7%E9%98%B1.png)

  - 进行模拟登陆
      [分析拿到cookie，设置请求访问](https://www.cnblogs.com/Lumia1020/p/5329945.html)

### 5. 存储数据方法

- Buffer + fs.writeFileSync

    返回的responseType一定要是ArrayBuffer类型吗？
    文件名chunk-hash

- pipe + fs.createWriteStream

### 6. 爬虫举例

- unsplash
- bigbigwork（<strong>referer</strong>）
- huaban（**cheerio + jsdom**）

[APP的数据抓取（fiddle抓包工具）](https://www.cnblogs.com/111testing/p/6231215.html)

### 7. 爬虫的前景

- 八爪鱼的商业模式
- 使用路由来区分不同的版本，启动一个express/koa2/egg.js
- nodemon的使用
- 返回到前端网页便于查看
