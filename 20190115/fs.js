const fs = require('fs');

fs.stat('./www/1.html',function (err,stat) {
  if(err){
    console.log('获取文件失败')
  } else {
    console.log(stat.mtime.toGMTString())
  }
})