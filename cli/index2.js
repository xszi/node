#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

let config = {}
try {
    config = require('./cli-config.js')
} catch (e) {}

const { plugins = [] } = config


program
    .arguments('<dir>')
    .description('this is cli written directory')
    .action((dir) => {

        inquirer.prompt([
            {
                type: 'list',
                name: 'framework',
                message: 'which framework do you like best',
                choices: [
                    'react',
                    'vue'
                ]
            }
        ])
        .then((answer) => {
            // console.log(answer, 'jjjj');
            const content = fs.readFileSync(path.resolve(__dirname, './index.boilerplate'), 'utf8')
            let result = content.replace('__template', answer.framework)

            plugins.forEach(plugin => {
                const pluginModule = require(`@module-plugin-${plugin}`)
                result = pluginModule(result, dir)
            })

            fs.writeFileSync(path.resolve(process.cwd(), dir), result, 'utf8')
        })
    })

program.parse(process.argv)