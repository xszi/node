# 使用配置文件启动 mongodb 服务

## mongodb 的安装目录创建 mongo.conf 配置文件，文件内容如下：

```js
systemLog:
    destination: file
    path: D:\mongodb\log\mongo.log

storage:
    dbPath: D:\mongodb\db\
```

## mongodb 服务启动命令

    mongod --config D:\mongodb\mongo.config