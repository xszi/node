### 第四章 异步编程

#### 4.1 函数式编程

- 高阶函数

> 高阶函数是可以把函数作为参数，或者将函数作为返回值的函数。
```
function foo() {
    return function() {
        return x;
    }
}

<!--sort排序-->
var points = [3,5,8,1,44,80,132,88];
points.sort(function(a, b){
    return a - b; // return b - a
});
```
- 偏函数用法

> 偏函数用法是指创建一个调用另外一个部分 —— 参数或变量已经预置的函数 —— 的函数的额用法。

```
// 待优化代码
var toString = Object.prototype.toString

var isString = function (obj) {
    return toString.call(obj) == '[object String]'
}
var isFunction = function (obj) {
    return toString.call(obj) == '[object Function]'
}
// 优化代码, 工厂模式
var isType = function(type) {
    return function (obj) {
        return toString.call(obj) == '[object' + type + ']'
    }
}
var isString = isType('String')
var isFunction = isType('Function')
```

#### 4.2 异步编程的优势和难点

- 优势

> Node带来的最大特性莫过于基于事件驱动的非阻塞I/O模型。

JavaScript线程就像一个分配任务和处理结果的大管家， I/O线程池里的各个I/O线程都是小二，负责兢兢业业的完成分配来的任务，小二与管家之间互不依赖，可以保持整体的高效率。

- 难点

    难点1：异常处理
    
    第三章中提到，异步I/O的实现主营包含两个阶段： 提交阶段和处理结果。这两个阶段中间有事件循环的调度，两者互不关联。异步方法则通常在一个阶段提交请求后立即返回，因为异常并不一定发生在这个阶段，使用try-catch无效，使用try-catch只能捕获当次事件循环的异常。
    
    Node在处理异常上形成了一种约定，将异常作为回调函数的第一个实参传回，如果为空值，则表明异步调用没有异常抛出。
    
    自行编写异步方法遵循的原则：
    1). 必须执行调用者传入的回调函数；
    2). 正确传递回异常供调用者判断。
    ```
    var async = function(callback) {
        process.nextTick(function(){
            var results = something;
            if(error){
                return callback(error)
            }
            callback(null, results)
        })
    }
    ```
    
    难点2：函数嵌套过深(并行异步I/O)
    难点3：阻塞代码(wind...await)
    难点4：多线程编程
    > Web Workers: 通过将JavaScript执行与UI渲染分离，可以更好的利用多核CPU为大量计算服务。
    难点5：异步转同步
    
#### 4.3 异步编程解决方案

    事件发布/订阅模式
    Promise/Deferred模式
    流程控制库
    
- 事件发布/订阅模式

事件监听器模式是一种广泛用于异步编程的模式，是回调函数的事件化，又称发布订阅模式。

基本事件监听模式：addListener/on(), once(), removeListener(), removeAllListeners(), emit().

```
//订阅
emitter.on('event1', function(message){
    console.log(message)
})
// 发布
emitter.emit('event1', "I am message")
```

    1) 继承events模块
    
    ```
    var events = require('events');
    
    function Stream() {
        events.EventEmitter.call(this);
    }
    
    util.inherits(Stream, events.eventEmitter);
    ```
   Node在util模块中封装了继承方法，开发者可以通过这样的方式轻松继承EventEmitter类，利用事件机制解决业务问题。 
   
   2) 利用事件队列解决雪崩问题

<font color=blue>雪崩问题：</font>在高访问量，大并发量的情况下缓存失效的情景，此时大量的请求同时涌入数据库中，数据库无法同时承受如此大的查询请求，进而往前影响到网站整体的响应速度。

最开始代码：
    
```
    var select = function(callback){
        db.select("SQL", function(results){
            callback(results)
        });
    };
```
使用状态锁改进：
```
   var status = "ready";
   var select = function(callback){
       if(status === ready){
           status = "pending";
           db.select("SQL", function(results){
               status = ready;
               callback(results);
           })
       }
   }
```
再引入事件队列

```
   var proxy = new events.EventEmitter();
   var status = "ready";
   var select = function(callback){
       proxy.once("selected", callback); // 保证每一个回调只会执行一次
       if(status === ready){
           status = "pending";
           db.select("SQL", function(results){
               proxy.emit("seleted", results)
               status = ready;
           })
       }
   }
```
    3) 多异步之间的协作方案
    
使用偏函数和哨兵变量来处理：
```
var after = function(times, callback){
    var count = 0, results = {};
    return function(key, value){
        results[key] = value;
        count++;
        if(count === times){
            callback(results);
        }
    }
}
var done = after(times, render)
```

- Promise/Deferred 模式
