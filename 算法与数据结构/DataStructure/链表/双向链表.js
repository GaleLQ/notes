/*
    双向链表
*/
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(element) {
        const node = new Node(element);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length += 1;
    }

    insert(index, element) {
        const { length } = this;
        if (index < 0 || index > length) {
            return false;
        } else {
            const node = new Node(element);
            // 插入头部,尾部,中间分别处理,头尾指针处理
            if (index === 0) {
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    this.head.prev = node;
                    this.head = node;
                }
            } else if (index === length) {
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            } else {
                let tempNode = this.head;
                while ((--index) !== 0) {
                    tempNode = tempNode.next;
                }
                node.next = tempNode.next;
                tempNode.next.prev = node;
                node.prev = tempNode;
                tempNode.next = node;
            }
            this.length += 1;
            return true;
        }
    }

    removeAt(index) {
        if (index < 0 || index > this.length - 1) {
            return false;
        }
        if (index === 0) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else if (index === this.length - 1) {
            this.tail.prev.next = null;
            this.tail = this.prev;
        } else {
            let tempNode = this.head;
            while ((--index) !== 0) {
                tempNode = tempNode.next;
            }
            tempNode.next.next.prev = tempNode;
            tempNode.next = tempNode.next.next;
        }

        this.length -= 1;
        return true;
    }

    isEmpty() {
        return this.length === 0;
    }

    getHead() {
        return this.head && this.head.element;
    }

    getTail() {
        return this.tail && this.tail.element;
    }

    size() {
        return this.length;
    }

}