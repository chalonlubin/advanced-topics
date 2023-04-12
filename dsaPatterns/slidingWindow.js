"use strict";

/*
Great for:
Keeping track of a subset of data in an array/string.
 */

/*
goal: find the max sum of n consecutive elements.
input: array
output: int

// declare a function maxSubarraySum that takes in an array
// declare a total
// declare a slow pointer set to 0
// declare a fast pointer set to n-1
  // while fast is less than array length
    // slice the array from slow-fast
    // reduce the sliced array
    // if reduced is greater than the total, assign it
    // otherwise, add 1 to slow and fast
  // return total
*/


// O(n)
function maxSubarraySum(arr,n) {
  if (n > arr.length) return null;

  let maxSum = 0;
  let slow = 0;
  let fast = n;

  while (fast < arr.length+1) {
    let curArr = arr.slice(slow,fast)
    let curSum = curArr.reduce((a,b) => a+b)
    maxSum = Math.max(maxSum, curSum);
    slow++
    fast++
  }

  return maxSum;
}

console.log(maxSubarraySum([1,2,3,3,4,5,6], 2))

// proper way
function maxSubarraySum2(arr, n) {
  if (n > arr.length) return null;

  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < n; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = n; i < arr.length; i++) {
    windowSum = windowSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSubarraySum2([1,2,3,3,4,5,6], 2))