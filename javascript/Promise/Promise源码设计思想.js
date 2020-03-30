// FIXME 细节还需完善
const PENGING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class Promise {
    // 初始化promise
    constructor(fn) {
        // 表示promise的三种状态，待定中,已成功,已拒绝
        this._status = PENGING;
        // 表示成功状态执行的函数数组，同步调用数组里面的所有函数
        this._fulfilledQueues = []
        // 表示失败状态执行的函数数组，同步调用数组里面的所有函数
        this._rejectedQueues = []
        // 表示promise的值
        this._value = undefined

        try {
            // 初始化时同步执行fn函数,传入两个函数参数
            fn(this._resolve.bind(this), this._rejected.bind(this));
        } catch (err) {
            // 传入的函数执行过程出错，promise变为已拒绝，且传递错误消息
            this._rejected(err);
        }
    }
    // 传入的值是promise，则当前promise的值依赖于传入的promise
    // 传入的是值，则顺序执行成功队列里面的函数
    _resolve(value) {
        // 整体包起来函数内容，为了方便表示异步调用
        // 这里注意用的箭头函数,所以下文this是没问题的
        const run = () => {
            // 如果status已经有结果，则调用resolve无效
            if (this._status !== PENGING) {
                return;
            }

            // 封装两个执行成功和失败队列的函数
            const runFulfilled = value => {
                let cb;
                while (cb = this._fulfilledQueues.shift()) {
                    cb(value);
                }
            }
            const runRejected = error => {
                let cb;
                while (cb = this._rejectedQueues.shift()) {
                    cb(error);
                }
            }

            // 如果传入的value是一个promise,则当前的promise的值和状态依赖于传入的promise
            if (value instanceof Promise) {
                value.then(
                    val => {
                        this._value = val;
                        this._status = FULFILLED;
                        runFulfilled;
                    },
                    err => {
                        this.value = err;
                        this._status = REJECTED;
                        runRejected(err);
                    }
                )
            } else {
                runFulfilled(value);
            }
        }

        // 异步调用哦
        setTimeout(run, 0);
    }
    // 执行拒绝队列里面的函数
    _reject(err) {
        if (this._status !== PENDING) {
            return;
        }

        const run = () => {
            this._status = REJECTED;
            this._value = err;
            let cb;
            // 这里因为是失败的情况,所以不管传的是不是promise了,和resolve有点差异
            while (cb = this._rejectedQueues.shift()) {
                cb(err);
            }
        }
        setTimeout(run, 0);
    }

    // 重点
    // 如果status待定，则将函数加入相应的队列
    // 如果status成功，则执行这个函数拿到返回值(返回promise则promise的值)作为当前promise的值
    then(onFulfilled, onRejected) {
        return new Promise((resolve, reject) => {
            const { _status, _value } = this;
            if (_status === PENDING) {
                this._fulfilledQueues.push(onFulfilled);
                this._rejectedQueues.push(onRejected);
            } else if (_status === FULFILLED) {
                try {
                    //如果传入的不是函数,则把这个当前promise的值作为生成的promise值(不是函数返回值)
                    if (!isFunction(onFulfilled)) {
                        resolve(_value);
                    } else {
                        // 如果PENDING过程已经结束,执行这个函数,拿到返回值
                        let res = onFulfilled(value);
                        if (res instanceof Promise) {
                            // 执行函数如果返回的是promise,则使用这个promise的值作为本次then生成promise的值
                            res.then(resolve, reject);
                        } else {
                            // 执行函数返回正常值则返回个resolve的promise
                            resolve(res);
                        }
                    }
                } catch (err) {
                    // 如果在执行then这个函数(onFulfilled)时失败,则then返回一个reject的promise
                    reject(err);
                }
            } else { // _status等于REJECTED,比FULFILLED简单一点,基本类似
                try {
                    // 如果then的第二个参数不是函数,则then返回一个reject的promise
                    if (!isFunction(onRejected)) {
                        reject(value);
                    } else {
                        res = onRejected(value);
                        if (res instanceof Promise) {
                            res.then(resolve, reject);
                        } else {
                            resolve(res);
                        }
                    }
                } catch (err) {
                    // 如果在执行then的第二个处理reject情况时的函数失败,则then返回一个reject的promise
                    reject(err);
                }
            }
        })
    }
    // 当作then的语法糖
    catch(reject) {
        return this.then(undefined, reject);
    }
    // promise完成或拒绝后执行这个函数
    finally(finallyFn) {
        // 执行了函数之后再返回其值
        return this.then(
            resolve => {
                finallyFn();
                return resolve;
            },
            reject => {
                finallyFn();
                return this.reject(reject);
            }
        )
    }

    // 常用于promise和非promise全转化为promise的情况
    // 传入promise则直接返回，传入值则生成一个新的promise
    static resolve(value) {
        if (value instanceof Promise) {
            return value;
        }

        return new Promise(r => r(value));
    }

    static reject(value) {
        // 不管是不是promise都包一层,哪怕是reject的promise
        return new Promise((r, re) => re(value));
    }
    // 等待所有promise都完成
    static all(arr) {
        return new Promise((r, re) => {
            const tempArr = [];
            for (const promise of arr) {
                // 确保全为promise
                this.resolve(promise).then(
                    resolve => {
                        // 一个变量判断是否全resolve
                        tempArr.push(resolve);
                        if (tempArr.length === arr.length) {
                            r(tempArr);
                        }
                    },
                    reject => {
                        // 有一个reject即失败
                        re(reject);
                    }
                )
            }
        });
    }

    static race(arr) {
        // 任意成功或失败就返回
        return new Promise((r, re) => {
            for (const promise of arr) {
                this.resolve(promise).then(
                    resolve => {
                        r(resolve);
                    },
                    reject => {
                        re(reject);
                    }
                )
            }
        });
    }
}