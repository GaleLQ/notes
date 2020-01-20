
/*
    二叉搜索树(二叉排序树,BST)
    左节点小于根结点,右节点大于根结点,不可相同
*/

// 节点结构
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// 递归版本
class BinarySearchTree {
    constructor(key) {
        this.root = key ? new Node(key) : null;
    }

    // 插入
    insert(key) {
        if (!this.root) {
            this.root = new Node(key);
        } else {
            this._insert(this.root, key);
        }
    }

    // 将key插入指定节点的函数
    _insert(node, key) {
        // 小于放入左节点,否则右节点
        if (key < node.key) {
            // 空直接插入,不空则递归
            if (!node.left) {
                node.left = new Node(key);
            } else {
                this._insert(node.left, key);
            }
        } else {
            if (!node.right) {
                node.right = new Node(key);
            } else {
                this._insert(node.right, key);
            }
        }
    }

    min() {
        if (!this.root) {
            return false;
        }
        let tempNode = this.root;
        while (tempNode.left) {
            tempNode = tempNode.left;
        }
        return tempNode.key;
    }

    max() {
        if (!this.root) {
            return false;
        }
        let tempNode = this.root;
        while (tempNode.right) {
            tempNode = tempNode.right;
        }
        return tempNode.key;
    }

    // 遍历
    inOrderTraverse(cb) {
        this._inOrderTraverse(this.root, cb);
    }

    _inOrderTraverse(node, cb) {
        if (!node) {
            return;
        } else {
            // 根据根结点和左右子节点的输出顺序分为先序中序后序遍历
            this._inOrderTraverse(node.left, cb);
            cb(node.key);
            this._inOrderTraverse(node.right, cb);
        }
    }

    // 查找
    search(value) {
        return this._search(this.root, value);
    }

    _search(node, value) {
        if (!node) {
            return false;
        } else {
            const { key } = node;
            if (value === key) {
                return true;
            } else if (value < key) {
                return this._search(node.left, value);
            } else {
                return this._search(node.right, value);
            }
        }
    }

    // 删除
    remove(value) {
        this._remove(this.root, value);
    }

    _remove(node, value) {
        if (!node) {
            return false;
        } else {
            const { key } = node;
            if (value < key) {
                this._remove(node.left, value);
            } else if (value > key) {
                this._remove(node.right, value);
            } else {
                console.log('key', value);

                // 找到了
                // 1. 没有子节点直接删除
                // 2. 单子节点有空,提另一边节点
                // 3. 子树全有,则找左子树最大或者右子树最小,如果找到的左(右)子树最大(小)还有左(右)子树,则用子树充当前的位置
                if (!node.left && !node.right) {
                    node = null;
                } else if (!node.left) {
                    node = node.right;
                } else if (!node.right) {
                    node = node.right;
                } else {
                    // 左右子树都有
                    // 找到左子树最大
                    const tempNode = node.left;
                    while (tempNode.right) {
                        tempNode = tempNode.right;
                    }
                    // 将这个找到的key给当前节点
                    const { key: tempKey } = tempNode;
                    node.key = tempKey;

                    // 被查找的元素如果有左子树,则让左子树代替当前节点
                    if (tempNode.left) {
                        tempNode.key = tempNode.left.key;
                        tempNode.right = tempNode.left.right;
                        tempNode.left = tempNode.left.left;
                    }
                }
            }
        }
    }
}