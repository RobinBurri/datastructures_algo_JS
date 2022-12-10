/**
 * * Hash tables
 *
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

