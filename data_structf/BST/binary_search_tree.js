/*
? TREES > BINARY TREES > BINARY SEARCH TREE
! Binary tree can only have max 2 childs
? BST every node to the left of parent is less than parent
? every node to the right of parent is greater than parent
! NO DUPLICATES
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const nn = new Node(value);
        if (!this.root) {
            this.root = nn;
            return;
        }
        let tmp = this.root;
        while (true) {
            if (nn.val > tmp.val) {
                if (tmp.right) {
                    tmp = tmp.right;
                } else {
                    tmp.right = nn;
                    return;
                }
            } else {
                if (tmp.left) {
                    tmp = tmp.left;
                } else {
                    tmp.left = nn;
                    return;
                }
            }
        }
    }
    find(value) {
        if (!this.root) {
            return false;
        }
        let tmp = this.root;
        while (true) {
            if (tmp.val === value) {
                return true;
            }
            if (value > tmp.val) {
                if (tmp.right) {
                    tmp = tmp.right;
                } else {
                    return false;
                }
            } else {
                if (tmp.left) {
                    tmp = tmp.left;
                } else {
                    return false;
                }
            }
        }
    }
    find2(value) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.val) {
                current = current.left;
            } else if (value > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

// let tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(8);
// tree.insert(6);
// tree.insert(4);
// tree.insert(12);
// tree.insert(5);
// tree.insert(7);

// // console.log(tree);
// console.log(tree.find2(12));
// console.log(tree.find2(1));
// console.log(tree.find2(6));
// console.log(tree.find2(9));
// console.log(tree.find2(8));
// console.log(tree.find2(4));
// console.log(tree.find2(5));
// console.log(tree.find2(7));
// console.log(tree.find2(9));
// console.log(tree.find2(9));
