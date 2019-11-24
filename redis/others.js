// hyperLogLog str型,大数据量下,集合个数场景
// pfadd key element [element] 加入到hyperloglog
// pfcount key [key] 并集的近似基数
// pfmerge dest src [src] 并集并保存到dest

// 地理位置 zset型
// geoadd key longitude latitude member [longitude latitude member] 加入
// geopos key member [member] 获取位置
// geodist key member member [unit] 返回成员之间的距离
// georadius key longitude latitude radius m|km|ft|mi [withcoord] [withdist] [withhash] [asc|desc] [ count count] 返回与给定经纬度距离不超过最大距离的所有
// georadiusbymember key longitude latitude radius m|km|ft|mi [withcoord] [withdist] [withhash] [asc|desc] [ count count] 返回与给定成员距离不超过最大距离的所有
// geohash key member [member] 返回成员的geohash

// setbit key offset value 设置字符串offset的bit值
// getbit key offset 获取
// bitcount key [start] [end] 为1的bit数量
// bitpos key bit [start] [end] 返回第一个为bit的位置
// bitop operation dest key [key...] 多个字符串进行and,or,not,xor并保存到dest
// bitfield 将字符串作为二进制数组进行操作

// exists key 是否存在
// type key 返回key的类型
// rename key newkey 重命名
// renamenx key newkey 当newkey不存在时重命名
// move key db 将key移动到相应数据库
// del key [key] 删除key
// randomkey 随机返回一个key
// dbsize 返回key的数量
// keys pattern 返回匹配pattern的key
// scan cursor [match pattern] [count count] 根据cursor迭代
// sort key [by pattern] [limit offset count] [get pattern[ get pattern]]] [asc|desc] [alpha] [store dest] 对对应的value排序
// flushdb 清空数据库所有key
// flushall 清空所有db所有key
// select index 切换数据库
// swapdb db1 db2 交换两个数据库

// expire key seconds 设置生存时间秒
// expireat key timestamp 设置生存时间时间戳
// ttl key 返回剩余时间秒
// persist key 使key不过期
// pexpire key milliseconds 毫秒
// pexpireat key milliseconds 毫秒
// pttl key 毫秒

// multi 事务开始
// exec 执行事务的所有命令
// discard 取消事务的所有命令
// watch key [key...] 监视key,被改动则打断事务
// unwatch 取消watch的所有监视