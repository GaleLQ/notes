# Object
## es6以来,保留了key为字符串的插入顺序
## 关于对象属性的可枚举与判断见[here](!https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
## constructor
- 实例.constructor = 原型对象.constructor = 构造函数
#### Object.assign
```
Object.assign(target, source1, source2)
```
- 将所有可枚举属性的值从一个或多个源对象复制到目标对象并返回目标对象
- 逐层属性覆盖原则
#### Object.create
```
Object.create(proto[, propertiesObject])
```
- 创建一个以proto对象作为__proto__的对象
- propertiesObject是添加到对象的可枚举属性,属性描述符见defineProperty
#### Object.defineProperties
```
Object.defineProperties(Obj, props)
```
- 直接在一个对象上定义新的属性或修改现有属性并返回
#### Object.defineProperty
```
Object.defineProperty(obj, prop, descriptor)
```
- 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象
- descriptor见[mdn](!https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
#### Object.entries
```
Object.entries(obj)
```
- 给定对象自身可枚举属性的键值对数组
#### Object.freeze
```
Object.freeze(obj)
```
- 冻结一个对象
- 浅冻结,只有一层
#### Object.fromEntries
```
Object.fromEntries(iterable)
```
- 把键值对列表转换为一个对象(Object.entries反转)
#### Object.getOwnPropertyDescriptor
```
Object.getOwnPropertyDescriptor(obj, prop)
```
- 返回指定对象上一个自有属性对应的属性描述符
#### Object.getOwnPropertyDescriptors
```
Object.getOwnPropertyDescriptors(obj)
```
- 返回指定对象上所有属性对应的属性描述符
#### getOwnPropertyNames
```
Object.getOwnPropertyNames(obj)
```
- 指定对象的所有自身属性的属性名数组
- 包括不可枚举不包括Symbol
#### Object.getOwnPropertySymbols
```
Object.getOwnPropertySymbols(obj)
```
- 给定对象自身的所有Symbol属性的数组
#### getPrototypeOf
```
Object.getPrototypeOf(object)
```
- Object.getPrototypeOf(object) = object.__proto__
#### Object.is
```
Object.is(value1, value2)
```
- 判断两个值是否是相同的值
- 与===差异
    - NaN等于NaN
    - 负0不得0,正0等于0
#### Object.isExtensible
```
Object.isExtensible(obj)
```
- 判断一个对象是否是可扩展的
- Object.preventExtensions，Object.seal 或 Object.freeze使其不拓展
- 注意和Object.isFrozen,Object.isSealed区别
    - isExtensible是否可以添加新的属性
    - isFrozen不可扩展,属性不可配置,不可写
    - isSealed不可扩展,属性不可配置
#### Object.keys
```
Object.keys(obj)
```
- 给定对象的自身可枚举属性组成的数组
- for in自身和原型的可枚举,getOwnPropertyNames自身所有
#### preventExtensions
```
Object.preventExtensions(obj)
```
- 让一个对象变的不可扩展，也就是永远不能再添加新的属性
## Instance
# hasOwnProperty
```
obj.hasOwnProperty(prop)
```
- 对象自身属性中是否具有指定的属性
- in有原型
# isPrototypeOf
```
prototypeObj.isPrototypeOf(object)
```
- 测试一个对象是否存在于另一个对象的原型链上
- 注意实例对象,原型对象,构造函数(instanceof)之间判断
# propertyIsEnumerable
```
obj.propertyIsEnumerable(prop)
```
- 指定的属性是否可枚举
- 不包括原型上的
# toLocaleString
```
obj.toLocaleString()
```
# toString
```
obj.toString()
```
- 