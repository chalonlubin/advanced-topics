/* Write the function isEmpty(obj) which returns true if the object has no
properties, false otherwise.
Should work like that: */

/* let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false */

function isEmpty(obj) {
  // if this loop runs, it means there is a key in the obj.
  for (let key in obj) {
    return false;
  }
  return true;
}

/* We have an object storing salaries of our team: */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
/* Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0. */

function sumSalaries(salaries) {
  let sum = 0;
  for (let person in salaries) {
    sum += salaries[person];
  }
  return sum;
}

/* Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.

}; */
let calculator = {
  read(a, b) {
    (this.a = a), (this.b = b);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read(2, 2);
console.log(calculator.sum());
console.log(calculator.mul());

/* There’s a ladder object that allows to go up and down: */

let ladder = {
  step: 0,
  up() {
    this.step += 1;
    return this;
  },
  down() {
    this.step -= 1;
    return this;
  },
  showStep() {
    // shows the current step
    console.log(this.step);
    return this;
  },
};
/* Now, if we need to make several calls in sequence, can do it like this: */

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

/* Modify the code of up, down and showStep to make the calls chainable, like this: */

ladder.up().up().down().showStep().down().showStep();

/*   Is it possible to create functions A and B so that new A() == new B()? */
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A(); // If a function returns an object then new returns it instead of this.
let b = new B();

console.log(a == b); // true


/* Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance: */

function Calculator() {

  this.read = function(a, b) {
    this.a = a;
    this.b = b;
  }
  this.sum = function() {
    return (this.a + this.b)
  }
  this.mul = function() {
    return (this.a * this.b)
  }
}


let oopCalculator = new Calculator();
oopCalculator.read(2,3);

console.log( "Sum=" + oopCalculator.sum() );
console.log( "Mul=" + oopCalculator.mul() );