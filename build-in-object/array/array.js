/**
 * Array.prototype.concat()
 * ? return NEW ARRAY
 */

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


/**
 * Array.prototype.fill()
 * ! return MODIFIED ARRAY
 */

const array4 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array4.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array4.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array4.fill(6));
// Expected output: Array [6, 6, 6, 6]
