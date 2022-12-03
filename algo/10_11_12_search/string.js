// You want to find how many times an array is in another array.

const naiveString = (needle, stack) => {
    let count = 0;
    for (let i = 0; i < stack.length - 1; i++) {
        let j = 0;
        while (stack[i] === needle[j]) {
            i++;
            j++;
            if (i === stack.length) break;
        }
        if (j === needle.length) count++;
    }
    return count;
};

const test =
    "Hello that look good, there let's try that but not tha or tht or hat that ";
const ned = 'that';

console.log(naiveString(ned, test));
