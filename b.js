// b.js
exports.done = false;
let a = require("./a");
console.log("b.js: a.done = %j", a.done); // false
exports.done = true;
console.log("b.js执行完毕");
