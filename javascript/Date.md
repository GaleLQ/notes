# Date
```
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```
- Date.length结果为7
#### Date.UTC
```
Date.UTC(year,month[,date[,hrs[,min[,sec[,ms]]]]]) 
```
- 返回从1970-1-1 00:00:00到指定日期的毫秒数(时间戳)
- month 0~11
#### Date.now
```
Date.now()
```
- 返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数(时间戳)
#### Date.parse
```
Date.parse(dateString)
```
- 解析一个表示某个日期的字符串,并返回时间戳
## Instance
# getDay(getFullYear, getMonth, getDate, getHours, getMinutes, getSeconds, getMilliseconds)
```
dateObj.getDay()
```
- 根据**本地时间**, 返回日期是一周的第几天
- 根据UTC时间, eg: getUTCDay,以上8个都存在
# setFullYear(setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds)
```
dateObj.setFullYear()
```
- 根据**本地时间**, 设置日期年份
- 根据UTC时间, eg: setUTCDay,以上7个都存在,注意,无setDay
# getTime
```
dateObj.getTime()
```
- 返回日期的时间戳
# setTime
```
dateObj.setTime(timestamp)
```
- 根据时间戳设置时间
# getTimezoneOffset
```
dateObj.getTimezoneOffset()
```
- 返回UTC与当前时区的差值的分钟数
# toDateString(toTimeString)
```
dateObj.toDateString()
```
- 以美式英语和人类易读的形式返回一个日期对象日期部分的字符串
# toISOString
```
dateObj.toISOString()
```
- 返回一个ISO格式字符串, YYYY-MM-DDTHH:mm:ss.sssZ
# toJSON
```
dateObj.toJSON()
```
- 返回日期对象的字符串格式
- 即toISOString的值,常用于序列化
# toLocaleDateString
```
dateObj.toLocaleDateString([locales [, options]])
```
# toLocaleString
```
dateObj.toLocaleString([locales [, options]])
```
# toLocaleTimeString
```
dateObj.toLocaleString([locales [, options]])
```
# toString
```
dateObj.toString()
```
- 返回一个字符串(Tue Jan 01 2019 08:00:00 GMT+0800 (中国标准时间))
- 作为文本或字符串拼接时自动调用
# toUTCString
```
dateObj.toUTCString()
```
- 返回使用UTC时区表示给定日期的字符串
# valueOf
```
dateObj.valueOf()
```
- 返回日期的时间戳,同getTime取值
# [@@toPrimitive]()
```
Date()[Symbol.toPrimitive]('string' | 'number')
```
- 返回日期的不同格式原始值