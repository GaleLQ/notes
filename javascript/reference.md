# Array
#### Array.length
- 返回或设置数组元素个数
- 可用于截断数组
#### Array.from
```bash
Array.from(arrayLike[, mapFn[, thisArg]])
```
- 拥有length属性的对象，会按照索引和添加undefined形成数组
#### Array.isArray
```bash
Array.isArray(obj)
```
#### Array.of
```bash
Array.of(element0[, element1[, ...[, elementN]]])
```
## Instance
# concat
```bash
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```
- value参数是数组或值
- 返回新数组是之前的浅拷贝
# copyWithin
```bash
arr.copyWithin(target[, start[, end]])
```
- 浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小
# entries
```bash
arr.entries()
```
- 返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对组成的数组
# every
```bash
arr.every(callback[, thisArg])
callback(currentValue, index, arr)
```
- 所有数组依次找到第一个使callback返回false，否则返回true
# fill
```bash
arr.fill(value[, start[, end]])
```
- 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
- 改变了原始数组
# filter
```bash
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```
- 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
# find
```bash
arr.find(callback[, thisArg])
```
- 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
# findIndex
```bash
arr.findIndex(callback[, thisArg])
```
- 返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1
# flat
```bash
var newArray = arr.flat(depth) // default depth = 1
- 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
```
# flatMap
```bash
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {}[, thisArg])
```
- 先map数组再flat一层
# forEach
```bash
arr.forEach(callback[, thisArg])
```
- 对数组的每个元素执行一次提供的函数
- 不可执行中break
# includes
```bash
arr.includes(valueToFind[, fromIndex])
```
- 判断一个数组是否包含一个指定的值
# indexOf
```bash
arr.indexOf(searchElement[, fromIndex = 0])
```
- 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
# join
```bash
arr.join([separator])
```
- 将一个数组（或一个类数组对象）的所有元素用separator连接成一个字符串
# keys
```bash
arr.keys()
```
- 返回一个包含数组中每个索引键的Array Iterator对象
# lastIndexOf
```bash
arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
```
- 返回指定元素在数组中的最后一个的索引
# map
```bash
var new_array = arr.map(function callback(currentValue[, index[, array]]) {}[, thisArg])
Array.prototype.map.call('Hello world', (x) => {})
["1", "2", "3"].map(parseInt)
```
- 该数组中的每个元素都调用一个提供的函数后返回的结果的数组
# pop
```bash
var lastValue = arr.pop()
```
- 从数组中删除最后一个元素,并返回该元素的值,此方法更改数组的长度
- 若无返回undefined
# push
```
arr.push(element1, ..., elementN)
```
- 将一个或多个元素添加到数组的末尾，并返回该数组的新长度
# reduce/reduceRight
```
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```
- 数组中的每个元素执行一个由您提供的reducer函数，将其结果汇总为单个返回值。
- 空数组且无initialValue将报错,一个值将返回这个值,不执行函数
# reverse
```
arr.reverse()
```
- 将数组中元素的位置颠倒，并返回该数组
- 该方法会改变原数组
# shift
```
arr.shift()
```
- 从数组中删除第一个元素，并返回该元素的值
- 该方法会改变原数组
# slice
```
arr.slice([begin[, end]])
```
- 返回一个原数组的浅拷贝,左闭右开
- -n表示从又开始第n个
# some
```
arr.some(callback(element[, index[, array]])[, thisArg])
```
- 返回是否至少有一个让函数返回true的布尔值
# sort
```
arr.sort([compareFunction(firstEl, secondEl)])
```
- 用原地算法(数组改变)或根据compareFunction排序数组并返回
- 默认逐位比较元素转换成字符串后的Unicode位点(10前于2)
- compareFunction返回值
        - 小于0,a前于b
        - 大于0,b前于a
        - 等于0或返回其他,不变
# splice
```
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```
- 从start开始删除deleteCount个并填入item
- 返回delete的元素数组,改变原数组
- deleteCount绝对值大于数组长度,则从开始或结束开始处理
# toLocaleString
```
arr.toLocaleString([locales[,options]]);
```
- 将元素按照各自的方法转成字符串后,返回用特定语言环境的字符串(例如,)拼接的字符串
- 详情见不同类型的此方法
# toString
```
arr.toString()
```
- 返回一个表示数组及其元素的字符串
- 作为文本值或者进行字符串连接操作时,将会自动调用其toString方法
# unshift
```
arr.unshift(element1, ..., elementN)
```
- 将一个或多个元素添加到数组的开头，并返回该数组的新长度
# values
```
arr.values()
```
- 返回一个新的Array Iterator对象，该对象包含数组中每个索引的值组成的数组(entries是键值对)
# @@iterator
```
arr[Symbol.iterator]()
```
- 默认与values()返回值相同
# Array[@@species]
```
Array[Symbol.species]
```
- 访问器属性返回Array的构造函数