class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const nn = new Node(val);
        if (!this.head) {
            this.head = nn;
            this.tail = nn;
        } else {
            if (this.length === 1) {
                nn.prev = this.head;
            } else {
                nn.prev = this.tail;
            }

            this.tail.next = nn;
            this.tail = nn;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let val = this.head.val;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }
        this.length--;
        return val;
    }
    shift() {
        if (!this.head) return undefined;
        let val = this.head.val;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head.next.prev = null;
            this.head = this.head.next;
        }
        this.length--;
        return val;
    }
    unshift(val) {
        const nn = new Node(val);
        if (!this.head) {
            this.head = nn;
            this.tail = nn;
        } else {
            nn.next = this.head;
            this.head.prev = nn;
            this.head = nn;
        }
        this.length++;
        return this;
    }

    print() {
        if (!this.head) {
            return undefined;
        }
        let tmp = this.head;
        while (tmp) {
            console.log(tmp.val);
            tmp = tmp.next;
        }
    }
    printRev() {
        if (!this.head) {
            return undefined;
        }
        let tmp = this.tail;
        while (tmp) {
            console.log(tmp.val);
            tmp = tmp.prev;
        }
    }
    size() {
        console.log(`list size: ${this.length}`);
    }
}

const list = new DoubleLinkList();

// console.log(list.push(12));
// console.log(list.push(13));
// console.log(list.push(14));
list.push(12);
list.push(13);
list.push(14);
list.push(15);
list.push(16);
list.print();
console.log('----------------------------');
list.printRev();
list.size();
console.log('pop(): ' + list.pop());
console.log('pop(): ' + list.pop());
console.log('pop(): ' + list.pop());
console.log('pop(): ' + list.pop());
console.log('pop(): ' + list.pop());
console.log('pop(): ' + list.pop());
list.unshift(12);
list.unshift(13);
list.unshift(14);
list.unshift(15);
list.unshift(16);

list.print();
console.log('----------------------------');
list.printRev();
console.log('shift(): ' + list.shift());
console.log('shift(): ' + list.shift());
console.log('shift(): ' + list.shift());
console.log('shift(): ' + list.shift());
console.log('shift(): ' + list.shift());
console.log('shift(): ' + list.shift());
list.size();
