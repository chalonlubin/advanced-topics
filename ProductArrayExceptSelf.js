"use strict";

const nums = [1,2,3,4];
// output: [24, 12, 8, 6]

function productExceptSelf(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const numsCopy = nums.slice();
    numsCopy[i] = 1;
    const val = numsCopy.reduce((product, number) => product * number)
    result.push(val);
  }

  return result;
}

productExceptSelf(nums);