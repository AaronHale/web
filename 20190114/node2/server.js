const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>{
  fs.readFile(`www${req.url}`, function (err,data) {
    if (err){
      res.writeHeader(404);
      res.write('Not Found');
    } else {
      console.log(req.url);
      //res.write(data);
    }
    res.end();
  })

});
server.listen(8080);
// 算法
// 设计模式
// 架构
