const fs = require('fs');

let rs = fs.createReadStream('1.jpg');
let ws = fs.createWriteStream('2.png');

rs.pipe(ws);
rs.on('error',function (err) {
  console.log('读取失败')
  console.log(err)
});
ws.on('finish', function () {
  console.log('写入成功')
})
