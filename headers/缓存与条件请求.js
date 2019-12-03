// Cache-Control: no-store 不可缓存
// Cache-Control: no-cache 缓存,但每次都需要向服务器强制确认(通过其他验证字段)
// Cache-Control: must-revalidate 本地不过期可本地,本地过期需要向服务器强制确认
// Cache-Control: private 只有发起者才可以缓存
// Cache-Control: public 中间代理者也可以缓存
// Cache-Control: max-age=31536000 秒内不向服务器验证是否有效,直接使用
// Expires 过期时间GMT,HTTP/1.0遗留(会有服务器客户端时间不一致问题)
// Pragma: no-cache HTTP/1.0遗留
// 优先级: Pragma -> Cache-Control -> Expires

// Vary Vary返回验证的头,只有请求头和缓存头的信息一致才会被使用

// 条件请求:当缓存失效(Cach-Control控制),浏览器发起条件式请求
// 缓存更新
// ETag(MD5)  If-None-Match 强校验
// Last-Modified If-Modified-Since 一般来说弱校验(精确到秒)

// 增量更新
// If-Match If-Unmodified-Since 如果匹配则返回资源,被修改则返回412
// If-Range 用这个ETag或GMT值,则被修改直接返回新资源(不返回412),减少一次往返
// 多用户更新时乐观锁算法,第一更新成功,后面用户412