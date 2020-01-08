// 算术运算符+ - / * % **(拒绝歧义) ++ -- 特别的推荐+用于将其他类型转换成数字(false,null, '0b10101')
// 赋值运算符 =和<<=等
// 按位操作符 & | ^ ~ << >> >>>(位运算转换成有符号32位)
// 逗号操作符 每个操作数求值,返回最后一个操作数的值
// 比较操作符 == != === !== > < >= < <=(对象转换的会先valueOf,toString获取原始值)
// 条件运算符 a ? b : c(根据右结合特性可写成条件链)
// 解构赋值 注意无定义套括号()
// 圆括号运算符 控制优先级
// 逻辑运算符 && || ! (短路规则)
// 空值合并运算符(暂无支持2020.1) ?? 左侧操作数为null或undefined返回右
// 对象初始化 new Object,Object.create(),{}
// 运算符优先级 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table
// 可选链(暂不支持2020.1,stage 3) 代替确认某属性存在,返回undefined
// 管道操作符(暂不支持2020.1,Stage1) 链式调用单参数函数(double(increment(double(5))) to 5 |> double |> increment |> double)
// 属性访问器 . [] 字面量调用方法注意(.. 空格 换行等处理)
// 展开语法 不会触发setters(Object.assign会)
// async await 
// 类表达式 class关键字,和function类似(但不提升)
// function* 表达式
// in 属性沿原型链是否能找到

