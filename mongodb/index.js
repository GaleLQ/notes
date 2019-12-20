// 索引类型
// 单列索引
// 单字段索引,嵌套字段索引,嵌套对象索引(注意对象匹配顺序)

// 多列索引
// 多字段不支持调换排序,所以字段升降顺序很重要
// 支持前缀查询,优先级高于前缀,但效率不如

// 多键索引
// 为数组的字段上建立的索引,支持每个键的查询
// 复合多键索引字段不可同时为数组
// 注意数组查询多个限制条件时,是任意条件都有一个满足即可,不是一个全满足($elemMatch可实现全满足)
// 多键索引产生索引边界,确定最小查找范围(多字段交,数组字段并)

// 文本索引
// 使用开源Apache Lucene
// 一个集合最多一个text
// $meta获取相似度
// 不支持中文

// 通配符索引
// 为了查询任意字段($**)
// wildcardProjection设置多个字段通配
// 有很多限制

// 2dsphere Indexes

// 2d Indexes

// geoHaystack Indexes

// 哈希索引
// createIndex( { _id: "hashed" } )
// 只等值查询(排序,前缀,范围等无用),其余B-树
// convertShardKeyToHashed()散列函数


// 索引属性
// TTL
// 单字段,含日期的值或数组(最小)
// 后台线程60秒定期延迟删除
// 不支持固定集合
// expireAfterSeconds: 0

// unique
// 不支持哈希索引(哈希碰撞)
// 无字段视为null,只允许一个
// 只限制符合条件的索引部分(部分索引,稀疏索引等)

// Partial
// partialFilterExpression
// 使用时如果导致不完整,不会使用部分索引(过滤器需索引过滤子集)
// 是稀疏索引的超集(优先使用,不可同时)

// Case Insensitive
// 创建索引时设置collation使用时必须显式指定,创建集合时设置则创建索引和使用时自动继承

// Sparse
// 保证结果集完整性才会使用
// 2dsphere 2d geoHaystack text Wildcard


// Index Builds on Populated Collections
// 前台阻塞速度快(4.2后,无操作状态前台和后台够构建索引速度差不多)
// 构建时不会检查约束,构建后符合约束即可


// Index Intersection
// 可以使用多个索引的交集进行查询
// sort使用的索引必须是查询使用的索引,不可sort与查询交,会直接用sort需要的索引
// 优化器使用的条件比较苛刻,查看优化器


// 