### 第三章 异步I/O

Node的基调：异步I/O，事件驱动和单线程。

Nginx与Node的区别：Nginx具备面向客户端管理连接的强大能力，但是它的背后依然受限于各种同步方式的编程语言。但Node却是全方位的，既可以作为服务器去处理客户端带来的大量并发请求，也能作为客户端网络中的各个应用进行并发请求。

#### 3.1 为什么要异步I/O？

* 用户体验

浏览器中Javascript在单线程上执行，而且它还与UI渲染共用一个线程，那意味着在执行脚本的时候UI渲染时处于停滞状态的。
> I/O 是昂贵的，分布式I/O是更昂贵的。

* 资源分配

计算机中的组件：I/O设备和计算设备。
异步I/O的调用示意图p50

#### 3.2 异步I/O实现现状

由于Window和*nix平台的差异，Node提供了libuv作为抽象封装层，使得所有平台兼容性的判断都由这一层来完成，并保证上层的Node与下层的自定义线程池及IOCP之间各自独立。

> 我们时常提到Node是单线程的，这里的单线程仅仅只是Javascript执行在单线程中罢了。在Node中，无论是*nix还是window平台，内部完成I/O任务的另有线程池。

#### 3.3 Node的异步I/O

* 事件循环
* 观察者
* 请求对象（从Javascript发起调用到内核执行完I/O操作过渡过程的中间产物。）

> Node经典的调用方式：从JavaScript调用Node的核心模块，核心模块调用C++内建模块，内建模块通过libuv进行系统调用。

* 执行回调

事件循环，观察者，请求对象，I/O线程池这四者构成了Node异步I/O模型的基本要素。

    在Node中，除了Javascript是单线程外，Node自身其实是多线程的，只是I/O线程使用的CPU较少。另一个需要重视的观点是，除了用户代码无法并行执行外，所有的I/O（磁盘I/O和网络I/O等）则是可以并行起来的。
    
#### 3.4 非I/O的异步API

* 定时器
* process.nextTick()
* setImmediate

```
//加入两个nextTick()回调函数
process.nextTick( ()=> {
    console.log('nextTick延迟执行1')
})
process.nextTick( ()=> {
    console.log('nextTick延迟执行2')
})

//加入两个setTmmediate()的回调函数
setImmediate( ()=> {
    console.log('setImmdiate延迟执行1')；
    //进入下次循环
    process.nextTick( ()=> {
        console.log('强势插入')
    })
})
setImmediate( ()=> {
    console.log('setImmdiate延迟执行2')；
})
console.log('正常执行')
//正常执行
//nextTick延迟执行1
//nextTick延迟执行2
setImmediate延迟执行1
强势插入
setImmediate延迟执行2
```

#### 3.5 事件驱动与高性能服务器

Node通过事件驱动的方式处理请求，无需为每一个请求创建额外的对应线程，可以省掉创建线程和销毁线程的开销，同时操作系统在调度任务时因为线程较少，上下文切换的代价很低。

    异步I/O实现，其主旨是使I/O操作与CPU操作分离
    事件循环是异步实现的核心