// let data = Array.apply(null, { length: 100 }).map(Function.call, Math.random);
// console.log(data);

/*
 ? The idea is to split the array until they are single element array or empty
 ? And then sort them as we merge them.
 */

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let halfIndex = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, halfIndex));
    let right = mergeSort(arr.slice(halfIndex));
    return merge(left, right);
};

const merge = (arr1, arr2) => {
    const newArr = [];
    let idx1 = 0;
    let idx2 = 0;
    for (let i = 0; i < arr1.length + arr2.length; i++) {
        if (idx2 >= arr2.length || arr1[idx1] <= arr2[idx2]) {
            newArr.push(arr1[idx1]);
            idx1++;
        } else {
            newArr.push(arr2[idx2]);
            idx2++;
        }
    }
    return newArr;
};

const test = Array.apply(null, { length: 100000 }).map(
    Function.call,
    Math.random
);
let time1 = performance.now();
mergeSort(test);

let time2 = performance.now();

console.log(`Time: ${(time2 - time1) / 1000} sec`);