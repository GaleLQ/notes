// 各部分作用
// Application/Modules: 业务的js代码
// C/C++ bindings: js调用C/C++核心库的桥接代码(zlib,crypto(使用Openssl加解密),c-cares(dns解析),http-parser(解析http响应)等)
// Addons: 连接第三方或者自己实现的C++的胶水代码
// V8: 以C++实现的高性能引擎,将js编译成机器码(cpu直接执行快),提供C++的接口
// libuv: 处理所有的IO请求,文件系统IO和DNS相关交给维护线程池(默认是4个),网络和平台相关交给其他http://docs.libuv.org/en/v1.x/design.html
// 异步事件: 
// 非IO: 定时器,microtask(promise),process.nextTick,setImmediate,DNS.lookup 
// IO: 网络IO,文件IO,其他DNS操作
// 网络IO: linux的epoll模型,类unix的kqueue,windows的IOCP,SunOs是event ports,libuv封装了这几个IO模型
// libuv线程池: 默认4,负责文件IO、DNS操作、用户的异步代码,内置任务队列,完成时通知事件循环执行回调
// 事件循环:(https://image-static.segmentfault.com/402/820/4028209861-5a22fda786d0c_articlex)
// - 初始化环境
// - 执行输入代码
// - 执行process.nextTick
// - 执行microtasks
// - 进入事件循环
//  - timers: 执行到期的定时器队列里的#所有函数, 一个一切换,不同版本不一样#,setTimeout,setInterval(最低1ms)
//  - pending callbacks: 上轮循环poll阶段因为某些原因不能执行的callbacks
//  - idle,prepare阶段: 使用了大量的宏,内部调用
//  - poll: 执行
//  - check: setImmediate的回调(如有,poll空后立即执行)
//  - close callbacks: 一些关闭的回调函数,如socket.on('close', ...)
//  ###每个阶段结束都会先执行process.nextTick,再执行microtasks

// task(宏任务): script(整体代码)、setTimeout、setInterval、I/O、事件、postMessage、 MessageChannel、setImmediate (Node.js)
// microtasks(微任务): Promise.then、 MutaionObserver、process.nextTick (Node.js)