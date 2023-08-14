'use strict';

const groupAnagrams = function (strs) {
  const result = [];
  const anagramMap = new Map();

  strs.forEach((str) => {
    const sorted = str.split('').sort().join('');

    if (anagramMap.has(sorted)) {
      anagramMap.get(sorted).push(str);
    } else {
      anagramMap.set(sorted, [str]);
    }
  });

  anagramMap.forEach((value) => result.push(value));

  return result;
};

console.log(
  groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
);
