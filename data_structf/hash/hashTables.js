/**
 * * Hash tables
 * * Collision
 *  two strategies: Separate Chaining or Linear Probing
 * 
 * * Big O:
 * time complexity
 *  average case: (if good hash function)
 *      insert: O(1)
 *      deletion: O(1)
 *      Access: O(1)
 *  worst case: O(N)
 */

/**
 * * Hash function
 *
 */
// for string
const hash1 = (value, arrayLen) => {
    let hash = 0
    for (let i = 0; i < value.length; i++) {
        hash += value.charCodeAt(i)
    }
    return hash % arrayLen
}
// Improvment (add a max of 100 for the loop & some Prime to help with
// randomness and better bucket distribution)
const hash2 = (value, arrayLen) => {
    let hash = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(value.length, 100); i++) {
        hash += value.charCodeAt(i)
    }
    return (hash * WEIRD_PRIME) % arrayLen
}

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let hash = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            hash += key.charCodeAt(i)
        }
        return (hash * WEIRD_PRIME) % this.keyMap.length
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }
    keys() {
        let uniqueKeys = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!uniqueKeys.includes(this.keyMap[i][j][0]))
                        uniqueKeys.push(this.keyMap[i][j][0])
                }
            }
        }
        return uniqueKeys
    }

    values() {
        let uniqueValues = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!uniqueValues.includes(this.keyMap[i][j][1]))
                        uniqueValues.push(this.keyMap[i][j][1])
                }
            }
        }
        return uniqueValues
    }
}

let myhash = new HashTable()
console.log(myhash.set('first', 100))
console.log(myhash.set('third', 10012))
console.log(myhash.set('second', 1001))
console.log(myhash.get('first'))
console.log(myhash.get('second'))
console.log(myhash.keys())
console.log(myhash.values())
// console.log(myhash)
