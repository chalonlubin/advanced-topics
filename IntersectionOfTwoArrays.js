'use strict';

let n = [1, 2, 2, 1];
let n2 = [2, 2];

const intersect = function (nums1, nums2) {
  let data = {};
  let result = [];
  for (let num of nums1) {
    if (data[num]) {
      data[num] += 1;
    } else {
      data[num] = 1;
    }
  }

  for (let num of nums2) {
    if (num in data && data[num] > 0) {
      data[num] -= 1;
      result.push(num);
    }
  }

  return result;
};

console.log(intersect(n, n2));
