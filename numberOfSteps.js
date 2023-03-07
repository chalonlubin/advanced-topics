"use strict";
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num, count=0) {
  if (num === 0) return count;
 num = (num % 2 === 0) ? num/2 : num-1;
 count += 1;
 return numberOfSteps(num, count);

};

numberOfSteps(10);