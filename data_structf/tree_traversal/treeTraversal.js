/**
 * TREE TRAVERSAL,
 * BREATH FIRST
 * DEPTH FIRST: InOrder, PreOrder, PostOrder
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
            return undefined;
        }
        let tmp = this.root;
        while (true) {
            if (tmp.val === value) {
                return tmp;
            }
            if (value > tmp.val) {
                if (tmp.right) {
                    tmp = tmp.right;
                } else {
                    return undefined;
                }
            } else {
                if (tmp.left) {
                    tmp = tmp.left;
                } else {
                    return undefined;
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
    BFS() {
        if (!this.root) return;
        const queue = [];
        const values = [];
        queue.push(this.root.val);
        while (queue.length > 0) {
            let tmp = this.find(queue[0]);
            if (tmp !== undefined) {
                if (tmp.left) queue.push(tmp.left.val);
                if (tmp.right) queue.push(tmp.right.val);
            }
            values.push(queue.shift());
        }
        return values;
    }
    // Depth First Search, PreOrder
    DFS_PRE() {
        if (!this.root) return;
        const values = [];
        let currentNode = this.root;
        function traverse(node) {
            values.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(currentNode);
        return values;
    }
    // Depth First Search, PostOrder
    DFS_POST() {
        if (!this.root) return;
        const values = [];
        let currentNode = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            values.push(node.val);
        }
        traverse(currentNode);
        return values;
    }
    // Depth First Search, InOrder
    DFS_INORDER() {
        if (!this.root) return;
        const values = [];
        let currentNode = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            values.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(currentNode);
        return values;
    }
}

// BFS breath first seach - iteratively
// const bfs = (tree) => {
//     if (!tree) return;
//     const queue = [];
//     const values = [];
//     queue.push(tree.root.val);
//     while (queue.length > 0) {
//         let tmp = tree.find(queue[0]);
//         if (tmp !== undefined) {
//             if (tmp.left) queue.push(tmp.left.val);
//             if (tmp.right) queue.push(tmp.right.val);
//         }
//         values.push(queue.shift());
//     }
//     return values;
// };

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(15);
tree.insert(20);
/**
 *          10
 *       6     15
 *     3   8      20
 */

console.log('breath first: ', tree.BFS());
console.log('DFS pre: ', tree.DFS_PRE());
console.log('DFS post: ', tree.DFS_POST());
console.log('DFS post: ', tree.DFS_INORDER());
