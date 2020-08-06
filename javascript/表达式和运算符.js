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
// instanceof 构造函数的prototype是否出现在对象的原型链上(TODO string等字面量值类型不符合规则有点奇怪)
// new运算符 相当于a = new Object();a.__proto__ = A.prototype;A.call(a);返回A的返回(A返回对象类型)或者返回a(A返回非对象类型)
// new.target 检测函数属否是通过new调用的,new调用时返回函数的指针(继承返回继承的,即this指向现在),正常调用时返回undefined

// super 有继承的干净的自己
// 子类的构造函数中super()时,生成一个干净的this,类似创建子类的this = new B();所以要在this之前显式调用,
// 普通函数或子类的静态方法中,相当于有继承的干净的自己super.__proto__ === this.__proto__,this为调用者(子类也是当时的调用者)

// this 指向运行时的对象,全局指向全局对象(window or global,严格模式指向undefined)
// 非对象调用call,apply,bind会new String() Number()等转化成对象
// bind 创建一个this被永久固定的原函数的复制函数(不可再被变, 不影响其作为构造)
// 箭头函数没有this,所以永远引用创建时的this,所以call等也无从谈起

// typeof typeof()
// 返回未经计算的操作数类型的字符串
// undefined object boolean number bigint string symbol function object
// null为object(null大多为0x00与object的类型标签0重复),正则object,类function
// 除了TDZ(let,const),永远不会抛出错误
// 例外: document.all返回undefined,但ECMA规范要求自定义不能与已有的相同

// void运算符 对给定的表达式进行求值,然后返回undefined,(常用小技巧javascript:void(0), () => void doSomething())

// yield 暂停和恢复一个生成器函数,[rv] = yield [expression]
// yield* 表达式用于委托给另一个generator或可迭代对象,yield*返回后面表达式的返回值(Generator的return)