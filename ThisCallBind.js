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
// console.log(sum);

/**************************************/


function updateZipCode() {
  console.log(this)
}
updateZipCode.call(1);

/**************************************/


const updateZipCode2 = function () {
  console.log(this);
};
updateZipCode2.call({});

/**************************************/

const updateZipCode3 = function () {
  console.log(this);
};

updateZipCode3.call({ zip: '11787'});

/**************************************/

const updateZipCode4 = function (newZip, country) {
  console.log(newZip + ' ' + country);
};
const zipCode = {
  zip: '11787'
};

updateZipCode4.call(zipCode, '11888', 'us');

/**************************************/

let zipCode2 = {
  checkZipcode5 : function() {
      console.log(this); // zipCode5
      function updateZipCode6() {
          console.log(this); // checkZip5
      }
      updateZipCode6.call(this);  // call it with zipCode5 this context?
      updateZipCode6() //undef
  }
}

zipCode2.checkZipcode5();