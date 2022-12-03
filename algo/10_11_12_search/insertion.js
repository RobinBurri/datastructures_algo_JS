function insertionSort(arr) {
    for (let mt = 1; mt < arr.length; mt++) {
        let currentVal = arr[mt];
        for (let st = mt - 1; st >= 0; st--) {
            if (st === 0) {
                arr[st + 1] = arr[st];
                arr[st] = currentVal;
                break;
            }
            if (currentVal < arr[st]) {
                arr[st + 1] = arr[st];
            } else {
                arr[st + 1] = currentVal;
                break;
            }
        }
    }
    return arr;
}


console.log(insertionSort([2, 1, 9, 76, 4]));
