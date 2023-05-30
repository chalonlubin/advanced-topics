/* Attempt 1: W/ Jesse
 */

/*  Suppose an array of length n sorted in ascending order is rotated
 between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7]
might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.

*/

let sample = [3, 4, 5, 0, 1, 2];

function findMin(arr) {
  let left = 0;
  let right = arr.length - 1;


  while (left < right) {
    let mid = Math.floor( (left + right) / 2);

    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[left]
}

console.log(findMin(sample));
