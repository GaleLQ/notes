// 各部分作用
// Application/Modules: 业务的js代码
// C/C++ bindings: js调用C/C++核心库的桥接代码(zlib,crypto(Openssl),c-cares,http-parser等)
// Addons: 连接第三方或者自己实现的C++的胶水代码
// V8: 以C++实现的高性能引擎,将js编译成机器码(cpu直接执行快)
// libuv: 处理所有的IO请求,文件系统IO和DNS相关交给维护线程池(默认是4个),网络和平台相关交给其他http://docs.libuv.org/en/v1.x/design.html
