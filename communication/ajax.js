function ajax(options) {
  options = options || {};
  options.type = options.type || 'get';
  options.data = options.data || {};
  options.dataType  = options.dataType || 'text';
  options.contentType  = options.contentType || 'application/x-www-urlencoded';
/*  let {url, success, error, data, dataType, contentType,type} = options;
  data = data || {};
  dataType = dataType || 'text';*/
  function show(oby){
  console.log(obj.s)
  }
  show({"q":"","p":false,"bs":"","csor":"0","status":770,"s":[]});
  let xhr = new XMLHttpRequest();
  let arr = [];
  for(let name in options.data) {
    arr.push(`${name}=${options.data[name]}`);
  }
  let strData=arr.join('&');
  if(options.type.toLowerCase() === 'post'){
    xhr.open(options.type, options.url, true);
    xhr.setRequestHeader('content-type', options.contentType);
    xhr.send()
  } else {
    xhr.open(options.type, options.url + '?' + strData, true);
    xhr.send(strData)
  }
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
      let data = xhr.responseText;
      switch(options.dataType){
        case 'json':
          if(window.JSON && JSON.parse){
            data = JSON.parse(data);
          } else {
            data = eval(data)
          }
          break;
        case 'text':
          break;
        case 'xml':
          data = xhr.responseXML;
          break;
      }
      options.success && options.success(xhr.responseText)
      console.log(xhr.responseText)
    } else {
      options.error && options.error()
      console.log(xhr.error)
    }
  };
}

// restfull api 风格 习惯
