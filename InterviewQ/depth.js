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
    if (typeof item === "object") {
      for (const value in item) {
        flatten(item[value]);
      }
    } else if (Array.isArray(item)) {
      for (const i of item) {
        flatten(i);
      }
    } else {
      contents.push(item);
    }
  }
  flatten(input);
  return contents;
}



console.log(dfs(sample));


