// @ + 函数名 只能用在类或类方法面前
// 装饰器编译时执行的函数
// 类高阶函数的思想修改行为

// 类的装饰
// @decorator
// class A {}
// 等同于
// class A {}
// A = decorator(A) || A;

// @moreParams(params) 外面套一层函数加额外参数
// class A {}
// function moreParams(params) { return function (A) {} }

// 方法的装饰
// method(A.prototype, 'functionName', descriptor) 此时实例还未生成,与类参数不同,一般通过descriptor.value函数体修改函数行为
