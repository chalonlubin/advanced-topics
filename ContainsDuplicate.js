/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every
element is distinct.
 */

/* Time O(n)
 * Space O(n)
 */
const containsDuplicate = function(nums) {
  let numsSet = new Set(nums);
  return nums.length > numsSet.size ? true : false;
};