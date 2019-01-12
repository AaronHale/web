const url = require('url');
let str = 'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=baidu&wd=a&oq=nodejs&rsv_pq=9778e0350002f600&rsv_t=d25f%2BhYOBKyAmx7v0BUxq8nL5hRlL53c07hw6vKi6NOUGtfdCu%2BlWKjkhIA&rqlang=cn&rsv_enter=0&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100&prefixsug=a&rsp=0&inputT=1380&rsv_sug4=1380'
console.log(url.parse(str));