# Node 实现爬虫

### 1. 两个方面：

* 获取数据
* 存储数据

### 2. 数据请求

- request(superAgent)
    Request最强大的功能在于其CookieJar的功能，它能够保存每一次请求的cookie，让我们的请求和在浏览器中点击一样，我们甚至不用去设置每一次的cookie，他会根据请求的主机域从jar中自动匹配与实时更新。
    request中有个jar库，能够分析搜集返回的response，header, 记录登陆的信息，下次请求 在request header中带上模拟登陆
    node通过ioredis来调用Redis缓存response，header中的信息，下次登陆时带上这些信息
- axios
- node-fetch

### 3. 网页解析

    - cheerio
    ```
    ```
    - jsdom

    ```
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
    ```
    返回到前端网页便于查看
    使用路由来区分不同的版本，启动一个express/koa2/egg.js
    nodemon的使用

   <strong>跨越防爬虫</strong>

    - 设置等待时间
    - 设置请求头

        设置请求头的referer 、 User-Agent属性
        sleep()
        ```js
        // eg bigbigwork大作网图片爬虫 referer是什么，有什么作用？
        当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。
        服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。
        'referer': 'https://www.bigbigwork.com/tupian/image/20148309331.html'
        // User Agent
        包含了一个特征字符串，用来让网络协议的对端来识别发起请求的用户代理软件的应用类型、操作系统、软件开发商以及版本号。
        User-Agent: Mozilla/<version> (<system-information>) <platform> (<platform-details>) <extensions>
        ```
    - 采用代理ip（查一个举例）
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
    - 避开不可见元素陷阱 （查一个举例）
    ```css
        display: none;
        opacity: 0
    ```
    - 进行模拟登陆 （查一个举例）
        分析拿到cookie，设置请求访问
        https://www.cnblogs.com/Lumia1020/p/5329945.html

### 4. 存储数据方法

- Buffer + fs.writeFileSync

    返回的responseType一定要是ArrayBuffer类型吗？
    文件名chunk-hash

- pipe + fs.createWriteStream

### 5. 爬虫举例

- unsplash
- bigbigwork
- huaban

！！！爬小说/视频

抓取APP的数据（fiddle抓包工具）IOS如何操作，搜一下

### 5. 爬虫的前景

- 八爪鱼的商业模式

