### Cli

`cli`是一种通过命令行来交互的工具应用，全称`Command Line Interface`。比较常见的就是 `create-react-app`，`vue-cli`等，他们都能够将一段`js`脚本，通过封装为可执行代码的形式，进行一些操作。

使用`cli`之后呢，能快速的创建一些我们业务中的样板文件，比如快速创建一个项目内容，配置公共的`eslint`，`webpack`等等配置工具

在封装这些内容之前，我们需要使用如下的几个库：

* commander：命令行中的参数获取
* inquirer：命令行的表单
* chalk：命令行中的可变颜色效果
* clui：命令行中的loading效果
* child_process：node原生模块，提供一些方法让我们能够执行新的命令

`child_procee`中有一些方法，比如`exec`等，`exec`方法用于新建一个子进程，然后缓存它的运行结果，运行结束后调用回调函数

我们这里可以使用`execSync`，它能够执行一些我们linux中的命令

### 命令行参数

```js
// index.js
console.log(process.argv)
```

~~~
// 空格分隔
node index.js
~~~

```
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\jiuhua-pc\\Desktop\\cli\\index.js'
]
```

~~~
node index.js --help --version
~~~

```
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\jiuhua-pc\\Desktop\\cli\\index.js',
  '--help',
  '--version'
]
```

### commander库

```js
const { program } = require('commander');

program
    .arguments('<dir>')
    .description('this is cli written directory')
    .action((dir) => {
        console.log(dir);
    })

program.parse(process.argv)
```
~~~
node index.js
// error: missing required argument 'dir'
~~~
~~~
node index.js -h
// error: missing required argument 'dir'
~~~
```
Usage: index [options] <dir>

this is cli written directory

Options:
  -h, --help  display help for command
```

### 硬链和软链

### inquirer库

### 插件开发模式（就是一个函数）

### 改写输出结果

### git clone

### chalk

### clui


实现内容如下：
1. 两种括号代表选填和必填
2. --help 举例
3. 插件
4. process.cwd()
5. git clone下载
6. inquirer
7. child_process
8. chalk
9. clui
 
