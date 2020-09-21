# 使用Node.js 实现爬虫

> 网络爬虫（Web Spider），是一种按照一定规则，自动抓取万维网信息的程序或者脚本。

> 网络爬虫就是一个抓取网页的程序。

### 1. 两方面

* 获取数据
* 处理数据

### 2. 获取数据

- request

* superAgent

- axios

- node-fetch(fetch)

    [JS HTTP 请求库哪家强？Axios，Request，Superagent，Fetch 还是 Supertest](https://juejin.im/post/6844903736268029965)

### 3. 处理数据

#### 3.1 数据解析

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

#### 3.2. 存储数据

- Buffer + fs.writeFileSync

- pipe + fs.createWriteStream
- 存储数据库 (mongodb) 

### 4. 爬虫攻防

- 设置等待时间

  ```js
  setInterval(() => {}, XXX);
  ```

- 设置请求头

  设置请求头的 **referer** 、 **User-Agent** 属性

   **[referer](http://www.ruanyifeng.com/blog/2019/06/http-referer.html) **是什么？

  > 当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。
  > 服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。

  ```js
  'headers': {
      'referer': 'https://www.bigbigwork.com/tupian/image/20148309331.html' // eg bigbigwork大作网
  }
  ```

  ***Referer Control***  —— 一个控制Referer的[谷歌插件](https://browsernative.com/http-referer-control-chrome/)

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

- 避开不可见元素陷阱

    ```css
  display: none;
  opacity: 0
  ```

![不可见陷阱](https://github.com/xszi/node/blob/master/node-spider/%E4%B8%8D%E5%8F%AF%E8%A7%81%E9%99%B7%E9%98%B1.png)

  - 进行模拟登陆
      [**node.js实现模拟登录，自动签到领流量**](https://cnodejs.org/topic/54e96cf7ddce2d471403203f)
      
      [node爬虫进阶——登录](https://www.jianshu.com/p/87867f325184)
      
      [**用node.js实现验证码简单识别**](https://cnodejs.org/topic/56addaf524b0c1ec628ff0f6)  
      
      [一次基于Tensorflow+CNN的验证码识别之旅](https://www.jianshu.com/p/aa075424d2d2)

### 5. 爬虫举例

- unsplash
- huaban（**cheerio + jsdom**）
- bigbigwork（<strong>referer</strong>）

[APP的数据抓取（fiddle抓包工具）](https://www.cnblogs.com/111testing/p/6231215.html)

### 6. 想法积累

- IP爬虫，代理IP
- 模拟登陆领积分，发邮件通知等
- 批量注册账号，微博批量点赞
- 八爪鱼
