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