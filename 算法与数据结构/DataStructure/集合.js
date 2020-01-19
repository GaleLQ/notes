/* 
    无序,互异
*/
class Set {
    items = [];

    has(value) {
        return this.items.includes(value);
    }

    add(value) {
        if (this.items.includes(value)) {
            return false;
        }
        this.items.push(value);
        return true;
    }

    remove(value) {
        const index = this.items.indexOf(value);
        if (index < 0) {
            return false;
        }
        this.items.splice(index, 1);
        return true;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    values() {
        return this.items;
    }

    union(others) {
        return [...this.items, ...others.filter(item => !this.items.includes(item))];
    }

    intersect(others) {
        return this.items.filter(item => others.includes(item));
    }

    subset(others) {
        return !this.items.find(item => !others.includes(item));
    }

    difference(others) {
        return this.items.filter(item => !others.includes(item))
    }
}