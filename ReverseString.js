'use strict';

const exampleString = 'Backward';

const reverseString = function (s) {
  let result = '';
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
};

const reverseString2 = (s) => {
  return s.split('').reverse().join(''); d
};

console.log(reverseString(exampleString));
console.log(reverseString2(exampleString));
