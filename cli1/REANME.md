# cli

## 几个重要的库

- commander --- 命令行中的参数获取
- inquirer --- 命令行中的表单
- chalk --- 命令行中的可变颜色效果
- clui --- readLine 命令行中的loading效果
- child_process --- node 原生模块，提供一些方法让我们能够执行一些命令

## commander库
    命令 [可选] <必选> create [] <>

    bin(binary) 可执行二进制文件

    npm link 执行映射 npm cli --> node index.js

    软链(指针) / 硬链 (引用和拷贝的关系)

    ```js 硬链 ln link1.txt link2.txt
        -rw-r--r-- 2 jiuhua-pc 197121     7  8月  2 17:52 link1.txt
        -rw-r--r-- 2 jiuhua-pc 197121     7  8月  2 17:52 link2.txt
    ```

    ``` js 软链 ln -s link1.txt link3.txt
        // window好像看不出来
        lin3.txt --> link1.txt
    ```

    ```js
    // cli node index.js
    [ 'C:\\Program Files\\nodejs\\node.exe',
        'C:\\Users\\jiuhua-pc\\AppData\\Roaming\\npm\\node_modules\\cli\\index.js' ]
    ```
    ```js
    // cli --help node index.js --help
    [ 'C:\\Program Files\\nodejs\\node.exe',
        'C:\\Users\\jiuhua-pc\\AppData\\Roaming\\npm\\node_modules\\cli\\index.js',
        '--help' ]
    ```

    npm publish
