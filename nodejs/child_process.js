// exec基于execFile基于spawn, fork基于spawn
// execFile不创建shell,速度快但不支持I/O重定向和文件通配等行为


// child_process.exec(command[, options][, callback])
// child_process.execFile(file[, args][, options][, callback])
// child_process.spawn(command[, args][, options])
// child_process.fork(modulePath[, args][, options]) IPC
