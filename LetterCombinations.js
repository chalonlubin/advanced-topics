"use strict";

/* Given a string containing digits from 2-9 inclusive, return all possible
letter combinations that the number could represent. Return the answer in any
order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters. */

const phone = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

// goal: return a map of all possible letter combinations
// input: digits as string
// return: all possible combos associated with digits, non-repeated, in any order



//** FAILED LOGIC: Didn't consider the next nesting, and was sloppy with logic  */
// write a function that takes in digits
  // check if digits is an empty array, if so return it

  // create a letters array
  // loop over the digits  :O(n)
    // for each digit, find it's value in phone
    // split the value into an array
    // push that array into the letters array {digits = 1,2,3} [[a,b,c],[d,e,f], [g,h,i]]

  // if letters array length is one, spread the array and return it

  // create a letter combo array = []
  // create a cur pointer = 0
  // create a slow pointer = 0

  // while slow is less than lettersArr[slow].length
    // create a fast pointer = 1
    // assign first to lettersArr[0] [a,b,c]
    // assign next to lettersArr[fast] [d,e,f] // [g,h,i]
    // assign curLetters to = ""

    // assign curLetters to equal letter at first[slow] + next[cur] "ad"
    // while curLetters != digits length
      // add 1 to fast to go to next array // 2
      // add next[cur] to curLetters // "g"


    // push cur letters up to combo array  "adg"
    // add 1 to cur

    // return letter combo array



// check if digits is empty, if so return []

// declare a result set to an empty string

// loop over each digit
  // assign temp to []
  // loop over each letter of the digit
    // loop over each item of result
      // push item + letter to temp
  // set result to temp

// return result

function letterCombination(digits) {
  if (!digits) return [];

  let result = [''];

  for (let digit of digits) { // 1  // 2
    let temp = []; // a,b,c // ad , bd , cd, ae, be, ce, af, bf, cf
    for (let char of phone[digit]) { // a -> b -> c // d --> e --> f
      for (let item of result) { // "" //  a,b,c  //
        temp.push(item + char) // a , b , c // ad , bd , cd, ae, be, ce, af, bf, cf
      }
    }
    result = temp // [a, b, c] // [ad , bd , cd, ae, be, ce, af, bf, cf]
  }

  return result;
}


letterCombination("23");