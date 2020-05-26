// 父级元素
// display: grid | inline-grid 块和行内
// grid-template-columns / grid-template-rows: [firstline] 10px [endline] (网格轨道大小px,auto,fr剩余等分, 可用[]定义网格线名字, repeat(3, 20px [col-start])重复几次)
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
// 