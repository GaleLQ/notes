// sadd key member [member] 将成员添加到集合
// sismember key member 判断是否是集合成员
// spop key 移除并返回一个随机元素
// srandmember key [count] 返回count个元素(正不重复)
// srem key member [member] 移除元素
// smove src dest member 移动元素
// scard key 返回key的数量
// smembers key 返回集合中所有成员
// sinter key [key] 返回交集
// sinterstore dest key [key] 交集并存进dest
// sunion key [key] 并集
// sunion dest key [key] 并集并保存
// sdiff key [key] 第一个key与其他的差集
// sdiffstore dest key [key] 差集并保存