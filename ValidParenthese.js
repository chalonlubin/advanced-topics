"use strict";
/**
 * Given a string `s` containing just the characters 
 * `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`,
 * determine if the input string is valid.

  An input string is valid if:

  1.  Open brackets must be closed by the same type of brackets.
  2.  Open brackets must be closed in the correct order.
  3.  Every close bracket has a corresponding open bracket of the same type.
 */

//Note: Need to revisit this couldn't solve without hint.

function isValid(s) {
  // Initialize stack to store the closing brackets expected...
  let stack = [];
  // Traverse each charater in input string...
  for (let idx = 0; idx < s.length; idx++) {
    // If open parentheses are present, push it to stack...
    if (s[idx] == "{") {
      stack.push("}");
    } else if (s[idx] == "[") {
      stack.push("]");
    } else if (s[idx] == "(") {
      stack.push(")");
    }
    // If a close bracket is found, check that it matches the last stored open bracket
    else if (stack.pop() !== s[idx]) {
      return false;
    }
  }
  return !stack.length;
}

function checkValid1(s) {
  let stack = [];

  for (let char of s) {
    if (char === "(") {
      stack.push(")");
    } else {
      if (stack.pop() !== ")") return false;
    }
  }
  return !stack.length;
}

// console.log(checkValid1("(())"));
// console.log(checkValid1("())"));
// console.log(checkValid1("(()"));

/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

// find a way to hold a value and check and see if the corresponding value is exists
// if so, remove the two values from needing to be matched
// if not, return false

// we can use a stack here, keep adding brackets to the stack
// once we find a closing character we see if it matches the end of the stack
// if it does, we pop it off, and check the next char
// and so forth

// Attempt 3 Time O(n) Space O(n)
function checkValid3(s) {
  let bank = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  let stack = [];

  for (let paren of s) {
    if (paren in bank) {
      stack.push(paren)
    } else {
      if (bank[stack.pop()] != paren) return false;
    }
  }

  return stack.length === 0;

}

checkValid3("{}()[]")
