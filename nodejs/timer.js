// 函数内调用setTimeout建议用箭头函数,避免this问题(浏览器是window调函数,nodejs是Timeout对象调)

// Immediate类 setImmediate()返回
// immediate.hasRef() Immediate对象是否保持活动状态
// immediate.ref() 将Immediate对象对象设为活动状态
// immediate.unref() 将Immediate对象设为非活动状态
// setImmediate(callback[, ...args])
// setInterval(callback, delay[, ...args])
// setTimeout(callback, delay[, ...args])
// clearImmediate(immediate)
// clearInterval(timeout)
// clearTimeout(timeout)

// Timeout类 setTimeout()和setInterval()返回
// timeout.refresh() 刷新定时器时间
// timeout.hasRef()
// timeout.ref()
// timeout.unref()