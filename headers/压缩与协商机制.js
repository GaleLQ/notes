// 端到端压缩技术:主动协商机制
//  Accept-Encoding 按照优先级包含所支持的压缩算法
//  Content-Encoding 服务器选择的算法

// 逐跳压缩技术: 中间任意节点进行的,不透明
// TE 类似Accept-Encoding
// Transfer-Encoding 类似Content-Encoding

// 服务端驱动型内容协商机制
// 缺点:每一个特性对应一个header
// Accept 希望接受的MIME类型及优先级
// Accept-Charset 可以理解的字符编码及优先级
// Accept-Encoding 支持的压缩算法
// Accept-Language 接受的自然语言
// User-Agent 标记产品和注释

// 代理驱动型内容协商机制
// 服务端返回供客户端选择
// 多一次请求