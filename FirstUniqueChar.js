'use strict';

let s = 'leetcode';

const firstUniqChar = function (s) {
  let charMap = {};
  let idx = -1;

  for (let char of s) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  for (let char of s) {
    if (charMap[char] === 1) {
      idx =
        idx === -1
          ? s.indexOf(char)
          : Math.min(idx, s.indexOf(char));
    }
  }

  return idx;
};

console.log(firstUniqChar(s));


/* A better version of my solution: */

const firstUniqChar2 = (s) => {
  const map = new Map()

  // build map, if not in map initialize it to 1
  // if it is already in the map, set to -1
  for(let letter of s)
      !map.has(letter) ? map.set(letter,1) : map.set(letter,-1)

  // iterate through the map to find the first element with 1
  for (let item of map)
      if (item[1] === 1) return s.indexOf(item[0])


  return -1
};