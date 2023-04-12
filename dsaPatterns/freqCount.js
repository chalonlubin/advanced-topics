"use strict";

/* The frequency counter pattern is especially useful for solving problems that involve comparing two arrays or strings and checking if they have the same frequency of values or patterns. It can also be useful for solving problems that involve finding patterns or subsets within an array or string. */

/*  keywords that might suggest the use of the frequency counter pattern include "frequency", "count", "occurrence", "matching", "anagram", "subset", "pattern", and "comparison" */


let arr = [1, 1, 1, 2, 2, 3, 4, 5];
let str = "hello";
let empty = "";

function freqCount(data) {
  const freqMap = {};
  for (let item of data) {
    freqMap[item] = (freqMap[item] || 0) + 1;
  }
  return freqMap;
}

// console.log(freqCount(arr));
// console.log(freqCount(str));
// console.log(freqCount(empty));

/*
Write a function: same
- Goal: check if the second array contains every value of the first array squared, and the
frequency must be the same
- Input: two arrays
- Output:  boolean

same([1,2,3],[1,4,9]) // true
same([2,2], [4,4]) // true
same([2,2], [4,4,1]) // false
*/

// declare the function w 2 arrays for input
// call a frequency counter on both arrays

// loop over the first object
// if the key exists in the second object
// compare the value
// if the value is not equal
// return false
// else return false

// return true

function same(arr1, arr2) {
  let freq1 = freqCount(arr1);
  let freq2 = freqCount(arr2);

  for (let key in freq1) {
    let sq = key * key;
    if (sq in freq2 && freq1[key] === freq2[sq]) {
      continue;
    } else return false;
  }
  return true;
}
// O(n) because it at worst must look at each value of each input
console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([2, 2], [4, 4]));
console.log(same([2, 2], [4, 4, 4]));
console.log(same([2, 2, 2], [4, 4]));

//
