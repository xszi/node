# Node 实现爬虫

### 1. 两个方面：

* 获取数据
* 存储数据

### 2. 数据获取途径：

- axios
- request
- node-fetch

   <strong>跨越防爬虫</strong>

    - 设置等待时间
    - 设置请求头

        设置请求头的referer 、 User-Agent属性

        ```js
        // eg bigbigwork大作网图片爬虫
        'referer': 'https://www.bigbigwork.com/tupian/image/20148309331.html'
        ```
    - 采用代理ip
    - 避开不可见元素陷阱
    - 进行模拟登陆

### 3. 存储数据方法:

- Buffer + fs.writeFileSync
- pipe + fs.createWriteStream

### 4. 爬虫举例

- unsplash
- bigbigwork
- huaban

！！！爬小说或视频

### 5. 爬虫的前景

- 八爪鱼的商业模式

