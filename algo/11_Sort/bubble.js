const bubbleSort = (arr) => {
    if (arr.length < 1) return arr;
    let swaped = true;
    let j = arr.length - 1;
    while (swaped) {
        swaped = false;
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swaped = true;
            }
        }
        j--;
    }
    return arr;
};

const test = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);
let time1 = performance.now();
bubbleSort(test);

let time2 = performance.now();

console.log(`Time: ${(time2 - time1) / 1000} sec`);

// console.log(test);
