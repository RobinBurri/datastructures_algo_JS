// sort()

// can sort() strings out of the box but not numbers

// for numbers you need to pass a function to tell it how to compare the values

const arrOfStr = ['Hello', 'Papa', 'Tonton', 'Salut', 'Wix', 'Apple'];
const arrOfNum = [6, 4, 10, 15];

console.log(arrOfStr.sort());
console.log(arrOfNum.sort());
console.log(
    arrOfNum.sort((a, b) => {
        return a - b;
    })
);
