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