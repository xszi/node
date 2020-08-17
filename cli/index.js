#!/usr/bin/env node
// 是告诉机器，要用node 来执行这个文件

const { program } = require('commander')
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')
const chalk = require('chalk');
// console.log('hello cli')
// console.log(process.argv)

program
    .arguments('<dir>') // cli 后面必填参数，不填参数会报错
    .description('this is a directory')
    .action((dir) => {
        // console.log('--dir', dir)
        inquirer.prompt([
            {
                type: 'list',
                name: 'framework',
                message: 'which framework do you like?',
                choices: [
                    'react',
                    'vue'
                ]
            }
        ])
        .then((answers) => {
            console.log('result', dir, answers)
            // fs.writeFileSync() 自已创建比较复杂
            // git clone xxx dir 使用git下载
            const fullDir = path.resolve(process.cwd(), dir)
            console.log('fullDir:', fullDir)
            const command = `git clone https://github.com/loatheb/${answers.framework}-boilerplate.git`
            console.log(chalk.red(command))
            console.log(chalk.green("That's awesome!"))
            console.log(chalk.keyword('orange')('Yay for orange colored text!'));
            console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
            console.log(chalk.hex('#DEADED').bold('Bold gray!'));
            // childProcess.execSync(command)
            console.log(chalk.green(
                'I am a green line ' +
                chalk.blue.underline.bold('with a blue substring') +
                ' that becomes green again!'
            ));
        })
    })

program.parse(process.argv)
