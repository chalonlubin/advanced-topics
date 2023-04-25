"use strict";
/**
 * Given two strings `s` and `t`, return `true` _if_ `t` _is an anagram of_ `s`_,
 * and_ `false` _otherwise_.
 */


/* Time O(n * logN) | Space O(n) */
const isAnagram = function (s, t) {
  if (t.length > s.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
};


// Attempt #2

/* Time O(n) | Space O(n) */
const isAnagram2 = function(s,t) {
  if (s.length !== t.length) return false;

  let freqMap = new Map();
  for (let letter of s) {
     freqMap[letter] ? freqMap[letter]++ : freqMap[letter] = 1;
  }

  for (let letter of t) {
      if (letter in freqMap && freqMap[letter] > 0) {
          freqMap[letter]--;
          continue
      } else {
          return false;
      }
  }

  return true;

}