/* Sort a numeric function */
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [1, 2, 15];

arr.sort(compareNumeric);

console.log(arr); // 1, 2, 15

/* Shorter version */
console.log(arr.sort((a, b) => a - b));

/* Sort strings, with odd characters */
let countries = ["Österreich", "Andorra", "Vietnam"];

console.log(countries.sort((a, b) => (a > b ? 1 : -1)));
// Andorra, Vietnam, Österreich (wrong)

console.log(countries.sort((a, b) => a.localeCompare(b)));
// Andorra, Österreich,Vietnam (correct!)¸

/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples: */

function camelize(str) {
  // split string by -
  // starting at index 1, capitalize the first digit
  // join back together

  splitStr = str.split("-");
  for (let i = 1; i < splitStr.length; i++) {
    let upper = splitStr[i][0].toUpperCase();
    splitStr[i] = upper + splitStr[i].slice(1);
  }
  return splitStr.join("");
}

// OR

function camelize2(str) {
  // split string by "-"
  // map over items in split
  // if item is idx 0
  // add item to map
  // else
  // capitalize first digit, and add that to the sliced letters
  // join the map result
  // return it
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase + word.slice(1)
    )
    .join("");
}

camelize2("background-color") == "backgroundColor";
camelize2("list-style-image") == "listStyleImage";
camelize2("-webkit-transition") == "WebkitTransition";

/* Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance: */

function filterRange(arr, a, b) {
  return arr.filter((num) => num >= a && num <= b);
}

let arr1 = [5, 3, 8, 1];

let filtered = filterRange(arr1, 1, 4);

console.log(filtered); // 3,1 (matching values)
console.log(arr1); // 5,3,8,1 (not modified)
