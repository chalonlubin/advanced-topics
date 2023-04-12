"use strict";

/* Works well with sorted arrays */

// non-traditional
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return true;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}


console.log(binarySearch([1,2,3,4,5,6,7,8,90,100,1000], 1000))

