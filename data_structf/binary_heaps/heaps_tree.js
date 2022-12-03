/**
 * ?  BINARY HEAP
 * * Very similar to a binary search tree, but with some different rules.
 * * in MaxBinaryHeap, parent nodes are always larger than child nodes.
 * * in MInBinaryHeap, parent nodes are always smaller the child nodes.
 * * always add the left child first then the right one.
 *
 * ! For any index of an array n...
 * ! the left child is stored at 2n + 1
 * ! the right child is at 2n + 2
 * ? For any child node at index n
 * ? its parent is at index (n-1)/2 => Math.floor()
 */

const swap = (arr, idx1, idx2) => {
    let tmp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = tmp
}

class MaxHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        this.values.push(val)
        if (this.values.length > 1) {
            this.bubbleUp()
        }
    }

    extractMax() {
        if (this.values.length > 0) {
            const returnVal = this.values.shift()
            this.bubbleDown()
            return returnVal
        }
    }

    bubbleUp() {
        let lastVal = this.values.length - 1
        while (lastVal > 0) {
            let parentEl
            parentEl = Math.floor((lastVal - 1) / 2)
            if (this.values[lastVal] < this.values[parentEl]) {
                break
            }
            swap(this.values, lastVal, parentEl)
            lastVal = parentEl
        }
    }

    bubbleDown() {
        if (this.values.length < 2) {
            return
        }
        this.values.unshift(this.values.pop())
        let currentIndex = 0
        while (currentIndex < this.values.length) {
            let biggestIndex
            let leftChildIndex = currentIndex * 2 + 1
            let rightChildIndex = currentIndex * 2 + 2
            let leftChild = this.values[leftChildIndex]
            let rightChild = this.values[rightChildIndex]
            if (leftChild === undefined && rightChild === undefined) {
                break
            }
            if (leftChild === undefined) {
                biggestIndex = rightChildIndex
            } else if (rightChild === undefined) {
                biggestIndex = leftChildIndex
            } else {
                biggestIndex =
                    leftChild > rightChild ? leftChildIndex : rightChildIndex
            }
            if (this.values[biggestIndex] > this.values[currentIndex]) {
                swap(this.values, biggestIndex, currentIndex)
            }
            currentIndex = biggestIndex
        }
    }

    printValues() {
        if (this.values.length) {
            this.values.forEach((val) => console.log(val))
        }
    }
}

const myHeap = new MaxHeap()
myHeap.insert(12)
myHeap.insert(32)
myHeap.insert(62)
myHeap.insert(17)
myHeap.insert(19)
myHeap.insert(92)
myHeap.insert(72)
myHeap.printValues()
console.log(`extracted number: ${myHeap.extractMax()}`)
myHeap.printValues()
