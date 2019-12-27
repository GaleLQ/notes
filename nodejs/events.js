// EventEmitter.defaultMaxListeners 改变所有event实例最多注册监听器个数的默认值
// EventEmitter.once(emitter, eventName) 创建promise, 触发eventName则promise变为resolve
// EventEmitter.EventEmitter = EventEmitter


// emitter.on('newListener', (event, listener) => {}) 注册监听器<之前>触发
// emitter.on('removeListener', (event, listener) => {}) 移除监听器<之后>触发
// emitter.on('error', (err) => {}) 创建实例出错会触发(情况少)
// emitter.off(eventName, listener) removeListener alias
// emitter.listenerCount(eventName) 此事件监听器数量
// emitter.eventNames() 已注册监听器的事件名数组
// emitter.listeners(eventName) 此事件监听器函数数组
// emitter.rawListeners(eventName) 此事件监听器函数数组的拷贝,可控制once函数是否调用后被移除
// emitter.getMaxListeners() 获取限制数
// emitter.setMaxListeners(n) 默认10+警告
// emitter.on(eventName, listener) 添加监听器
// emitter.prependListener(eventName, listener)  添加到开头
// emitter.prependOnceListener(eventName, listener)
// emitter.removeAllListeners([eventName]) 移除全部监听器或指定的 eventName 事件的监听器
// emitter.removeListener(eventName, listener) 移除指定事件指定listener引用的监听器,最近先移除
// emitter.emit(eventName[, ...args]) 顺序触发所有监听器
// emitter.addListener(eventName, listener) 等于 emitter.on
// emitter.once(eventName, listener) 添加单次监听器,先移除后调用