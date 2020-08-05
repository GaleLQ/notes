// 类不像函数会提升
// 类声明和类表达式
// 字段函数批量处理需要用prototype
// Species见es6

// 静态字段和静态方法绑在类的属性上,继承的静态字段和静态方法绑在原来类上
// 字段和继承字段绑在实例上
// 方法绑在实例的隐式原型(函数的显式原型),继承方法绑在继承的隐式原型的隐式原型
// 继承类绑在子类的隐式原型
// 字段可动态变量表示,函数不可以
// 注意this和super
// 私有#name格式

// constructor不调用自动生成,继承时其内部使用this必须调用super
// 直接调用A()则会调用constructor,A.prototype.constructor等于A(实际是构造函数的语法糖)

// extends A.__proto__ = B

// static