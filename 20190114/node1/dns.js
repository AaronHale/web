const dns = require('dns');

dns.resolve('suning.com',function (err,data) {
  if(err){
    console.log(err)
  }else {
    console.log(data)
  }
})