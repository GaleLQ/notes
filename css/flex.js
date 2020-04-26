// 父级元素
// display: flex | inline-flex 块和行内
// flex-direction: row | row-reverse | column | column-reverse 主轴的方向
// flex-wrap: nowrap | wrap | wrap-reverse 子元素是否换行
// flex-flow: flex-direction与flex-wrap的结合
// justify-content: flex-start | flex-end | center | space-between | space-around 子元素在主轴的对齐方式
// align-items: strech | flex-start | flex-end | center | baseline 子元素在侧轴的对齐方式
// align-content: flex-start | flex-end | center | space-between | space-around | stretch 多根轴线时的对齐方式

// 子级元素
// order: <interger> 在容器内的排列顺序
// flex-basis: <length> | auto 分配多余空间之前，项目占据的主轴空间default auto
// flex-grow: <number> 定义项目的放大比例，default 0
// flex-shrink: <number> 定义项目的缩小比例,default 1
// flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]结合版
// align-self: auto | flex-start | flex-end | center | baseline | stretch 单个项目覆盖父亲指定的align-items属性