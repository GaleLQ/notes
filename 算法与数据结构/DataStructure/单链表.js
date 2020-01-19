/* 
    node节点包含一个元素和指向下一个的指针
    动态存储,增删效率高
    顺序查找困难
*/
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.length += 1;
    }

    getElementAt(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }

        // 0特殊处理
        if (index === 0) {
            return this.head.element;
        } else {
            let tempNode = this.head;
            while ((index--) !== 0) {
                tempNode = tempNode.next;
            }
            return tempNode.element;
        }
    }

    insert(element, index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        const node = new Node(element);

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let tempNode = this.head;
            // 注意差1问题
            while ((--index) !== 0) {
                tempNode = tempNode.next;
            }
            node.next = tempNode.next;
            tempNode.next = node;
        }
        this.length += 1;
        return true;
    }

    removeAt(index) {
        if (index < 0 || index > this.length - 1) {
            return false;
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let tempNode = this.head;
            while ((--index) !== 0) {
                tempNode = tempNode.next;
            }
            tempNode.next = tempNode.next.next;
        }
        this.length -= 1;
    }

    indexOf(element) {
        let tempNode = this.head;
        let tempIndex = 0;
        while (tempNode.element !== element) {
            if (tempNode && tempNode.next) {
                tempNode = tempNode.next;
                tempIndex++;
            } else {
                return -1;
            }
        }
        return tempIndex;
    }

    remove(element) {
        if (this.head.element === element) {
            this.head = this.head.next;
        } else {
            let tempNode = this.head;
            while (tempNode.next) {
                if (tempNode.next.element === element) {
                    tempNode.next = tempNode.next.next;
                    this.length -= 1;
                    return true;
                } else {
                    tempNode = tempNode.next;
                }
            }
            return false;
        }
    }

    isEmpty() {
        return !!this.head
    }

    getHead() {
        return this.head || undefined;
    }

    size() {
        return this.length;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }
}