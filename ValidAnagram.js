"use strict";
/**
 * Given two strings `s` and `t`, return `true` _if_ `t` _is an anagram of_ `s`_,
 * and_ `false` _otherwise_.
 */

const isAnagram = function (s, t) {
  if (t.length > s.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
};
