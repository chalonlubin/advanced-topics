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



// goal - return the pivot index
// input: array of ints
// output: index of pivot, or -1
// pivot - the point in which the sum all numbers to the right of the index equal the sum
// of all of the numbers to the lef

/** Add edge cases in examples, zeros and len */
// [1,2,3,4,5] = -1  // 3, 9 if pivot was 3
// [1,2,3,3] = 2
// [1,0]

function findPivot(nums) { //[1,0]
  if (nums.length < 2) return 0;

  for (let i = 1; i < nums.length; i++) { // i-1
    let left = nums.slice(0, i) || [0]; // [1]
    let right = nums.slice(i+1, nums.length) || [0]; // [0]
    if (left.reduce((a,b) => a+b) === right.reduce((a,b)=> a+b)) return i;
  }
  return -1;
}


// if length is less 2, pivot index 0;

// loop over each item in the array
  // track each sum for both left and right of the current index
  // slice from right and left
    // compare sums, if the sums are equal return the index

// return -1 if no equal sides are found.



