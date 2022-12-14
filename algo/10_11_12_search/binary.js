const binarySearch = (arr, val) => {
    let index;
    let start = 0;
    let end = arr.length - 1;
    if (arr.length < 1) return -1;
    while (start <= end) {
        index = Math.ceil((end + start) / 2);
        if (arr[index] === val) return index;
        if (val < arr[index]) end = index - 1;
        else start = index + 1;
    }
    return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        10
    )
); // 2
console.log(
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        95
    )
); // 16
console.log(
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        100
    )
); // -1
