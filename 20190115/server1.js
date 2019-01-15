const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((req, res) => {
  let {pathname} = url.parse(req.url);
  fs.stat(`www${pathname}`, (err, stat) => {
    if (err) {
      res.writeHeader(404);
      res.write('Not Found');
      res.end();
    } else {
      if(req.headers['if-modified-since']){ // 判断请求有没有携带 if-modified-since
        // 浏览器自身缓存机制
        // 初次请求时 客户端没有if-modified-since 服务端返回Last-modified（服务端文件修改时间），
        // 再次请求时客户端携带 if-modified-since（客户端文件修改时间），
        // 此时可以两者时间作比较
        // 服务端时间 大于 客户端时间的话 服务端再次返回 Last-modified 将新文件返回
        // 服务端时间 小于 客户端时间的话 服务端返回304 客户端使用缓存文件
        let oDate = new Date(req.headers['if-modified-since']);

        let time_client = Math.floor(oDate.getTime() / 1000);

        let time_server = Math.floor(stat.mtime.getTime() / 1000);
        
        if(time_server > time_client){
          senFileToClient();
        } else {
          res.writeHeader('304');
          res.write('Not Found');
          res.end();
        }
      } else {
        senFileToClient();
      }
      function senFileToClient() {
        // 发送
        let rs = fs.createReadStream(`www${pathname}`);
        res.setHeader('Last-modified', stat.mtime.toGMTString());
        // 输出
        rs.pipe(res);
        rs.on('error', function () {
          res.writeHeader(404);
          res.write('Not Found');
          res.end();
        });
      }
    }

  })
}).listen(8080);