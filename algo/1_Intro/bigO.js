const addUp = (n) => {
    let ret = 0;
    for (let i = 1; i <= n; i++) {
        ret += i;
    }
    return ret;
};

const addUp1 = (n) => {
    return (n * (n + 1)) / 2;
};

let time1 = performance.now();
addUp(1000000000);
let time2 = performance.now();

console.log(`Time: ${(time2 - time1) / 1000} sec`);
