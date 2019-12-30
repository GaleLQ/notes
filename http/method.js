// CONNECT 要求代理服务器代替请求目标主机,然后发送回客户端
// DELETE(幂等) 删除指定的资源
// GET(幂等) 请求指定的资源
// HEAD(幂等) 返回GET时的响应头
// OPTIONS(幂等) 预检请求,获取目的资源所支持的通信选项
// PATCH(非幂等) 对资源进行部分修改
// POST(非幂等) 发送数据给服务器,用作新增,等等
// PUT(幂等) 创建(注意post)或者替换目标资源
// TRACE(幂等) 返回服务器收到的原始请求,用于debug(不安全)