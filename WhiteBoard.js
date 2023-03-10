/*
- input: single number
- goal: determine if it is prime
- return: boolean
- prime: includes all numbers > 1 that cannot be div by anything other than themselves or 1
2, 3, 5, 7, 11, 13
 */

// 5 => true
// 4 => false

function isPrime(num) { // num=4
  // loop every value under the number,
  for (let i = num-1; i > 1; i--) { // i=2
    //if the remainder of the value divided by itself is 0
    if (num % i === 0) return false;
      // return false
  }
  // return true
  return true;
}

/// look at sq root solution

/** Refactor after whiteboard */
function isPrime(num) {

  let s = Math.sqrt(num);

  for (let i = 3; i <= s; i+2) {
    if (num % i === 0) return false;
  }

  return num > 1;
}
