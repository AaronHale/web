const crypto = require('crypto');
function md5(str) {
  let obj = crypto.createHash('md5');
  obj.update(str);
  return obj.digest('hex')
}
console.log(md5(md5('123456') + '混淆'));

// 线程和进程
// 程序 进程 主进程 进程包含线程 主线程
// 进程 拥有独立的执行空间 存储
// 线程 同一个进程内的所有线程共享一套空间 代码
// 多进程 缺点 成本高（慢）；安全（进程间隔离），进程间通信麻烦，写代码简单
// 多线程 成本低（快）；不安全（），通信相对容易，写代码麻烦
