const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const selectSort = (arr) => {
    let smallestIndex = 0;
    for (let index = 0; index < arr.length; index++) {
        let foundSmaller = false;
        smallestIndex = index;
        for (let i = index + 1; i < arr.length; i++) {
            if (arr[smallestIndex] > arr[i]) {
                smallestIndex = i;
                foundSmaller = true;
            }
        }
        if (foundSmaller) swap(arr, index, smallestIndex);
        else break;
    }
    return arr;
};

const test = Array.apply(null, { length: 100000 }).map(
    Function.call,
    Math.random
);
let time1 = performance.now();
selectSort(test);

let time2 = performance.now();

console.log(`Time: ${(time2 - time1) / 1000} sec`);
