## typeof
```
- typeof 123;           // 'number' NaN
- typeof '123';         // 'string'
- typeof false;         // 'boolean'
- typeof v;             // 'undefined'  undefined
- typeof function (){}; // 'function' 
- typeof {};            // 'object'     null,array
```
## instanceof
## Object.prototype.toString

## null and undefined
```
Number(null) // 0
Number(undefined) // NaN
undefined == null // true
```
## Boolean
```
// false
- undefined
- null
- false
- 0
- NaN
- "" or ''
```
## Number
```
- 所有数字64浮点数存储
    - 1: 符号位正0负1
    - 2~12: 指数部分
    - 13~64: 小数部分
    - 公式: (-1)^符号位 * 1.xx...xx * 2^指数部分
    - 2^53是16位,15位内可精确表示
    - 大于临界返回Infinity,小于临界返回0(Number.MAX_VALUE,Number.MAX_VALUE)
- 
    - 0xFF 0o33 0b11 0B11 1234e3 123E-3
    - 1/0 1/+0 Infinity, 1/-0 -Infinity 0/0+0-0 NaN
    - NaN === NaN // false
    - +-Infinity无穷 Infinity与NaN相比总是false 与undefined计算总是NaN
- 
```
## 全局方法
```
    - parseInt(first, second)
        - 将字符串转化成整数
        - first非字符串先格式成字符串
        - 按照second进制解析
        - 遇到不能解析的返回前部分,无则NaN
    - parseFloat(first)
        - 将字符串转化为浮点数,无第二参数,其余同上
        - 注意和Number区别
    - isNaN(first)
        - 将first转换成数值,判断是否是NaN
        - 所以注意非数值时会混乱
    - isFinite()
        - 判断是否为正常的数值
        - 除+-Infinity,NaN,undefined外返回true
    - base64
        - btoa() // 将ASII转化为base64, 非ASII下,btoa(encodeURIComponent(str));decodeURIComponent(atob(str));
        - atob() // base64转化为原值
```
## String
```
    - 无法以数组下标的方式改变字符串
    - str.length也无法更改
    - 一些特殊字符会被认为4字节length为2
```
