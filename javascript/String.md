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
# endsWith(startsWith)
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
- 类似正则exec
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
# repeat
```
str.repeat(count)
```
- 指定字符串的指定数量副本的新字符串
# replace
```
str.replace(regexp|substr, newSubStr|function)
```
- [mdn](!https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
# search
```
str.search(regexp)
```
- 返回首次匹配成功的匹配项索引
- 类似于正则test
# slice
```
str.slice(beginIndex[, endIndex])
```
- 返回字符串的一部分
- 左闭右开
# split
```
str.split([separator[, limit]])
```
- 返回被separator分割的数组
# substring
```
str.substring(indexStart[, indexEnd])
```
- 返回一个字符串在开始索引到结束索引之间的一个子集
- 字符串左闭右开,非index
# toLocaleLowerCase(toLocaleUpperCase)
```
str.toLocaleLowerCase()
```
# toLowerCase(toUpperCase)
```
str.toLowerCase()
```
- 字符串转小写
# toString
```
str.toString()
```
- 返回指定对象的字符串形式
- 和valueOf返回值一样
# trim(trimEnd, trimRight, trimStart, trimLeft)
```
str.trim()
```
- 删除字符串两端空白字符
- 包括space, tab, no-break space, LF, CR等
# valueOf
```
str.valueOf()
```
- 返回一个String对象的原始值