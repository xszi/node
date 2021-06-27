const express = require('express');
const jwt = require("jsonwebtoken");

const Sequelize = require('sequelize');
const UserModel = require('../model/User')
const TodolistModel = require('../model/Todolist')
const {
    dataBaseConnectionConfig
} = require('../constants/index')

const {
    sckemas,
    loginName,
    password,
    database
} = dataBaseConnectionConfig

const sequelize = new Sequelize(sckemas, loginName, password, database);

const user = UserModel(sequelize, Sequelize.DataTypes)
const todolist = TodolistModel(sequelize, Sequelize.DataTypes)

const secret = 'token';

let router = express.Router();

function isLogin(req, res, next) {
    //检测cookie上面使用username属性 如果有 那么证明登录成功过 否正跳到登录页面
    const {
        username
    } = req.cookies;
    // console.log("加密cookies", cookie.parse(req.headers.cookie))
    if (username) {
        next();
    } else {
        res.redirect("/login");
    }
}

router.get('/login', function (req, res) {
    res.render("login");
});

router.get('/home', isLogin, function (req, res) {
// router.get('/home', function (req, res) {
    res.render("home")
});

router.get("/", isLogin, function (req, res) {
    res.redirect("login")
})

router.post("/login", toLogin);

router.get("/xss", async (req, res) => {
    const { query } = req;
    let result = await todolist.findOne({
        where: {
            username: 'xszi',
            title: 'xss'
        }
    })

    if (result) {
        res.render('xss', {
            username: result.dataValues.username,
            title: result.dataValues.title,
            content: result.dataValues.content

            // test: result.dataValues.username
            // test: '<script>alert(1)</script>' // 用一些库将返回的字段进行过滤处理
            // test: '<script src="http://localhost:5000/xss.html"></script>'
        })
    }
});

async function toLogin(req, res) {
    let {
        username,
        password
    } = req.body;
    const result = await user.findAll({
        where: {
            username: username,
            password: password
        }
    });
    if (result && result.length) {
        const expTime = 60 * 20; // 过期时间20分钟
        const token = jwt.sign({
            'id': result[0].id
        }, secret, {
            expiresIn: expTime
        })

        res.cookie('username', username, {
            maxAge: 1 * 86400 * 1000,
            // httpOnly: true,
            // sameSite: 'None',
            // secure: true, // 只有https才可以用
            // signed: true,
            // domain: 'localhost',
            // path: '/'
        })
        res.status(200).json({
            message: '请求成功',
            data: token
        })
        // res.redirect('/home')
        res.end();
    } else {
        res.render('error')
    }
}


module.exports = router;