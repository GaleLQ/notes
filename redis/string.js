// set key value [ex seconds] [px milliseconds] [nx|xx] 将字符串值value关联到key
// setnx key value 只在键key不存在的情况
// setex key seconds value 关联到value,且key的生存时间设置为seconds秒钟
// psetex key milliseconds value 毫秒为单位
// get key 返回相关联的字符串值
// getset key value 将key设置为value并返回旧值
// strlen key 返回其字符串长度
// appendend  将value追加到末尾
// setrange key offset value 从offset开始,用value覆盖
// getrange key start end 返回指定范围
// incr key 将其value加一
// incrby key increment 为key加上整数值
// incrbyfloat key increment 浮点
// decr key 减一
// decrby key decrement
// mset key value [key value] 同设置多个,覆盖原则
// msetnx key value [key value] 当所有给定键都不存在时,原子操作
// mget key [key] 返回给定的多个