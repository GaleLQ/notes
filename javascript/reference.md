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
- 