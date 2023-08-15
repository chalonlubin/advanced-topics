let s = 'MCMXCIV';

var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let cur = 0;
  let next = 1;

  while (cur < s.length) {
    const curVal = roman[s[cur]];
    const nextVal = roman[s[next]];

    if (curVal >= nextVal || !nextVal) {
      cur++;
      next++;
      result += curVal;
    } else {
      cur += 2;
      next += 2;
      result += nextVal - curVal;
    }
  }

  return result;
};

romanToInt(s);
