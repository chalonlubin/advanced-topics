'use strict';

const strs = ['flower', 'flow', 'flight'];

var longestCommonPrefix = function (strs) {
  // check for empty array
  if (!strs.length) return '';

  let longerstCommonPrefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    if (!char) return '';
    if (strs.every((str) => str[i] === char)) {
      longerstCommonPrefix += char;
    } else break;
  }
  return longerstCommonPrefix;
};

console.log(longestCommonPrefix(strs));
