#!/usr/bin/env node

const { program } = require('commander')

// console.log('hello cli')
// console.log(process.argv)

program
    .arguments('<dir>')
    .description('this is a directory')
    .action((dir) => {
        console.log('--dir', dir)
    })

program.parse(process.argv)
