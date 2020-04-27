// 父级元素
// display: flex | inline-flex 块和行内
// flex-direction: row | row-reverse | column | column-reverse 主轴的方向,排列左到右，右到左，上到下，下到上
// flex-wrap: nowrap | wrap | wrap-reverse 子元素是否换行,nowrap不换行，自动压缩充满父元素，wrap换行，第一行在上面，wrap-reverse，第一行在下面
// flex-flow: flex-direction与flex-wrap的结合简写
// justify-content: flex-start | flex-end | center | space-between | space-around 子元素在主轴的对齐(不是排列)方式，左，右，中，间隔(无边)，间距(有边，边为中一半)
// align-items: strech | flex-start | flex-end | center | baseline 子元素在侧轴的对齐方式，充满高度，起点对齐，终点对齐，中心对齐，第一行文字底部对齐
// align-content: stretch | flex-start | flex-end | center | space-between | space-around 多根轴线(默认横)时的对齐方式，垂直平分(平分起点从头对齐)，起点对齐，终点对齐，中心对齐，两端间隔(无边)对齐，两边间距(有边)对齐

// 子级元素
// order: <interger> 在容器内本行轴线的排列顺序， default 0
// flex-basis: <length> | auto 项目占据的主轴空间default auto(content->width->flex-basis)
// flex-grow: <number> 定义项目在剩余空间中所取的放大比例，default 0不放大
// flex-shrink: <number> 定义项目的缩小比例,default 1,换行时无效
// flex: auto(11auto) | none(00auto) | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]建议结合使用
// align-self: auto | flex-start | flex-end | center | baseline | stretch 单个项目覆盖父亲指定的align-items属性
