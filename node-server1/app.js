var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
//加载body-parser，用来处理(解析)post提交过来的数据
var bodyParser = require('body-parser');

//加载cookie模块
var Cookies = require('cookies');
var cookieParser = require('cookie-parser');
// mongoose
var mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../server/public')));

//body-parser设置
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', require('./routes/api'));

//设置cookie
var User = require('./models/User');
app.use(function (req, res, next) {
    req.cookies = new Cookies(req,res);
    //解析登录用户的cookie信息
    req.userInfo = {};
    if(req.cookies.get('userInfo')){
        try{
            req.userInfo = JSON.parse(req.cookies.get('userInfo'));
            //获取当前登录用户的类型，是否是管理员
            User.findById(req.userInfo._id).then(function (userInfo) {
                req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
                next();
            })
        }catch (e){
            next();
        }
    }else{
        next();
    }
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

//链接数据库
var dataUrl = 'mongodb://120.79.95.201:27017/'
mongoose.connect(dataUrl, function (err, res) {
    if(err){
        console.log("数据库连接失败！");
        console.log(err, "err")
    }else{
        console.log("数据库连接成功！");
    }
});

app.get('/', (req, res) => {
    res.redirect('/web/index.html')
})
