const http = require('http');
const url = require('url');
const queryString = require('querystring');
let server = http.createServer((req,res)=>{
  let str = '';
  // 有一段到达
  req.on('data', data => {
    str += data;
  });
  // 结束了
  req.on('end', () => {
    let post = queryString.parse(str)
    console.log(str,post)
  });
  res.end();
});
server.listen(8080)