// with helper function
const collectOdds = (num) => {
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(num);
    return result;
};

// without helper function
const pureCollectOdds = (nums) => {
    let newArr = [];
    if (nums.length === 0) {
        return newArr;
    }
    if (nums[0] % 2 !== 0) {
        newArr.push(nums[0]);
    }
    newArr = newArr.concat(pureCollectOdds(nums.slice(1)));
    return newArr;
};

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(collectOdds(numArr));
console.log(pureCollectOdds(numArr));
