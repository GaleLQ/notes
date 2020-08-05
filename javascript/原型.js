// prototype概念: 给其他对象提供共享属性的对象,js是基于原型而实现的语言
// __proto__不存在,默认调用Object.prototype的__proto__的get/set方法
// obj.__proto__ === Object.prototype 当创建一个对象时,其原型继承Object
// otherObj.__proto__.__proto__ === Object.prototype 当非new Object创建一个对象(函数本身也是一个对象)时,其原型继承Object创建的空对象
// Fn.prototype.__proto__ === Object.prototype 为了让函数创建出来的对象继承对象原始属性
// Fn.prototype.constructor === Fn 为了让创建的对象可以访问到构造对象(历史遗留)
// fnObj.__proto__ = Fn.prototype fn.call(fnObj) new所做的事,对应构造函数原型关系和通过函数实例化自己
