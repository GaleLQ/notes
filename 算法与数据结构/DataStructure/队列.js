/*
    先进先出(FIFO)
    优先级队列
*/
class Queue {
    constructor(items) {
        this.items = items || [];
    }

    equeue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    clear() {
        this.items = [];
    }

    get size() {
        return this.items.length;
    }

    get isEmpty() {
        return !this.items.length;
    }
}