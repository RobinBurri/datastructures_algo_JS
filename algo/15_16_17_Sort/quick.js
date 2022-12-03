const swap = (arr, idx1, idx2) => {
    let tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
};
const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, swapIdx);
            swapIdx++;
        }
    }
    return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
};

const test = Array.apply(null, { length: 100000 }).map(
    Function.call,
    Math.random
);
let time1 = performance.now();
quickSort(test);

let time2 = performance.now();

console.log(`Time: ${(time2 - time1) / 1000} sec`);