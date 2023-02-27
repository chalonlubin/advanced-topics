"use strict";

// exercises found on https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript


const func = function() {
  console.log(this)
}.bind("hello");

const obj = {
  callFun : func
}

// obj.callFun()

/**************************************/

function checkFun(a, b, c){
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
}

// 1 is this context, the rest are params
// checkFun.call(1,2,3,4);


/**************************************/

function sumOfNumbers() {
  let total = 0;
  for(let i = 0; i < arguments.length; i++){
      total += arguments[i];
  }
  return total;
}

// calling w/ no this context
const sum = sumOfNumbers.call(null,1,2,3);
console.log(sum);