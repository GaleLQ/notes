// Accept(req) 告知服务器客户端可以处理的MIME类型及权重
// Accept-Charset(req) 告知服务器客户端可以处理的MIME类型及权重
// Accept-Encoding(req) 告知服务器客户端可以处理的内容编码格式(压缩算法)
// Accept-Language(req) 告知服务器客户端可以处理的语言
// Accept-Range(res) 说明自己是否支持范围请求及单位
// Access-Control-Allow-Credentials(res) 浏览器是否拦截带Credentials请求的响应
// Access-Control-Allow-Headers(res) 预检请求中,允许正式请求除基本头以外的头信息
// Access-Control-Allow-Methods(res) 预检请求中,允许正式请求的方法
// Access-Control-Allow-Origin(res) 资源允许的origin
// Access-Control-Expose-Headers(res) 允许跨域请求访问的非简单header
// Access-Control-Max-Age(res) 预检请求返回信息的有效期
// Access-Control-Request-Headers(req) 告知服务器实际请求携带的请求头
// Access-Control-Request-Method(req) 告知服务器实际请求携带的方法
// Age(res) 资源在缓存代理服务器中缓存的时长
// Authorization(req) 包含验证凭证
// Cache-Control(req, res) 实现缓存机制
// Clear-Site-Data(res) 清除和浏览器有关的数据
// Connection 是否保持连接,用于多次请求同一连接优化
// Content-Disposition(req(formdata), res) 响应的内容以什么方式显示
// Content-Encoding(res) 返回的数据的压缩方法
// Content-Language(res) 页面的目标受众
// Content-Length(res) 返回消息的byte数目
// Content-Range(res) 返回的数据片段在整个文件中的位置
// Content-Security-Policy 允许客户端加载外部资源的白名单(CSP)
// Content-Type(res) 返回资源的MIME类型
// Cookie(req) 请求携带的cookie
// Cross-Origin-Resource-Policy(res) 告诉浏览器阻止对指定跨域资源的请求
// DNT(req) 浏览器对隐私的态度
// Date(req res) 包含报文创建时间
// ETag(res) 资源指纹, 前缀W/弱验证器
// Expires(res) 响应的截止日期,优先级低于Cache-Control
// Host(req) 服务器域名
// If-Match(req) 条件请求如果匹配则返回资源
// If-Modified-Since(req) 条件请求如果修改过则返回资源
// If-None-Match(req) 条件请求如果不匹配则返回资源
// If-Range(req) 当条件满足时返回资源(断点续传保持资源正确)
// If-Unmodified-Since(req) 条件请求如果没修改过则返回资源
// Keep-Alive(req res) 设置keepalive模式的超时时长和最大连接数
// Last-Modified(res) 资源修改时间,弱校验
// Origin(req) 源站无路径
// Pragma 兼容Http/1.0 no-cache
// Range(req) 请求资源的哪一部分
// Referer(req) 源站有路径
// Server(res) 服务器相关信息
// Set-Cookie(res) 告知浏览器保存cookie
// TE(req) 指定代理希望使用的编码类型
// Transfer-Encoding(res) 逐条传输消息压缩编码方式
// User-Agent(req) 用户代理信息
// Vary(res) 内容协商,请求时和缓存中vary的头都未改变才算有效(动态服务, 缓存)



// Accept-CH
// Accept-CH-Lifetime
// Accept-Patch
// Allow
// Alt-Svc
// Content-Location
// Content-Security-Policy-Report-Only
// DPR
// Device-Memory
// Digest
// Early-Data
// Expect
// Expect-CT
// Feature-Policy
// Forwarded
// From
// Large-Allocation
// Link
// Location
// Proxy-Authenticate
// Proxy-Authorization
// Public-Key-Pins
// Public-Key-Pins-Report-Only
// Referrer-Policy
// Retry-After
// Save-Data
// Sec-WebSocket-Accept
// Server-Timing
// SourceMap
// Strict-Transport-Security
// Timing-Allow-Origin
// Tk
// Trailer
// Upgrade-Insecure-Requests
// Via
// WWW-Authenticate
// Want-Digest
// Warning
// X-Content-Type-Options
// X-DNS-Prefetch-Control
// X-Forwarded-For
// X-Forwarded-Host
// X-Forwarded-Proto
// X-Frame-Options
// X-XSS-Protection