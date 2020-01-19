/*
    后进先出(LIFO)
*/
class Stack {
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    clear() {
        this.items = [];
    }

    get peek() {
        return this.items[this.items.length - 1];
    }

    get isEmpty() {
        return !this.items.length;
    }

    get size() {
        return this.items.length;
    }
}