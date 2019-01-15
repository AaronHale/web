const path = require('path');

var str = '/var/loacl/www/aaa/1.png';
console.log(path.basename(str)); // 文件名
console.log(path.dirname(str)); // 路径
console.log(path.extname(str)); // .后缀