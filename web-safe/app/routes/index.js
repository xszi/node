const express = require('express');
// const crypto = require("crypto");
// var cookie = require('cookie');
// const jwt = require("jsonwebtoken");

const Sequelize = require('sequelize');
const UserModel = require('../model/User')
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

// const secret = 'token';

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
    res.render("home")
});

router.get("/", isLogin, function (req, res) {
    res.redirect("login")
})

router.post("/login", toLogin);

async function toLogin (req, res) {
    let {
        username,
        password
    } = req.body;
    console.log(username, password, 'XXXX');
    const result = await user.findAll({
        where: {
            username: username
        }
    })
    // const result = await user.findOne({
    //     where: {
    //         username: username,
    //         password: password
    //     }
    // });
    console.log(result, 'kkkkk');
}


module.exports = router;