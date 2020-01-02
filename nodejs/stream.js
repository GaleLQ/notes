// Writable(eg:fs.createWriteStream)
// Readable(eg:fs.createReadStream)
// Duplex(eg:net.Socket)
// Transform(eg:zlib.createDeflate())
// writable.writableBuffer,readable.readableBuffer查看缓冲区信息
// highWaterMark 字节的总数,2的幂动态改变,默认64 * 1024
// readable.push(chunk), writable.write() 放入缓冲区,返回true则未满highWaterMark
// Duplex和Transform维护者两个独立的内部缓冲区

// Writeable
// HTTP req/res,fs.createWriteStream,zlib 流,crypto 流,TCP socket,子进程 stdin, process.stdout(stderr)
// event close 当流或底层文件被关闭时触发
// event drain 当缓冲区被排空可继续写入数据时触发(end不可)
// event error
// event finish 当缓冲数据写入完成且不再写入触发(end, pipe后)
// event pipe 调用rs.pipe(ws)时,将ws放入rs目标集
// event unpipe 调用rs.unpipe(ws)时,将从rs目标集移除
// writable.cork() 强制缓存写入数据到内存中,不遵循highWaterMark满了写入原则(uncork,end时才会输出), 避免大量小块导致内部缓冲失效
// writable.destroy([error]) 销毁流,可选的触发error或close事件
// writable.destroyed boolean
// writable.end([chunk[, encoding]][, callback]) 结束ws的写入,callback添加到finish事件队列末尾
// writable.setDefaultEncoding(encoding) 默认的字符编码
// writable.cork() 将内存中缓存的数据输出到目标(大量小块变一大块)
// writable.writable writable.write()是否安全可用
// writable.writableEnded 调用end之后为true
// writable.writableFinished 触发finish为true
// writable.writableHighWaterMark 返回highWaterMark
// writable.writableLength 准备写入的缓存的字节数
// writable.writableObjectMode 属性objectMode
// writable.write(chunk[, encoding][, callback]) 强行写会被缓存进内存里,注意防止背压

// Readable
// HTTP req/res,fs.createReadStream,zlib 流,crypto 流,TCP socket,子进程 stdout(stderr), process.stdin
// 流动模式（flowing）或暂停模式（paused默认)
// 流动模式(event data,rs.resume(),rs.pipe()),暂停模式(rs.pause()有pipe无效,rs.unpipe(), event readable(优先级最高,被监听则要使用read))
// readable.readableFlowing 初始null,流动true,暂停false
// event close 当流或底层文件被关闭时触发
// event data 切换为流动模式,当有数据被读出时触发(eg: rs.read())
// event end 流中数据被消费掉之后触发
// event error
// event pause 调用rs.pause()且readsFlowing不为false
// event readable 从文件读入缓冲区的nextTick触发,最后读空也会触发,并在end之前,存在readable事件时,resume,pipe方法不可用,监听这个事件时,进行第一次从文件中写入缓存
// event resume 调用rs.resume()且readsFlowing不为true时触发
// readable.destroy([error]) 销毁流,可选的触发error或close事件
// readable.destroyed boolean
// readable.isPaused() 返回是否是被pause的
// readable.pause() 使data事件停止流动模式
// readable.pipe(destination[, options]) 返回目标流(双向转换可链式调用),rs end时ws也end(option),rs错误,ws不会自动关闭
// readable.read([size]) 读取指定字节(默认缓冲区所有,无则null),流动模式其实是被自动调用至耗尽
// readable.readable readable.read()是否安全可用
// readable.readableEncoding 
// readable.readableEnded 调用end之后为true
// readable.readableFlowing 流的状态
// readable.readableHighWaterMark 返回highWaterMark
// readable.readableLength 缓冲区剩余字节数
// readable.readableObjectMode 属性objectMode
// readable.resume() 被pause的切换到流动模式
// readable.setEncoding(encoding) 不设置默认buffer
// readable.unpipe([destination]) 解绑pipe()
// readable.unshift(chunk[, encoding]) 推回缓冲
// readable.wrap(stream) 兼容老版本
// readable[Symbol.asyncIterator]() 支持for await异步迭代,用后即毁

// Duplex
// 实现Readable和Writable的流,完全独立
// TCP socket, zlib流,crypto流