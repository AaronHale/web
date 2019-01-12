const fs = require('fs')
/*
fs.readFile('1',function (err,data) {
  if(!err){
    console.log(data.toString())
    console.log(data)
  }
});*/

/*fs.writeFile('3.text','写入一段内容', function (err) {
  if(err){
    console.log(err)
  } else {
    console.log('success')
  }
})*/

fs.readFile('1', (err, data) =>{
  if(err){
    console.log(err)
  } else {
    console.log(data)
    fs.writeFile('2.txt',data.toString(),function (err) {
      if(err){
        console.log(err)
      } else {
        console.log('success')
      }
    })
  }
})