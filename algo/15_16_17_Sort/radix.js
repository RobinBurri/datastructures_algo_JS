function getDigit(num, pos) {
    let strNum = num.toString();
    let strDigit = '0';
    let strPos = strNum.length - 1 - pos;
    if (strPos >= 0 && strNum[strPos] !== '-') {
        strDigit = strNum[strPos];
    }
    return +strDigit;
}

function digitCount(num) {
    let countDigit = 0;
    if (num === 0) return 1;
    if (num < 0) num *= -1;
    while (num > 0) {
        num = Math.floor(num / 10);
        countDigit++;
    }
    return countDigit;
}
function mostDigits(numsArr) {
    let mostDigit = 0;
    // for (const val of numsArr) {
    //     let res = digitCount(val);
    //     if (res > mostDigit) mostDigit = res;
    // }
    numsArr.forEach((val) => {
        mostDigit = Math.max(mostDigit, digitCount(val));
    });
    return mostDigit;
}

function radixSort(arr) {
    let maxDigits = mostDigits(arr);
    for (let i = 0; i < maxDigits; i++) {
        let buckets = new Array(10);
        for (let j = 0; j < 10; j++) buckets[j] = new Array();
        arr.forEach((val) => {
            buckets[getDigit(val, i)].push(val);
        });
        arr.length = 0;
        // for (let j = 0; j < 10; j++) {
        //     while (buckets[j].length !== 0) {
        //         arr.push(buckets[j].shift());
        //     }
        // }
        arr = [].concat(...buckets);
    }
    return arr;
}

const test = Array.apply(null, { length: 10 })
    .map(Function.call, Math.random)
    .map((val) => {
        return Math.floor(Math.random() * (10000 - 0 + 1) + 0);
    });
console.log(test);
console.log(radixSort(test));
