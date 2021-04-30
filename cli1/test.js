// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('你如何看待 Node.js 中文网？', (answer) => {
//   // TODO：将答案记录在数据库中。
//   console.log(`感谢您的宝贵意见：${answer}`);

//   rl.close();
// });

// var clui = require('clui');

// var Progress = clui.Progress;

// var thisProgressBar = new Progress(20);
// console.log(thisProgressBar.update(10, 30));

// or

// var thisPercentBar = new Progress(100);
// console.log(thisPercentBar.update(0.5));
// console.log(thisPercentBar.update(1));

const chalk = require('chalk');
 
console.log(chalk.red('Hello world!'));