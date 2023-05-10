/* Find the max depth of an array with an unknown amount of nesting.
You can assume that each array will contain at least an int, and/or another array */

const testCase1 = [1] // 1
const testCase2 = [1,2,3,[4,5]] // 2
const testCase3 = [1,2,3,[4,5],[6,[3,4,5,[7,9,10,[2]]]]] // 2




function maxDepth(input) {
  function dive(input, depth=1) {
    let maxDepth = depth;
    for (let item of input) {
      if (Array.isArray(item)) {
        maxDepth = Math.max(maxDepth, dive(item, depth + 1));
      }
    }
    return maxDepth;
  }

  return dive(input);
}

console.log(maxDepth(testCase1)); // Output: 1
console.log(maxDepth(testCase2)); // Output: 2
console.log(maxDepth(testCase3)); // Output: 5


