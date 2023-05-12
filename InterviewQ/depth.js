/* Find the max depth of an array with an unknown amount of nesting.
You can assume that each array will contain at least an int, and/or another array */

const testCase1 = [1]; // 1
const testCase2 = [1, 2, 3, [4, 5]]; // 2
const testCase3 = [1, 2, 3, [4, 5], [6, [3, 4, 5, [7, 9, 10, [2]]]]]; // 5

function maxDepth(input) {
  function dive(input, depth = 1) {
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

/* Take items from a nested array and place them in a tree like object */

/* example: [{name:Luke, state: AK, activities: [bowling, hockey, soccer]},
{name:Bob, state: OR, activities: [gaming, hockey, tennis]}

*/

let sample = [
  { name: "Luke", state: "AK", activities: ["bowling", "hockey", "soccer"] },
  { name: "Bob", state: "OR", activities: ["gaming", "hockey", "tennis"] },
];

function dfs(input) {
  let contents = [];

  function flatten(item) {
    if (Array.isArray(item)) {
      for (const data of item) {
        flatten(data);
      }
    } else if (typeof item === "object") {
      for (const key in item) {
        flatten(item[key]);
      }
    } else {
      contents.push(item);
    }
  }
  flatten(input);
  return contents;
}

dfs(sample)

function flatten2(input) {
  let contents = [];
  let stack = [input];

  while (stack.length) {
    let current = stack.pop()

    if (Array.isArray(current)){
      for (let i = 0; i < current.length; i++) {
        stack.push(current[i])
      }
    } else if (typeof current === 'object' && current !== null) {
      for (const value in current) {
        stack.push(current[value]);
      }
    } else {
      contents.push(current);
    }
  }
  return contents
}


console.log(flatten2(sample));


/* stack [] last in is first off (push, pop)
   queue [] first in is first out (push, shift) */


// console.log(dfs(sample));


