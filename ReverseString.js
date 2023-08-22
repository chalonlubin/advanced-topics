let exampleString = 'Hannah';

const reverseString = function (s) {
  let result = '';
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
};

const reverseString2 = (s) => {
  return s.split('').reverse().join('');
};

/* in place solution... wont work in strict mode */

var revString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};

console.log(revString(exampleString));
