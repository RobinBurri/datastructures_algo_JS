const mylinear = (arr, val) => {
    let response = -1;
    if (arr.length > 0) {
        for (const index in arr) {
            if (val === arr[index]) {
                response = index;
            }
        }
    }
    return response;
};

console.log(mylinear([10, 15, 20, 25, 30], 15));
console.log(mylinear([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
console.log(mylinear([100], 100));
console.log(mylinear([1, 2, 3, 4, 5], 6));
console.log(mylinear([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10));
console.log(mylinear([100], 200));
