// lpush key value [value] 将一个或多个插入到表头
// lpushx key value [value] 当key是一个列表时
// rpush key value [value] 表尾
// rpushx key value [value] 当存在
// lpop key 移除并返回key头元素
// rpop key 尾
// rpoplpush src dest 将src尾弹出到dest头,原子操作
// lrem key key count value 由count值移除value值的元素
// llen key 返回key的长度
// lindex key index 返回下标index的元素
// linsert key before|after pivot value 将value插入pivot前或后
// lset key index value将下表index的元素设置为value
// lrange key start stop 获取之间的元素,左闭右闭
// ltrim key start stop 使key只保留之间的元素
// blpop key [key] timeout 阻塞的lpop,依次检查key弹出第一个非空头元素,阻塞当前客户端实例
// brpop key [key] timeout 尾
// brpoplpush source destination timeout 