'use strict';

const nums = [1, 2, 3, 4];
// output: [24, 12, 8, 6]

/* This solution times out, when there are many inputs in "nums" due to the
slice and reduce... */
function productExceptSelf(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const numsCopy = nums.slice();
    numsCopy[i] = 1;
    const val = numsCopy.reduce(
      (product, number) => product * number
    );
    result.push(val);
  }

  return result;
}

productExceptSelf(nums);

const nums1 = [1, 2, 3, 4];
/* Working solution */
function productExceptSelf2(nums) {
  const result = []; //1 , 1 , 2, 6 //

  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }
  // console.log(result);

  let suffix = 1; // 1, 4, 12,
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix; // [1,1,2,6*1] /  [1,1,2*4=8,6] /
    suffix *= nums[i]; // 1*4=4 / 4*3=12 /
  }

  return result;
}
productExceptSelf2(nums);
