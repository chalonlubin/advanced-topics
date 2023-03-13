/* Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums. If
target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity. */

function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],14))
// Try to do this recursively on attempt 2!