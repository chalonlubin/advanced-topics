"use strict";

/*
Goal: create a function that finds the first pair in an array where the sum is 0
Input: array
Output: array or undefined
*/

// declare a function called sumZero, takes in an array
  // create a slow pointer, 0
  // create a fast pointer, 1
  // while slow pointer is less than the array length
    // check if array @ slow + array @ fast === 0
      // return the two numbers in an array
    // add one to fast
    // if fast is greater than array length minus 1
    // add 1 to slow
    // set fast to slow + 1



// sumZero([-2,-1, 1,2]); [-2,2]
// sumZero([-3,-1,2,3]); [-3,3]
// sumZero([-2,-1,4,5]) undefined


// O(n)
function sumZero(arr) {
  let slow = 0;
  let fast = 1;
  while (slow < arr.length) {
    if (arr[slow] + arr[fast] === 0) {
      return [arr[slow], arr[fast]];
    } else {
      fast += 1;
      if (fast >= arr.length) {
        slow += 1;
        fast = slow + 1;
      }
    }
  }
}

// console.log(sumZero([-2,-1, 1,2]))
// console.log(sumZero([-3,-1, 2,3]))
// console.log(sumZero([-2,-1, 4,5]))


// Proper way:

function sumZero2(arr) {
  let right = 0;
  let left = arr.length-1;
  while (right < left) {
    let sum = arr[right] + arr[left]
    if (sum === 0) {
      return [arr[right], arr[left]]
    } else {
      sum > 0 ? left-- : right++
    }
  }
}

console.log(sumZero2([-7,-2,-1, 1, 2]))
console.log(sumZero2([-5,-3,-1, 2, 3, 4]))
console.log(sumZero2([-2,-1, 4,5,6,7]))