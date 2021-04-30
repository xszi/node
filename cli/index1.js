// #!/usr/bin/env node
const { program } = require('commander')
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const childProcess = require('child_process')
program
    .arguments('<dir')
    .description('this is a dir')
    .action((dir) => {
        console.log('--dir', dir) // 打印出操作命令
        inquirer.prompt([
            {
                type: 'list',
                name: 'framwork',
                message: 'which framework do you like best?',
                choices: [
                    'react',
                    'vue'
                ]
            }
        ])
        .then(answer => {
            console.log('result', dir, answer)
            // fs.writeFileSync()
            // git clone XXX dir
            const fullDir = path.resolve(process.cwd(), dir)
            console.log('---fullDir', fullDir)
            const command  = `git clone https://github.com/loatheb/${answer.framwork}-boilerplate.git `
            console.log('--command', command)
            childProcess.execSync(command)
        })
    })

program.parse(process.argv)