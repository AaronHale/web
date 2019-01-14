const http = require('http');
const fs = require('fs');
const utils = require('./utils/utils');
let server = http.createServer((req, res) => {
  let arr = [];
  req.on('data', data => {
    let post = {};
    let files = {};
    if (req.headers['content-type']) {
      let str = req.headers['content-type'].split('; ')[1];
      if (str) {
        let boundary = '--' + str.split('=')[1];
        let arr = data.split(boundary);
        arr.shift(); // 开头 删除
        arr.pop(); // 结尾 删除
        arr = arr.map(buffer =>{
          return buffer.slice(2,buffer.length - 2)
        });
        arr.forEach(buffer => {
          let n = buffer.indexOf('\r\n\r\n');
          let disposition = buffer.slice(0, n);
          disposition = disposition.toString();
          let content = buffer.slice(n + 4);
          if(disposition.indexOf('\r\n')===-1){
            content = content.toString();
            let name = disposition.split('; ')[1].split('=')[1];
            name = name.substring(1,name.length-1);
            post[name] = content;
            console.log(post)
          } else {
            let [line1,line2] = disposition.split('\r\n');
            let [, name,fileName] = line1.split('; ');
            let type = line2.split(': ')[1];
             name = name.split('=')[1];
             name = name.substring(1,name.length-1);
             fileName = fileName.split('=')[1];
             fileName = fileName.substring(1,fileName.length-1);
             fs.writeFile('./upload/')
          }
        })
      }
    }
  });
  req.on('end', () => {
    res.end();
  });
});
server.listen(8080);
