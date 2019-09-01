# String
#### String.fromCharCode
```bash
String.fromCharCode(num1, ..., numN)
```
- 返回由指定的UTF-16代码单元序列创建的字符串
#### String.fromCodePoint
```bash
String.fromCodePoint(num1[, ...[, numN]])
```
- 返回指定的 Unicode 编码位置创建的字符串
## Instance
# charAt
```bash
str.charAt(index)
```
- 从一个字符串中返回指定的字符,默认0
# charCodeAt
```
str.charCodeAt(index)
```
- 返回索引处UTF-16代码单元值的数字
# codePointAt
```
str.codePointAt(index)
```
- 返回索引处unicode码点
# concat
```
str.concat(string2, string3[, ..., stringN])
```
- 一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回
- 不建议使用,性能差
# endsWith
```
str.endsWith(searchString[, length])
```
- 判断是否以其结尾
- length可改变判断尾部位置
# includes
```
str.includes(searchString[, position])
```
- 判断一个字符串是否包含在另一个字符串中
- position判断从那个位置开始寻找
# indexOf(lastIndexOf)
```
str.indexOf(searchValue[, fromIndex])
```
- 返回str中第一次出现的指定值的索引
- 从指定处开始搜索
# localeCompare
```
referenceStr.localeCompare(compareString[, locales[, options]])
```
- 比较referenceStr和compareString的排序
# match
```
str.match(regexp)
```
- 返回一个字符串匹配正则表达式的的结果
# matchAll
```
str.match(regexp)
```
- 返回一个包含所有匹配正则表达式及分组捕获结果的迭代器
# normalize
```
str.normalize([form]);
```
- 按照指定的一种 Unicode 正规形式将当前字符串正规化
# padEnd(padStart)
```
str.padEnd(targetLength [, padString])
```
- 在原字符串末尾填充指定的填充字符串直到目标长度所形成的新字符串
