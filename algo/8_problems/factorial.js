//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

const factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
