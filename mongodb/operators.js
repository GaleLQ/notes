// 注意字段不存在时,各个操作符的情况
// 大多数情况下都是针对字段值或者字段数组中的值判断是否符合要求
// 多个操作符嵌套使用注意兼容情况

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
// $expr { $expr: { <expression> } }查询时使用聚合表达式 // TODO
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

// 