// ES6自动严格模式use strict

// import静态编译时确定(输出代码接口),require运行时确定(实际运行对象)

// export
// export 输出必须对应文件内某个变量,不可以是静态的
// 关键字export和import强制出现在顶层,便于优化

// import
// import导入的变量类const
// import语句具有提升效果(var)
// import { a } from 'b' 导入子
// import * as a from 'b' 导入所有
// import a from 'b' 配合default使用
// import()函数动态加载返回promise(类似require的异步操作)

// nodejs v13.2 支持import(package.json)
// 原commonjs的变量(__filename等)不存在,无外层函数,process可获取

// 循环加载 
// 可坚持通过导出变量提升的函数解决(因为import导入没问题,执行才会报错),require遇循环点则返回,继续当前，import不会执行循环的
// a->b->a require执行a,b,a遇到b返回到b,import执行a,b