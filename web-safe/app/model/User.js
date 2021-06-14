/**
 * 定义数据Schema
 */
 const Sequelize = require('sequelize');

module.exports = function (sequelize, dataTypes) {
    // 定义User模型
    return sequelize.define('User', {
            id: {
                type: dataTypes.UUID,
                defaultValue: dataTypes.UUIDV4,
                primaryKey: true
            },
            username: {
                type: dataTypes.STRING(50),
                allowNull: false,
                defaultValue: ''
            },
            password: {
                type: dataTypes.STRING(32),
                allowNull: false,
                defaultValue: ''
            }
        },
        {
            sequelize
        });
};
