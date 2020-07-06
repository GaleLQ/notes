// 父级元素
// display: grid | inline-grid 块和行内
// grid-template-columns / grid-template-rows: [firstline] 10px [endline] (网格轨道大小px,auto,fr指剩余等分比例, 可用[]定义网格线名字, repeat(3, 20px [col-start])重复几次)
// 关于repeat: 第一个参数auto-fill(剩余自动填满列) 和 auto-fit(剩余扩张)，第二个参数minmax很好的控制响应式
// grid-template-areas: "header header header header" "main main . sidebar" "footer footer footer footer" (通过与子项grid-area配合使子项占据任意大小， .表示一个空白位)
// grid-template: 行列区域的简写
// column-gap(grid-column-gap) / row-gap(grid-row-gap): 10px auto 10px 网格线的大小(非边)
// gap(grid-gap):  grid-column-gap 和 grid-row-gap 的简写
// align-items: start | end | center | stretch 在格内列对齐方式 开始 结束 居中 填满(默认)
// justify-items: start | end | center | stretch 在格内行对齐方式 开始 结束 居中 填满(默认)
// place-items: align-items 和 justify-items 的简写
// align-content start | end | center | stretch | space-around(左右一半) | space-between(左右无) | space-evenly(左右1))网格容器有剩余时的列对齐方式
// justify-content: start | end | center | stretch | space-around(左右一半) | space-between(左右无) | space-evenly(左右1))网格容器有剩余时的行对齐方式
// place-content: align-content 和 justify-content 的简写
// grid-auto-columns / grid-auto-rows: 隐式轨道的大小
// grid-auto-flow: 未被控制的item的摆放方式，row默认左右上下，column上下左右，dense留白后续紧密填充
// grid:统一简写

// 子元素
// grid-column-start / grid-column-end / grid-row-start / grid-row-end：2 five row1-start，span(跨越几个或者跨越到) col2-start数字线名等，占据网格的多少(默认一个)，重贴用z-index显示优先级
// grid-column / grid-row: start / end 上面的简写
// grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end> 用container的名字，或者上面的简写
// justify-self(align-self): start | end | center | stretch 左，右，居中，填满(默认）。项目对齐单元格的方式
// place-self： align-self 和 justify-self的简写
// 