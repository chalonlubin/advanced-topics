/* There is an integer array nums sorted in ascending order (with distinct
values).

Prior to being passed to your function, nums is possibly rotated at an
unknown pivot index k (1 <= k < nums.length) such that the resulting array is
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
(0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3
and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target,
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity. */


// input: arr of ints
// output: int representing an index
// goal - use binary search to find a target in a potentially rotated array

// thoughts... how do we know if the array is rotated?
// then how do we treat a rotated array
// I think we can find the subarray and just use that if our target falls in the range while maintaining time complexity

// if the start is greater than the end or mid, we have a rotated array

function search(nums, target) {
  let start = 0;
  let end = nums.length-1;

  while (start < end) {
    let mid = (Math.floor(start+end/2))

    if (nums[mid] === target) return mid;



  }
  return -1;
}

console.log(search([4,5,6,7,0,1,2], 0))