// process.on('exit', code => {}) exit事件 异步操作丢失
// process.on('unhandledRejection', (reason, promise) => {}) 未处理的promise
// process.on('rejectionHandled', promise => {}) 未处理promise被处理时出发
// process.on('uncaughtException', (err, origin) => {}) 同步错误或未处理的promise拒绝

// process.arch 操作系统 CPU 架构的字符串
// process.argv 启动程序的命令行参数
// process.cwd() Node.js 进程的当前工作目录
// process.env 包含用户环境的对象
// process.exit([code]) 以退出状态 code 指示 Node.js 同步地终止进程
// process.memoryUsage() 内存使用情况的对象
// process.nextTick(callback[, ...args]) 见事件循环
// process.pid 进程的 PID
// process.ppid 父进程的 PID
// process.platform Node.js进程运行的操作系统平台
// process.stderr 连接到fd标准的可写流
// process.stdin 可读
// process.stdout 可写
// process.uptime() 进程运行秒
// process.version node版本
// process.versions 及其相关版本
