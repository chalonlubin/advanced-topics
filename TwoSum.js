/**
 * Given an array of integers `nums` and an integer `target`,
 * return _indices of the two numbers such that they add up to
 * `target`_.You may assume that each input would have **_exactly_
 * one solution**, and you may not use the _same_ element twice.
 * You can return the answer in any order.
 * */

/** Attempt 1 T: O(n) S: O(n) */

const twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
