// 生成EventEmitter实例时内部调用init方法
function EventEmitter() {
    EventEmitter.init.call(this);
}

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;

// 监听时增加,移除时减少
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
EventEmitter.defaultMaxListeners = 10;

// 其中EventEmitter的once和on是单独实现的函数,不是实例的once和on
EventEmitter.once = once;
EventEmitter.on = on;


// 生成一个内部用来维护的_events
// 将本次实例的_maxListeners置undefined
EventEmitter.init = function () {
    this._events = Object.create(Object.create(null));
    this._maxListeners = this._maxListeners || undefined;
}

// 将事件名和相应的函数通过放进_events维护
// 如果监听的不是newListener事件,触发newListener函数(注册监听器之前, removeListener移除监听器之后)
EventEmitter.prototype.on = function (eventName, callback) {
    if (eventName !== 'newListener') {
        this.emit('newListener')
    }

    if (this._events[eventName]) {
        this._events[eventName].push(callback)
    } else {
        this._events[eventName] = [callback]
    }
}

// 顺序同步执行包含所有元素的克隆数组的函数(防止无限循环)
EventEmitter.prototype.emit = function (eventName, ...args) {
    if (this._events[eventName]) {
        this._events[eventName].map(i => i).forEach(callback => {
            callback.apply(this, args);
        });
    }
}

// 将相应事件的函数从队列中移除
EventEmitter.prototype.removeListener = function (eventName, callback) {
    if (this._events[eventName]) {
        this._events[eventName] = this._events[eventName].filter(fn => fn !== callback && fn.listener !== callback);
    }
}

// 将一个执行后会在_events删除自己的闭包函数放入_events
// 设置闭包函数的listener属性为removeListener时判断
EventEmitter.prototype.once = function (eventName, callback) {
    function wrap(...args) {
        callback.apply(this, args);
        this.removeListener(eventName, wrap);
    }
    wrap.listener = callback;
    this.on(eventName, wrap);
}

// 设置实例的_maxListeners
EventEmitter.prototype.setMaxListeners = function (count) {
    this._maxListeners = count;
}

// 返回本次实例的_maxListeners或默认的defaultMaxListeners
// _maxListeners为0返回默认
EventEmitter.prototype.getMaxListeners = function () {
    if (!this._maxListeners) {
        return EventEmitter.defaultMaxListeners;
    }
    return this._maxListeners
}

// 返回事件监听函数数量
EventEmitter.prototype.listenerCount = function (eventName) {
    return this._events[eventName].length
}

// 返回事件名数组
EventEmitter.prototype.eventNames = function () {
    return Object.keys(this._events);
};

// 返回事件监听器函数数组
// 内部克隆包含所有元素的新数组
EventEmitter.prototype.listeners = function (eventName) {
    return this._events[eventName].map(i => i);
};

// 返回事件监听器函数数组(once返回闭包原数组)
EventEmitter.prototype.rawListeners = function (eventName) {
    return this._events[eventName].map(i => i.listener || i);
};

// 移除事件的或所有的监听函数
EventEmitter.prototype.removeAllListeners = function (eventName) {
    if (eventName) {
        delete this._events[eventName];
    } else {
        this._events = Object.create(Object.create(null));
    }
}