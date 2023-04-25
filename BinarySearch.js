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

console.log(
  search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 14)
);
// Try to do this recursively on attempt 2!

/*  Given an array of integers nums which is sorted in ascending
order, and an integer target, write a function to search target in
nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity. */

function search2(nums, target, left = 0, right = nums.length - 1) {
  if (left > right) return -1;

  let mid = Math.floor((left + right )/ 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return search2(nums, target, mid + 1, right);
  } else {
    return search2(nums, target, left, mid - 1);
  }
}

console.log(search2([-1, 0, 3, 5, 9, 12], 9));
