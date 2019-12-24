// 当一个资源从与该资源本身所在的服务器不同的域,协议或端口请求一个资源时,资源会发起一个跨域HTTP请求
// 大部分情况请求已发出,但是访问不到被拦截了
// cors时,可能对服务器数据产生副作用的HTTP请求方法发起OPTIONS,不产生副作用的不会发起

// Access-Control-Allow-Origin 服务器允许域,携带cookie时为了安全不可通配
// Access-Control-Expose-Headers 允许浏览器getResponseHeader()获取的额外头,默认只有基本的几个
// Access-Control-Max-Age 这次预检的有效时间秒
// Access-Control-Allow-Credentials 当浏览器credentials为true,是否允许浏览器端读取res,拿回不一定可读取
// Access-Control-Allow-Methods 预检时告知客户端允许实际请求的方法
// Access-Control-Allow-Headers 预检时允许客户端实际请求的头

// Origin 实际请求的源站(URI),默认一直发送
// Access-Control-Request-Method 预检时告知服务器实际请求的方法
// Access-Control-Request-Headers 预检时告知服务器实际请求的头
