// let temp: boolean = false; 基础类型也可通过赋值直接推导
// let temp: void = undefined(或者null); void表示空值,undefined和null可以赋值给任意类型

// let temp: any 可以赋值任意类型,调用任意类型的方法

// 未赋值的类型自动推论成any,赋值的推论成赋值的


// 联合
// let temp: string | number;
// 变量类型不确定的时候只能访问共有属性和方法

// 接口
// 对类的一部分行为进行抽象或对象的行为进行抽象
// 接口可以继承(extends)接口,继承(extends)类
// 重复定义取并集
// 赋值的时候必须与接口保持一致(不可多不可少)
// interface Person {
//     name: string;
//     age?: number; 可选属性
//     [propName: string]: any 任意属性(number可表示数组)
// }
// 任意属性(key为string)必须是确定属性和可选属性的超集

// readonly 只读属性,不可单独给属性赋值,只能跟随对象定义

// 数组
// let temp: number[] = [1] 类型加括号
// let temp: Array<number> = [1] 数组范型
// interface NumberArray { 接口表示数组(常用作类数组情况,加一起其他自定义属性)
//     [index: number]: number;
// }

// 函数
// let temp: (x: number, y: number, z?: number, ...rest: any[]) => number = function(x: number, y: number): number { return x + y; } 注意可选参数和剩余参数写法
// interface Func { 接口定义函数的形状
//     (x: number, y: number): number
// }
// 支持重载
// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//  // 函数实现
// }

// 类型断言
// <类型>值 (<string>something).length 必须断言成可能存在的值
// 值 as 类型 (something as string).length tsx中只能用这个

// 声明文件
// declare var(let const) 声明全局变量 declare const jQuery: (selector: string) => any
// declare function 声明全局方法 declare function jQuery(selector: string): any支持重载 
// declare class Animal { // 声明全局类
//     name: string;
//     constructor(name: string);
//     sayHi(): string;
// }
// declare enum 声明全局枚举 declare enum { Up, Down, Left, Right }
// declare namespace jQuery { 声明含有子属性的全局对象,支持重载
//     function ajax(url: string, settings?: any): void;
//     namespace fn {
//         function extend(object: any): void;
//     }
// }
// interface和type 声明全局类型,可直接被外部访问,多次定义取并集
// 声明文件位置: 1.npm包自带的(package中找) 2.发布到@types下面的 3.自己写的(tsconfig.json里配置)
// npm包中的声明文件与本地全局声明文件的区别
// export导出的npm包文件才会被别人使用

// 内置对象
// typeScript核心库的定义文件中定义了所有浏览器环境需要用到的类型
// Node.js不是内置对象的一部分 npm install @types/node --save-dev

// 类型别名 type 常用于联合

// 字符串字面量 type Temp = 'a' | 'b' | 'c'

// 元组
// 特定类型组合的数组
// 越界的元素必须是已知类型的联合

// 枚举
// 枚举值默认从零开始,可以手动赋值其他类型
// 非编译期间的计算所得枚举项后面不可以有其他项
// const enum定义的常数枚举只可用其作为数字

// 类
// 可以使用修饰符public(默认),private,protected
// 修饰符和readonly在构造参数中可直接赋值给属性
// 抽象类 只能被子类实现的类
// 类继承(extends)类,实现(implements)接口. (接口继承接口,继承类)

// 泛型
// 泛型(Generics)是指在定义函数、接口或类的时候,不预先指定具体的类型,而在使用的时候再指定类型的一种特性
// 泛型约束 function createArray<T extends U, U>(tuple: [T, U]): [T, U] {} 约束了泛型的形状(用于未知类型情况不可随意调用方法等)
// interface CreateArrayFunc<T> { 泛型接口
//     (length: number, value: T): Array<T>;
// }
// class GenericNumber<T = string默认类型> { 泛型类
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// 声明合并
// 函数合并(重载)
// 接口合并(多次定义合并)
// 类合并(和接口规则一致)