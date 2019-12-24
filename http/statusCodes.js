// 100 Continue 数据过大时先post下判断服务器是否愿意接收,再发送真正请求
// 101 Switching Protocol 服务器应客户端升级协议的请求（Upgrade请求头）正在进行协议切换(如websocket)

// 200 OK 表明请求已经成功(put和delete一般不),此响应默认可缓存的
// 201 Created 新的资源已经被成功创建(通常post返回)
// 202 Accepted 收到消息但未处理,处理结果也无法保证
// 203 Non-Authoritative Information 请求成功响应,但是被proxy修改
// 204 No Content 成功,不需要改变当前页面,只是确认成功了(通常put返回)
// 205 Reset Content 通知客户端重置文档视图(清空表单,复原等),暂无浏览器支持
// 206 Partial Content 范围请求的响应成功

// 300 Multiple Choices 让用户选择Location头提供的多种响应,(代理驱动型内容协商)
// 301 永久重定向 永久移动到Location头指定的url(部分浏览器会改方法),搜索引擎会更新
// 302 Found 临时移动,搜索引擎不会更新(部分浏览器会改方法)
// 303 See Other 表明要get重定向的链接来获取put或post的返回结果
// 304 Not Modified 资源未改变,可以使用缓存
// 307 Temporary Redirect 临时移动,搜索引擎不会更新(确保方法和消息主体不变,注302)
// 308 永久重定向 永久移动到Location头指定的url(确保方法和消息主体不变,注301),搜索引擎会更新

// 400 Bad Request 客户端语法或参数错误
// 401 Unauthorized 缺少认证身份凭证
// 403 Forbidden 认证失败
// 404 Not Found 找不到请求的资源
// 405 Method Not Allowed 禁止当前http方法的请求
// 406 Not Acceptable 服务器无法提供接受的字符集或语言
// 407 Proxy Authentication Required 缺乏代理服务器身份凭证
// 408 Request Timeout 服务器将会关闭链接
// 409 Conflict 请求的与服务器的资源冲突(如put)
// 410 Gone 永久性丢失
// 411 Length Required 缺少Content-Length服务器拒绝客户端的请求
// 412 Precondition Failed 先决条件(If-none-match被修改等)失败
// 413 Payload Too Large 请求主体太大
// 414 URI Too Long url太长
// 415 Unsupported Media Type 不支持的媒体类型
// 416 Range Not Satisfiable 无法满足请求的range
// 417 Expectation Failed 无法满足except头期望条件
// 418 I'm a teapot 1988年愚人节玩笑
// 422 Unprocessable Entity 我懂你,但是我帮不了你
// 425 Too Early 服务器不愿意冒险处理这个请求
// 426 Upgrade Required 拒绝当前协议发送这个请求,可以接受升级后的协议
// 428 Precondition Required 要求发送条件请求
// 429 Too Many Requests 短时间发送太多请求
// 431 Request Header Fields Too Large 请求头部字段过大
// 451 Unavailable For Legal Reasons 因法律原因无法提供给客户端

// 500 Internal Server Error 服务器内部发生错误
// 501 Not Implemented 请求的方法不被服务器支持
// 502 Bad Gateway 代理层从服务器接受消息无效(一般连接太多服务器响应超时)
// 503 Service Unavailable 临时未处于可以接受请求的状态(停机维护超载等)
// 504 Gateway Timeout 代理层无法在规定时间获得响应
// 505 HTTP Version Not Supported 不支持http版本
// 511 Network Authentication Required 代理服务器表示客户端需要网络验证