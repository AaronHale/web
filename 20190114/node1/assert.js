const assert = require('assert');

function sum(a,b) {
  assert(arguments.length == 2, '必须是两个参数')
  assert(typeof a == 'number', '第一个必须是数字');
  assert(typeof b == 'number', '第二个必须是数字')

  return a + b;
}
console.log(sum(3));