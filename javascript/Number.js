// Number
// Number(value) value不能被完全转化则返回NaN
// Number.EPSILON epsilon
// Number.MAX_SAFE_INTEGER 能表示的最大安全整数2**53 - 1
// Number.MAX_VALUE js能表示的最大值(大于此为Infinity)
// Number.MIN_SAFE_INTEGER
// Number.MIN_VALUE js能表示的最小正值
// Number.NEGATIVE_INFINITY -Infinity
// Number.NaN NaN
// Number.POSITIVE_INFINITY Infinity

// Number.isFinite(value) 检测value是否是有穷
// Number.isInteger(value) 检测value是否是整数
// Number.isNaN(value) 检测value是否是NaN
// Number.isSafeInteger(value) 检测value是否是安全整数
// Number.parseFloat() 同parseFloat
// Number.parseInt() 同parseInt

// Number.prototype.toExponential(fractionDigits) 以指数表示法返回该数值字符串,fractionDigits保留的小数位(数字字面量加空格或者两个点调用)
// Number.prototype.toFixed(digits) 四舍五入一个数字为字符串, digits默认0.(大于1e+21则为toString)
// Number.prototype.toLocaleString() 返回这个数字在特定语言环境下的表示字符串(可把数字变成货币,的格式)
// Number.prototype.toPrecision(precision) 使数字变成指定长度的字符串(可用于补0)
// Number.prototype.toPrecision([radix]]) 以指定进制格式化数字成字符串,负号会保留
// Number.prototype.valueOf() 返回一个被Number对象包装的原始值(内部调用,基本不用)