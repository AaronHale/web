const http = require('http');
const fs = require('fs');
let server = http.createServer((req,res) =>{
  //req 接受的数据
  //res 发出的数据
  console.log(req.url)
  fs.readFile(`www${req.url}`,function (err, data) {
    if(err){
      console.log(err)
      console.log('404')
    } else {
      res.write(data)
    }
    res.end();
  })
  /*console.log(req.url)
  switch(req.url){
    case '/aaa':
      res.write('aaa');
      break;
    case '/bbb':
      res.write('bbb');
      break;
    case '/2.html':
      res.write('2.html');
      break;
  }*/

});
// 监听
server.listen(8080);