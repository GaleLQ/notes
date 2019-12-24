// Set-Cookie: <cookie名>=<cookie值> 让浏览器设置cookie,document.cookie也可设置
// Expires或Max-Age设置持久性cookie
// Secure只有https请求才发送给服务端,HttpOnly使Document.cookie获取不到
// Domain和Path 定义cookie的作用域
// SameSite 当Strict时,只有相同站点发送,Lax时,跨站的子请求也发送(默认), None都