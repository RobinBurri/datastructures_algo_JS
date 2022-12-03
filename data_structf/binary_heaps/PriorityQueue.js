/**
 * Priority Queue can use Heap_tree as a underlying dataStructure.
 * In this example we use MinHeap as no 1 is the highest priority.
 * this could be an emergency room waiting list.
 */

/**
 * * BIG-O
 * * INSERT = LOG(n)
 * * REMOVAL = LOG(n)
 * * SEARCH = N
 */

class Patient {
    constructor(name, age, illness = 'unknown', priority = 5) {
        this.name = name
        this.age = age
        this.illness = illness
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.waitingList = []
    }

    swap = (arr, idx1, idx2) => {
        let tmp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = tmp
    }

    enqueue(Patient) {
        this.waitingList.push(Patient)
        if (this.waitingList.length > 1) {
            this.bubbleUp()
        }
    }

    dequeue() {
        if (this.waitingList.length > 0) {
            const nextPatient = this.waitingList.shift()
            this.bubbleDown()
            return nextPatient
        } else {
            console.log('No more patient in queue.')
        }
    }

    bubbleUp() {
        let lastVal = this.waitingList.length - 1
        while (lastVal > 0) {
            let parentEl
            parentEl = Math.floor((lastVal - 1) / 2)
            if (
                this.waitingList[lastVal].priority >
                this.waitingList[parentEl].priority
            ) {
                break
            }
            this.swap(this.waitingList, lastVal, parentEl)
            lastVal = parentEl
        }
    }

    bubbleDown() {
        if (this.waitingList.length < 2) {
            return
        }
        this.waitingList.unshift(this.waitingList.pop())
        let currentIndex = 0
        while (currentIndex < this.waitingList.length) {
            let HightestPriorityIndex
            let leftPatientIndex = currentIndex * 2 + 1
            let rightPatientIndex = currentIndex * 2 + 2
            let leftPatient = this.waitingList[leftPatientIndex]
            let rightPatient = this.waitingList[rightPatientIndex]
            if (leftPatient === undefined && rightPatient === undefined) {
                break
            }
            if (leftPatient === undefined) {
                HightestPriorityIndex = rightPatientIndex
            } else if (rightPatient === undefined) {
                HightestPriorityIndex = leftPatientIndex
            } else {
                HightestPriorityIndex =
                    leftPatient.priority < rightPatient.priority
                        ? leftPatientIndex
                        : rightPatientIndex
            }
            if (
                this.waitingList[HightestPriorityIndex].priority <
                this.waitingList[currentIndex].priority
            ) {
                this.swap(this.waitingList, HightestPriorityIndex, currentIndex)
            }
            currentIndex = HightestPriorityIndex
        }
    }

    printWaitingList() {
        if (this.waitingList.length) {
            this.waitingList.forEach((patient) => console.log(patient))
        }
    }
}

// const emergencyRoom = new PriorityQueue()
// emergencyRoom.enqueue(new Patient('rob', 43, 'fever', 6))
// emergencyRoom.enqueue(new Patient('marie', 13, 'broken wrist', 3))
// emergencyRoom.enqueue(new Patient('jean', 63, 'heart attack', 1))
// emergencyRoom.enqueue(new Patient('patrick', 43, 'overdose', 1))
// emergencyRoom.enqueue(new Patient('juan', 23, 'headache', 8))
// emergencyRoom.enqueue(new Patient('francis', 53, 'hallucination', 5))
// emergencyRoom.enqueue(new Patient('popeye', 43, 'gastric problems', 7))

// emergencyRoom.printWaitingList()
// console.log(emergencyRoom.dequeue())
// console.log(
//     'extracted some patient!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
// )
// console.log(emergencyRoom.dequeue())
// console.log(
//     'extracted some patient!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
// )
// console.log(emergencyRoom.dequeue())
// console.log(
//     'extracted some patient!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
// )
// console.log(emergencyRoom.dequeue())
// console.log(
//     'extracted some patient!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
// )
// console.log(emergencyRoom.dequeue())
// console.log(
//     'extracted some patient!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
// )
// console.log(emergencyRoom.dequeue())
// console.log(
//     'extracted some patient!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
// )
// console.log(emergencyRoom.dequeue())
// console.log(
//     'extracted some patient!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
// )
// console.log(emergencyRoom.dequeue())
