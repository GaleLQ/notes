// 快速排序 nlogn 
// 选择一个基准值,小的全放左边,大的全放右边,然后左右再分别排序
const Quicksort = arr => {
    const { length } = arr;

    // 注意处理小于零
    if (length <= 1) {
        return arr;
    } else {
        const left = [];
        const right = [];
        for (let i = 0; i < length; i += 1) {
            if (arr[i] < arr[0]) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        // 递归调用
        return [...Quicksort(left), arr[0], ...Quicksort(right)];
    }
}