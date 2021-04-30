const chalk = require('chalk');
 
// console.log(chalk.green('Hello world!'));

// const log = console.log;

// log(`
//     CPU: ${chalk.red('90%')}
//     RAM: ${chalk.green('40%')}
//     DISK: ${chalk.yellow('70%')}
// `);

// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');
 
// console.log(error('Error!'));
// console.log(warning('Warning!'));


// var CLI = require('clui'),
//     clc = require('cli-color');
 
// var Line          = CLI.Line,
//     LineBuffer    = CLI.LineBuffer;
 
// var outputBuffer = new LineBuffer({
//   x: 0,
//   y: 0,
//   width: 'console',
//   height: 'console'
// });
 
// var message = new Line(outputBuffer)
//   .column('Title Placehole', 20, [clc.green])
//   .fill()
//   .store();
 
// var blankLine = new Line(outputBuffer)
//   .fill()
//   .store();
 
// var header = new Line(outputBuffer)
//   .column('Suscipit', 20, [clc.cyan])
//   .column('Voluptatem', 20, [clc.cyan])
//   .column('Nesciunt', 20, [clc.cyan])
//   .column('Laudantium', 11, [clc.cyan])
//   .fill()
//   .store();
 
// var line;
// for(var l = 0; l < 20; l++)
// {
//   line = new Line(outputBuffer)
//     .column((Math.random()*100).toFixed(3), 20)
//     .column((Math.random()*100).toFixed(3), 20)
//     .column((Math.random()*100).toFixed(3), 20)
//     .column((Math.random()*100).toFixed(3), 11)
//     .fill()
//     .store();
// }
  
// outputBuffer.output();

// var Sparkline = require('clui').Sparkline;
// var reqsPerSec = [10,12,3,7,12,9,23,10,9,19,16,18,12,12];
 
// console.log(Sparkline(reqsPerSec, 'reqs/sec'));

// var os   = require('os'),
//     clui = require('clui');
 
// var Gauge = clui.Gauge;
 
// var total = os.totalmem();
// var free = os.freemem();
// var used = total - free;
// var human = Math.ceil(used / 1000000) + ' MB';
 
// console.log(Gauge(used, total, 20, total * 0.8, human));

// var clui = require('clui');
 
// var Progress = clui.Progress;
 
// var thisProgressBar = new Progress(20);
// console.log(thisProgressBar.update(10, 30));
 
// // or
 
// var thisPercentBar = new Progress(20);
// console.log(thisPercentBar.update(0.4));

var CLI = require('clui'),
    Spinner = CLI.Spinner;
 
var countdown = new Spinner('Exiting in 10 seconds...  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']);
 
countdown.start();
 
var number = 10;
setInterval(function () {
  number--;
  countdown.message('Exiting in ' + number + ' seconds...  ');
  if (number === 0) {
    process.stdout.write('\n');
    process.exit(0);
  }
}, 1000);