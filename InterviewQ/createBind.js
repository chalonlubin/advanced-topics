"use strict";

/* Create a standalone function bind that is functionally equivalent to the method Function.prototype.bind. */


// what does bind do?
  // it glues the context ('this') set to a parameter to create another function borrowed from the one its called on
  // why do we do this?
    // so we can use single functions in multiple ways
    // direct control over this

function bind(fn, context) {
  // take in the function as the parameter, and the this context you want
  // to bind
   return function(...args) {
    // return a NEW function, with the all of the arguments
      return fn.call(context, ...args);
      // return the result of that function being called with the passed in context, and arguments
   }
}

function example() {
  console.log(this)
}
const boundExample = bind(example, { a: true })
boundExample.call({ b: true }) // logs { a: true }

