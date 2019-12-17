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
// $meta 与text索引连用返回相似度
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
// $bucket 将集合根据某字段范围分组处理输出(groupBy, boundaries, default, output,  $facet)
// $bucketAuto 自动分成若干组进行处理输出
// $collStats 集合的统计信息
// $count 文档的数量
// $currentOp 数据库当前操作语句信息
// $facet 同一输入执行多个aggregation
// $geoNear 距离指定点从近到远输出
// $graphLookup 递归嵌套搜索并且按照关系返回(如单表自查询)
// $group 将集合根据某字段相同值分组处理输出(即groupby,注意与$bucket区别),大多数数组操作符号可以用在这里,$$ROOT表示当前的document对象
// $indexStats 索引的统计信息(ops和since)
// $limit 限制数量,和sort时会优化
// $listLocalSessions(db) 缓存在内存中的sessions
// $listSessions(db) 数据库中的sessions(use config db.system.sessions.aggregate)
// $lookup 表连接,undefined和null也会连接, pipeline自定义不相关查询(嵌套子查询)
// $match 过滤数据
// $merge 将结果写入集合的部分(按需更新等)
// $out 将结果写入或代替集合(完全)
// $planCacheStats(db) 返回集合缓存相关统计信息
// $project 映射, 可增加,调整,修改,重组字段等强大功能,$$REMOVE配合$cond可用于字段的部分删除
// $redact 对文档型内容进行过滤,常配合$cond($$DESCEND保留当前并继续,$$PRUNE排除当前及其嵌套,$$KEEP保留当前及其嵌套)
// $replaceRoot 用新document代替当前document,(通过默认值,使文档规范等)
// $replaceWith 上者别名,语法更简洁
// $sample 随机抽取指定数量样本
// $set 同$addFields(4.2开始),也相等于显式的$project
// $skip 跳过指定数量documents
// $sort 排序(limit自动优化, 100M内存, 考虑尽量前置索引优化)
// $sortByCount 按照分组求和的数量降序排序($group $sort可代替)
// $unset 移除一个或多个字段,相同于隐式的$project
// $unwind 解构数组字段作为当前字段

// Operators
// $abs 数字的绝对值
// $acos 余弦弧度$acosh,$asin,$asinh,$atan,$atan2,$atanh,$cos,$degreesToRadians,$radiansToDegrees
// $add 将数字或日期相加
// $addToSet 在$group中,将字段加进集合
// $allElementsTrue
// $allElementsTrue 判断数组的布尔是否全为true
// $and 判断所有表达式(自定义的判断条件),是否全为真
// $anyElementTrue 判断数组的布尔是否任一为true
// $arrayElemAt 返回指定索引的数组元素
// $arrayToObject 将指定格式数组(js map型)转化为对象,可配合ObjectToArray
// $avg 返回平均值
// $ceil 向上取整
// $cmp 比较两个值的大小
// $concat 连接这个数组里面的字符串
// $concatArrays 连接这个数组里面的数组
// $cond 根据条件返回不同的结果
// $convert 转化为特定的类型
// $dateFromParts 根据特定格式返回时间
// $dateToParts 把时间细化成不同的部分
// $dateFromString 根据特殊字符串转换成时间
// $dateToString 以特定格式输出字符串
// $dayOfMonth 一个月的第几天(date,timestamp,ObjectID)
// $dayOfWeek 一周的第几天
// $dayOfYear 一年的第几天
// $divide 将两数相除
// $exp 计算e的指定次方
// $filter 根据条件filter数组(js filter)
// $first $group中(仅)第一个,可配合sort
// $floor 向下取整
// $gt 两个值是否大于
// $gte 两个值是否大于等于
// $hour 一天的第几小时
// $ifNull 如果为null设置代替值
// $in 一个值是否在数组中
// $indexOfArray 返回指定元素在数组中的index
// $indexOfBytes 返回指定元素在字符串(UTF-8byte)中的index(注意多byte字)
// $indexOfCP 返回指定元素在字符串(code point)中的index(常用)
// $isArray 判断是否为数组
// $isoDayOfWeek 国际标准一周的第几天
// $isoWeek 国际标准一年的第几周
// $isoWeekYear 国际标准按周查看属于的年份(注意年份衔接时情况)
// $last $group中(仅)最后一个,可配合sort
// $let 定义局部变量,可用于方便计算
// $literal 返回字面量,用于包含特殊字符的情况
// $ln e底对数
// $log 自定义底对数
// $log10 10底对数
// $lt 两个值是否小于
// $lte 两个值是否小于等于
// $ltrim 移除左边space或自定义的字符
// $map 根据条件map数组(js map)
// $max 最大值
// $mergeObjects合并多个document
// $meta 全文搜索配合text使用可返回相似度
// $min 最小值
// $millisecond 一秒的毫秒数
// $minute 一小时的分钟数
// $mod 两数相处的模(余数)
// $month 一年的第几月
// $multiply 几个数相乘
// $ne 两个值是否不等于
// $not 布尔,一个值的非
// $objectToArray 将document转化为特定格式数组
// $or 布尔,多个表达式的or
// $pow 指定数的n次方
// $push $group中(仅)字段推进数组
// $range 根据两个数字范围和指定间隔生成数组