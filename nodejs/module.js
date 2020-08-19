// require三步骤: 路径分析,文件定位,编译执行

// require第一次加载后会根据id缓存
// require总是会优先加载核心模块,即使有同名
// 循环依赖时,首先被循环的文件到循环点即返回
// require.main 指向程序的主模块
// 逐层向上找其/node_modules模块,再搜索全局目录
// 依次解析 先做为文件: 名 .js .json .node 后做为目录: package.json的main index.js index.node
// 默认封装(function(exports, require, module, __filename, __dirname) {});

// __dirname 绝对目录名
// __filename 绝对文件名
// exports module.exports的引用
// module 对当前模块的引用
// module.children
// module.exports 注意异步改变问题
// module.filename
// module.id
// module.loaded 是否加载完成
// module.parent 最先引用
// module.path
// module.paths
// module.require(id)

// require(id) 引入模块
// require.cache 被缓存的模块对象
// require.resolve(request[, options]) 此模块的路径名,不加载
// require.resolve.paths(request) 被解析的过程路径数组
// require.main 程序的主模块
// require.extensions 已废弃,以前被用作自定义加载非标准模块

// require('module').builtinModules 内置的模块数组
// require('module').createRequire(filename)