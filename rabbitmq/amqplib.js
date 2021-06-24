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
// exclusive 排他队列,默认false,只当前的connection可见(可多个channel),自动删除(durable无效),多个连接不可建立同名
// durable 持久化,默认为true
// autoDelete 有过消费者且所有消费者断开连接则删除队列,默认false(有队列绑定过exchange后解绑)
// 返回{ queue: 'foobar', messageCount: 0, consumerCount: 0 }格式

// channel.checkQueue() check队列(队列不存在会报错)
// 返回{ queue: 'foobar', messageCount: 0, consumerCount: 0 }格式

// channel.deleteQueue(queue, [options]) 删除队列(队列不存在会报错)
// ifUnused 还有消费者不删除
// ifEmpty 还有消息不删除

// channel.purgeQueue(queue) 清除队列内的消息,已经被处理的不清除

// channel.bindQueue(queue, source, pattern, [args]) 将队列queue以路由pattern绑定到source上

// channel.bindQueue(queue, source, pattern, [args]) 解绑

// channel.assertQueue([queue, [options]]) 确保交换机存在(不存在则创建),初始化用的

// channel.assertExchange(exchange, type, [options]) 确保交换机存在(不存在则创建),初始化用的
// exchange 交换机名字
// type 类型: direct完全匹配，topic模糊匹配(慢一些),Fanout不校验路由键直接发,headers根据头属性进行完全匹配
// durable 持久化,默认为true
// internal 内部的，不可被publish
// autoDelete 有过queue且所有queue解绑则删除,默认false
// alternateExchange 可选的交换机，如果当前交换机无匹配队列则转发到这个交换机上
// 返回{ exchange: 'exchangeName' }

// channel.checkExchange() check交换机(交换机不存在会报错)

// channel.deleteExchange(exchange, [options]) 删除交换机(交换机不存在会报错)
// ifUnused 还有绑定队列不删除

// channel.bindExchange(destination, source, pattern, [args]) 以指定routeKey将交换机绑到另一台，提供了编排exchange的能力

// channel.unbindExchange(destination, source, pattern, [args]) 解绑

// channel.publish(exchange, routingKey, content, [options])
// expiration 毫秒字符串后自动过期
// userId 保持打开连接时的username一致
// CC 其余的routeKey数组,抄送
// priority 正整数表示优先级
// persistent 消息持久化
// deliveryMode 持久化1为假2为真，同上,不推荐
// mandatory 如果没有找到routingKey相应的队列,则返还给生产者
// BCC 类似于CC,密送，不包含服务端信息
// immediate(deprecated) 队列没有消费者的时候不会入队，会返回给生产者
// contentType message的MIME类型
// contentEncoding message的MIME encoding
// headers 消息头
// correlationId 相关性id,常用判断请求来源
// replyTo 
// messageId
// timestamp
// type
// appId

// channel.sendToQueue(queue, content, [options]) 绕过路由交换直接向队列发送消息

// channel.consume(queue, msg => {}, [options]) 消费队列的消息,会按照注册顺序平均发送给每个consumer

// channel.cancel(consumerTag) 不向这个consumer发送消息

// channel.get(queue, [options]) 从mq中消费一个消息(不建议,底层是consume再断开)

// channel.ack(message, [allUpTo]) 确认收到消息

// channel.ackAll() 确认频道中所有未完成的消息

// channel.nack(message, [allUpTo, [requeue]]) 抛弃消息

// channel.nackAll([requeue]) 抛弃频道中所有消息

// channel.reject(message, [requeue]) 兼容v2.3.0之前版本nack

// channel.prefetch(message, [requeue]) 设置每个队列同时获取消息的数量(3.3之前是一个频道的数量)

// channel.recover() 频道中所有未入队的队列重新入队

// ConfirmChannel 生产者和broker确认机制，和channel一样，除了以下

// cch.publish(exchange, routingKey, content, options, (err, ok) ={}) 多了一个callabck确认broker收到

// cch.sendToQueue(queue, content, options, (err, ok) => {})

// cch.waitForConfirms() cch队列所有的消息是否已经被broker收到，有一个nack就会报错
