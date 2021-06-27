const express = require('express');
const URL = require('url');
// const getAES = require('../password')
const Sequelize = require('sequelize');
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
const todolist = TodolistModel(sequelize, Sequelize.DataTypes)

let router = express.Router();

router.get('/getDataList', async function (req, res) {
    const {
        cookies,
        name,
        headers,
        body
    } = req;
    // res.setHeader("Content-Type", 'text/palin;charset=utf-8');
    if (cookies.username) {
        const results = await todolist.findAll({
            where: {
                username: cookies.username
            }
        });
        if (results) {
            // res.json(200,{message:'请求成功'})
            res.status(200).json({
                message: '请求成功',
                data: results,
            })
        } else {
            res.render("error");
        }
    } else {
        res.json(401, {
            message: '未登录'
        })
    }
})
router.post('/setDataList', async function (req, res) {
    let {
        cookies,
        body,
        headers: {
            referer,
            times,
            nonce,
            token
        },
    } = req;
    var p = URL.parse(referer);

    let results = await todolist.create({
        username: cookies.username,
        title: body.title,
        content: body.content
    })

    if (results) {
        res.status(200).json({
            message: '请求成功',
        })
    } else {
        res.json(400, {
            message: '请求失败'
        })
    }
    // console.log('哈哈哈哈', p)
    /* 校验referer */
    // if(p.href !== 'http://localhost:4000/home') throw '校验referer-非法请求'
    /* 校验nonce */
    // const bol = getAES(token, times) === nonce;
    // if (!bol) throw '校验nonce-非法请求'
})

router.post('/deleteComment', async function (req, res) {
    let {
        cookies,
        body,
        headers: {
            referer,
            times,
            nonce,
            token
        },
    } = req;
    var p = URL.parse(referer);
    if (cookies.username) {
        const results1 = await todolist.findOne({
            where: {
                id: body.id
            }
        });
        if (results1) {
            const results2 = await todolist.destroy({
                where: {
                    id: body.id
                }
            });
            if (results2) {
                // res.json(200,{message:'请求成功'})
                res.status(200).json({
                    message: '删除成功',
                    data: results2,
                })
            } 
        } else {
            res.json(400, {
                message: '请求失败'
            })
        }

    }
})

module.exports = router;