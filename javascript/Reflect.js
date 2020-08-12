// Reflect.apply(targetFn, thisArgument, argumentsList) 用指定的值作为this调用指定的函数并返回结果
// Reflect.construct(target, argumentsList[, newTarget]) 相当于new target(...argumentsList),如果有newTarget则设置为构造函数
// Reflect.defineProperty(target, propertyKey, attributes) 定义对象的属性,返回布尔表示是否成功
// Reflect.deleteProperty(target, propertyKey) 删除对象的属性,返回布尔表示是否成功
// Reflect.get(target, propertyKey[, receiver]) 获取对象的属性,receiver可选作为getter的this值
// Reflect.getOwnPropertyDescriptor(target, propertyKey) 获取对象的属性的描述符
// Reflect.getPrototypeOf(target) 获取对象的原型对象
// Reflect.has(target, propertyKey) 判断指定对象上是否存在该属性,同in
// Reflect.isExtensible(target) 判断对象是否是可拓展的
// Reflect.ownKeys() 对象所拥有的key,Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))
// Reflect.preventExtensions(target) 使对象变成不可拓展的,不可加属性
// Reflect.set(target, propertyKey, value[, receiver]) 设置对象的属性,receiver可选作为setter的this值
// Reflect.setPrototypeOf(target, prototype) 设置对象的原型对象
// 