// Map
// 大多数可以保证插入的顺序
// new Map([iterable]); iterable值需要是一个二值数组,空数组或者一个null会undefined
// Map的key可以是任意类型,Map在计算key或频繁操作key时性能高一些
// Map.prototype.size(感觉就是实例上的属性) 返回元素的个数
// Object.prototype.toString.call(new Map()) [object Map]
// Map.prototype.clear() 清空所有,无返回
// Map.prototype.delete() 删除指定,返回是否成功布尔
// Map.prototype.entries() 返回一个包含[key, value]的可迭代对象
// Map.prototype.forEach() 循环
// Map.prototype.get() 返回指定的元素,没有则undefined
// Map.prototype.has() 返回这个值是否存在的布尔
// Map.prototype.keys() 返回一个包含key的可迭代对象
// Map.prototype.set() 加一个[key, value]
// Map.prototype.values() 返回一个包含value的可迭代对象
// Map.prototype[@@iterator]() 自身可迭代
