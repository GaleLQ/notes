// 基础
// 区分大小写
// 使用 Unicode 字符集

// 注释
// // 单行注释
// /* 多行注释 */

// 声明
// var
// let
// const
// 字母下划线$开头
// 数值环境undefined作为NaN,null作为0

// 提升(var和funciton)
// 只提名,不提定义
// let const暂时性死区TDZ

// 数据类型(8种)
// Boolean,null,undefined,Number,BigInt,String,Symbol,Object

// 数据类型的转换
// 减变数字加变串

// 条件判断语句
// if else
// false: false,undefined,null,0,NaN,""
// switch case default break
// try catch finally throw

// for
// do while
// while 
// label(配合break,continue)
// break,continue
// for...in
// for...of

// function fnName(){}
// arguments.callee()等于函数自己
// 一个闭包是一个可以自己拥有独立的环境与变量的表达式(自身可被外部访问,环境和变量只能自己访问))
// 命名冲突近优先
// % ++ - + ** & | ^ ~ << >> >>> && || ! 
// delete typeof void(执行表达式返回undefined) in instanceof this new super 
// Comprehensions(实验性质,暂无,2019.12)

// 二进制 0B(0b)开头
// 八进制 0(0o es6后)开头(后面小于8否则被当成10)
// 十六进制 0x 开头
// 指数10幂 E(e) 2e6(2000000)

// '\xA9' \x后面会被认为是十六进制数(十六进制转义序列)
// '\u00A9' \u后面四位16进制(Unicode转义序列),更多'\u{2F804}'括起来(等于'\uD87E\uDC04',Unicode编码转义)

// Intl 提供了语言敏感的字符串比较，数字格式化和日期时间格式化功能(Collator, NumberFormat, 和 DateTimeFormat)

// /ab+c/ 字面量提供了脚本加载后的编译,new RegExp("ab+c")提供了运行时的编译(慢不建议)

// length可用来截断数组,取值为最后有效的索引加一

// 类型化数组(array-like object) js引擎专门优化二进制数据,ArrayBuffer,DataView

// collection Map Object WeakMap Set Array WeakSet

// 可迭代协议 包含Symbol.iterator属性(*[Symbol.iterator](){})

// 迭代器协议 实现next()这个

// Meta programming 见Proxy和Reflect

// 闭包是由函数以及创建该函数的词法环境组合而成

// new加函数名,括号省略不省略

// 原型链上查找属性比较耗时,原型链上的每个可枚举属性都会被枚举出来

// let o = new Foo()(var o = new Object();o.__proto__ = Foo.prototype;Foo.call(o);)

// ArrayBuffer 结合不同视图操作二进制

// 引用计数(循环引用无法回收),标记-清除(对象是否可以获得)

// 自动分号补全:空语句、let、const、import、export、表达式语句、debugger、continue、break、throw、return

// 关于可枚举性判断,https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

// Hashbang注释:以#!开头且仅在脚本或模块的绝对开头有效,指定特定JavaScript解释器的路径要用于执行脚本