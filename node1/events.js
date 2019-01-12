const EventEmitter = require('events').EventEmitter;

let ev = new EventEmitter();
let eName = 'msg';
// 监听
ev.on(eName,function (a,b,c) {
  console.log(a);
  console.log(b);
  console.log(c);
});
// 派发
ev.emit(eName,12,4,5);