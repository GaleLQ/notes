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