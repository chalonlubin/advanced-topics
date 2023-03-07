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
