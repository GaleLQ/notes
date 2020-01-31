// connect
// const connection = await amqp.connect('amqp://guest:guest@localhost:5672?frameMax=0x1000&channelMax=1000')
// auth 默认都是guest
// vhost 默认/,注意//foo要写成/%2Ffoo
// frameMax 允许连接的最大帧字节数(无符号32位整数,默认即最小值0x1000 4kb)
// channelMax 允许channels最大数量(默认0表示2**16 - 1)
// heartbeat 心跳,默认0,单位秒
// locale en_US

// connection.close() 关闭
// connection.on('close', cb) 关闭事件
// connection.on('error', cb)
// connection.on('blocked', cb) RabbitMQ服务器block时,一般因为服务器资源不够了
// connection.on('unblocked', cb)
// connection.createChannel() 创建channel
// connection.createConfirmChannel()

// Channels
// channel.close()
// channel.on('close',cb)
// channel.on('error',cb)
// channel.on('return',cb) 当published设置mandatory且没有被server routed返回时触发
// channel.on('drain',cb) 类似可写流,publish或sendToQueue写满(返回false)时触发

// channel.assertQueue([queue, [options]]) 确保队列存在(不存在则创建),初始化用的
// queue 隐式自动分配一个名字
// exclusive 排他队列,默认false,只当前的connection可见,自动删除不受durable影响
// durable 持久化,默认为true
// autoDelete 有过消费者且所有消费者断开连接则删除队列,默认false
// 返回{ queue: 'foobar', messageCount: 0, consumerCount: 0 }格式

// channel.checkQueue() check队列(队列不存在会报错)
// 返回{ queue: 'foobar', messageCount: 0, consumerCount: 0 }格式

// channel.deleteQueue(queue, [options]) 删除队列(队列不存在会报错)
// ifUnused 还有消费者不删除
// ifEmpty 还有消息不删除

// channel.purgeQueue(queue) 清除队列内的消息,已经被处理的不清除

// 