const http=require('http');

let server=http.createServer((req, res)=>{
  //request     请求  接收的数据(输入)
  //response    响应  发送的数据(输出)

  console.log(req.url);

  res.write('aaaa');
  res.end();
});
//监听
server.listen(8080);
