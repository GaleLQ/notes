// https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg
// prototype概念: 给其他对象提供共享属性的对象,js是基于原型而实现的语言
// __proto__不存在,默认调用Object.prototype的__proto__的get/set方法
// obj.__proto__ === Object.prototype 当创建一个对象时,其原型继承Object
// Fn.prototype.__proto__ === Object.prototype 所有函数都可作为构造函数,为了让创建出来的对象