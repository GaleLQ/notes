// 注意字段不存在时,各个操作符的情况
// 大多数情况下都是针对字段值或者字段数组中的值判断是否符合要求
// 多个操作符嵌套使用注意兼容情况
// 注意mongodb限制的存储大小

// Query
// Comparison
// Syntax: { field: { $operator: value | [value] } }
// $eq 相等,引用类型相等注意顺序
// $gt 大于
// $gte 大于等于
// $in 其中之一
// $lt 小于
// $lte 小于等于
// $ne 不等于
// $nin 均不在其中

// Logical
// { $operator: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }
// { field: { $not: { <operator-expression> } } }
// $and 与, 筛选多的条件放到前面短路优化.多个表达式用相同字段或操作符则必须使用and,不可简化
// $not 非
// $nor 或非
// $or 只有所有表达式都支持索引才会索引扫描,否则会全局扫描

// Element
// { field: { $operator: value | [value] } }
// $exist: <boolean>  检验是否存在这个字段(注意null也是存在)
// $type 检验字段的类型 // TODO MinkeyMaxkey待完善

// Evaluation
// $expr { $expr: { <expression> } }使查询时也可使用聚合表达式 // TODO
// $jsonSchema { $jsonSchema: <JSON Schema object> } 在insert和update时强制验证.作为查询条件操作符
// $mod { field: { $mod: [ divisor, remainder ] } } 模运算查询
// $regex 正则,注意前缀优化,非大小写优化
// $text 根据text索引进行全文搜索
// $where 执行js查询,不可用索引,效率超低,注意在数据库内部执行无js上下文

// Geospatial // TODO

// Array
// $all { field: { $all: [value] } }字段数组包含了所有的元素
// $elemMatch { field: { $elemMatch: { <query1>, <query2>, ... } } } 字段数组至少有一个包含这些query与,一般是数组中不同字段条件
// $size 数组的长度

// Bitwise 无法用索引
// $bitsAllClear 判断数字或BinData二进制某些位是否全为0
// $bitsAllSet 全为1
// $bitsAnyClear 任意为0
// $bitsAnySet 任意为1

// $comment 将注释与表达式关联写入profile log

// Projection
// $ 拿出数组字段达到条件的元素 // TODO 没效果
// $eleMatch 与上相同,区别是$只支持一个筛选条件 // TODO 没效果
// $meta 与text索引连用 // TODO
// $slice 字段数组返回子数组

// Update
// Field
// $currentDate 指定字段设置为当前时间
// $inc 字段加指定值
// $min 指定值小于原来则设定(bson compare)
// $max 指定值大于原来则设定
// $mul 字段乘指定值
// $rename 重命名字段,unset后set
// $set 更新或设置一个字段
// $setOnInsert upsert真时不存在则更新
// $unset 删除字段

// Array
// $(update) 更新时,数组筛选匹配条件时,数组中的第一个匹配这个条件的元素
// $[] 更新时,数组中的所有匹配这个条件的元素
// $[element] 更新时,通过arrayFilters自定义筛选数组更新
// $addToSet 将一个或多个值($each)添加进集合数组(互异性)
// $push 将一个或多个值($each)添加进数组(position默认尾部),同时sort,slice等,
// $pop 移除字段数组数组第一或最后一个元素
// $pull 移除字段数组自定义筛选部分
// $pullAll 移除一个或多个指定值
// $each 配合addToSet和push
// $position 配合$push,必须有$each
// $slice 配合$push,必须有$each
// $sort 配合$push,必须有$each,嵌套子属性不可排

// Bitwise
// $bit 使用指定值与相应字段进行按位and,or,xor操作

// Aggregation
// Stages
// $addFields 添加新字段(可通过现有字段)
// $bucket (aggregation) 将集合根据某字段范围分组处理输出(groupBy, boundaries, default, output,  $facet)
// $bucketAuto 自动分成若干组进行处理输出
// $collStats (aggregation)
// $count(aggregation) 文档的数量
// $currentOp (aggregation) 数据库当前操作语句信息
// $facet (aggregation) 同一输入执行多个aggregation
// $geoNear (aggregation) 距离指定点从近到远输出
// $graphLookup (aggregation) 递归嵌套搜索并且按照关系返回(如单表自查询)
// $group(aggregation) 将集合根据某字段相同值分组处理输出(即groupby,注意与$bucket区别),$$ROOT表示当前的document对象
// $indexStats(aggregation) 索引的统计信息(ops和since)
// $limit(aggregation) 限制数量,和sort时会优化
// $listLocalSessions(db) 缓存在内存中的sessions
// $listSessions(db) 数据库中的sessions(use config db.system.sessions.aggregate)
// $lookup(aggregation) 表连接,undefined和null也会连接, pipeline自定义不相关查询(嵌套子查询)
// $match(aggregation) 过滤数据
// $merge(aggregation) 将结果写入集合的部分(按需更新等)
// $out(aggregation) 将结果写入或代替集合(完全)
// $planCacheStats(db) 返回集合缓存相关统计信息
// $project (aggregation) 映射, 可增加,调整,修改,重组字段等强大功能,$$REMOVE配合$cond可用于字段的部分删除
// $redact(aggregation) 对文档型内容进行过滤,常配合$cond($$DESCEND保留当前并继续,$$PRUNE排除当前及其嵌套,$$KEEP保留当前及其嵌套)
// $replaceRoot(aggregation) 用新document代替当前document,(通过默认值,使文档规范等)
// $replaceWith(aggregation) 上者别名,语法更简洁
// $sample(aggregation) 随机抽取指定数量样本
// $set(aggregation) 同$addFields(4.2开始),也相等于显式的$project
// $skip(aggregation) 跳过指定数量documents
// $sort(aggregation) 排序(limit自动优化, 100M内存, 考虑尽量前置索引优化)
// $sortByCount(aggregation) 按照分组求和的数量降序排序($group $sort可代替)
// $unset(aggregation) 移除一个或多个字段,相同于隐式的$project
// $unwind (aggregation) 解构数组字段作为当前字段
