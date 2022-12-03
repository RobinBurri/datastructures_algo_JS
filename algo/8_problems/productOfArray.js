// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const prodOfArr = (arr) => {
    if (arr.length === 1) return arr[0];
    return arr[0] * prodOfArr(arr.slice(1));
};

console.log(prodOfArr([1, 2, 3]));
console.log(prodOfArr([1, 2, 3, 10]));
