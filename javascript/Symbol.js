// Symbol()生成的唯一Symbol值可作为对象的属性(唯一目的)
// Symbol.asyncIterator(fn) 异步可迭代对象的实现,可用于for await of(暂无stream以后可能会作为第一批实现)
// Symbol.hasInstance(fn) 通过函数返回的布尔值来判断instanceof是否成立,函数参数为待判断值
// Symbol.isConcatSpreadable(boolean) 对象作为concat()方法的参数时是否展开其数组元素
// Symbol.iterator(fn) 可迭代对象的实现,可用于for of
// Symbol.match(boolean) 他作为正则表达式还是作为字符串,给了那些字符串方法匹配正则的能力
// Symbol.matchAll 实现了字符串传进正则的函数实现matchAll的编程
// Symbol.prototype.description Symbol对象的可选描述的字符串(一般就是初始参数)

// Symbol.replace 当一个字符串替换所匹配字符串时所调用的方法
// Symbol.search 接受用户输入的正则表达式，返回该正则表达式在字符串中匹配到的下标
// Symbol.species 被构造函数用来创建派生对象
// Symbol.split 一个正则表达式的索引处分割字符串的方法
// Symbol.toPrimitive 当一个对象转换为原始值的时候调用函数(可干扰number,string和default转换时)
// Symbol.toStringTag 可干扰调用toString时返回值
// Symbol.unscopables

// Symbol.for() 创建,这样创建的被放到全局注册表可以找到
// Symbol.keyFor() 获取全局注册表中给定Symbol的key
// Symbol.prototype.toString()  symbol对象的字符串表示(Symbol()形式的字符串)
// Symbol.prototype.valueOf()  symbol对象所包含的symbol原始值
// Symbol.prototype[@@toPrimitive] 将Symbol对象转换为原始值