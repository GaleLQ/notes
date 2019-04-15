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
