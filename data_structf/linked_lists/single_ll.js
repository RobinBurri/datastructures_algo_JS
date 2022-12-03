class Node {
    constructor(val = 0) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let nn = new Node(val);
        if (!this.head) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        if (this.length === 1) {
            let val = this.head.val;
            this.length--;
            this.head = null;
            this.tail = null;
            return val;
        }
        let tmp = this.head;
        while (tmp.next != this.tail) {
            tmp = tmp.next;
        }
        let val = tmp.next.val;
        tmp.next = null;
        this.tail = tmp;
        this.length--;
        return val;
    }
    shift() {
        if (!this.head) return undefined;
        let val = this.head.val;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return val;
    }
    unshift(val) {
        let nn = new Node(val);
        if (!this.head) {
            this.head = nn;
            this.tail = this.head;
        } else {
            nn.next = this.head;
            this.head = nn;
        }
        this.length++;
        return this;
    }
    reverse() {
        if (!this.head || this.head === this.tail) return;
        let next = null;
        let prev = null;
        let tmp = this.head;
        this.head = this.tail;
        this.tail = tmp;
        for (let i = 0; i < this.length; i++) {
            next = tmp.next;
            tmp.next = prev;
            prev = tmp;
            tmp = next;
        }
    }
    print() {
        let tmp = this.head;
        while (tmp) {
            console.log(tmp.val);
            tmp = tmp.next;
        }
    }
    size() {
        console.log(this.length);
    }
}

let list = new SinglyLinkList();
list.push('Hello');
list.push('darkness');
list.push('my');
list.push('friend');

list.print();

list.reverse();
console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
list.print();
// list.size();
