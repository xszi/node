exports.errorCode = {
  // 正常
  0: 'success',

  // 数据库无此数据 || 查询失败
  2: null,

  // 数据创建失败
  3: null,

  // 数据删除失败
  4: null,

  // 数据更新失败
  5: null,

  401: '登录失效，请重新登录',

  400: '参数效验失败',

  500: '服务器内部错误'
}

// 消息枚举
exports.MessageTitle = {
  0: '系统消息'
}

// 站内消息类型
exports.messageType = {
  // 系统消息
  system: {
    welcome: {
      type: 0,
      content: ''
    }
  }
}

exports.dataBaseConnectionConfig = {
    sckemas: 'mytest',
    loginName: 'root',
    password: '123456',
    database: {
        host: 'localhost', // 数据库服务器地址
        dialect: 'mysql', // 数据库类型
        define: {
            timestamps: false //启用或不启用Sequelize为开发者自动添加时间，默认为true。
        }
    }
}
