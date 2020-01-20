class Dictionary {
    
    obj = Object.create(null);

    set(key, value) {
        this.obj[key] = value;
    }

    get(key) {
        return this.obj[key];
    }

    delete(key) {
        if (!Object.getOwnPropertyNames(this.obj).includes(key)) {
            return false;
        }
        delete this.obj[key];
        return true;
    }

    has(key) {
        return Object.getOwnPropertyNames(this.obj).includes(key);
    }

    clear() {
        this.obj = Object.create(null);
    }

    size() {
        return Object.getOwnPropertyNames(this.obj).length;
    }

    keys() {
        return Object.getOwnPropertyNames(this.obj);
    }

    values() {
        return Object.getOwnPropertyNames(this.obj).map(i => this.obj[i]);
    }

    getItems() {
        return this.obj;
    }
}