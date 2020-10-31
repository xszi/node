const vm = require("vm");

const x = 1;
const y = 2;

const context = { x: 2, y: 3, console };
vm.createContext(context); // 上下文隔离化对象。

const code = "console.log(x); console.log(y)";

vm.runInContext(code, context);