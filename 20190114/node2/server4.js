const http = require('http');
const url = require('url');
const queryString = require('querystring');
let server = http.createServer((req,res) => {
  // get
  let {pathname,query} = url.parse(req.url,true);
  // post
  let str = '';
  req.on('data',data =>{ // 监听
    str += data;
  });
  req.on('end',function () {
    let post = queryString.parse(str);
    console.log(pathname, query, post)
  });
  res.end();
});
server.listen(8080);