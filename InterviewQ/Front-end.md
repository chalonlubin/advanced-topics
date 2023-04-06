<!-- First attempt, raw answers no lookup allowed -->

Explain event delegation.
* Needs work.
- Event delegation is assignment of events in javascript, like handling a click. The cool thing is instead of handling a click on a single target, you can call it on all event targets in all similar elements.
What is JSX?
* Needs work
- JSX is the html complier that React uses. It is unique because you can type javascript syntax in the html in certain ways, like ternary statements or an anon functions.
What does the async keyword do?
- Async lets javascript know the function will have code that is asynchronous in it, and allows the use of the await keyword.
What's the difference between var, let, and const?
- var is outdated. it can be reassigned and redeclared. Variables declared with var have global scope.
- const has block scope, and cannot be reassigned
- let has block scope, and can be reassigned
What is the difference between React state and props?
* Find a good way to explain state..
- props are items (variables as data or functions) that are given to components to be passed down
- State is local data to a component is changeable, and intended to change and be updated?
Explain the CSS Box Model.
* Needs work
- The box model is the layers of a box in CSS - border, padding, margin, ect.
What are the six (seven) falsey values in JavaScript?
* Missing 1(2)
- null, undefined, 0, false, "",
What is AJAX?
* Could go deeper here
- Ajax allows pages to update without refreshing.
What is a promise?
- A promise is a lot like it sounds, a future guarantee of a result
What is an HTML element? What is an HTML attribute?
- An element is something like a div, a form, a button, ect.
- An attribute is a feature of that element, like color or border ect.
Explain Function.prototype.bind
* Needs work
- Bind will take a functions 'this' context and bind it to another function, and can pass in other variables it may bind to that function as well.
What is the difference between == and ===?
Strictly equals does not allow for JavaScript to use type cohesion. Loosely equals does, and is less reliable.
What is Webpack and what is it used for?
* Needs work
- Webpack bundles needs for a program and packages them in a way that makes it easier to use out of a box.
What is a constructor function?
* I'm not sure what this is... Does this refer to a class object constructor method?
How do you check if something is an Array in JavaScript?
- Array.isArray(item)
What is closure and why would you use it?
* Could go much deeper.
- Closure is caching data in a functions memory.
- When you need to protect data and make it private.
What's the difference between obj.key and obj["key"]?
* Honestly never used obj["key"]
- Best guess: Maybe the question is referring to dot notation vs bracket notation (find proper vocab?).
Dot notation needs to know that the key exists before you use it, by name (cannot be a variable), where as the bracket notation can use unknowns such as a variable to represent the key.
What is the difference between static, relative, and absolute positioning?
* Needs work
- Static - always in the same spot, never moving
- Relative - relative to it's parent
- Absolute - relative to the space on the total viewable space(?)
Explain "hoisting".
* Probably needs work
- Bringing a function or variable to the top of a exectuion context at runtime, so it is defined and usable right at runtime even if it is below where it is called.
OOP - what are abstraction and encapsulation?
- Abstraction removes the "how" of things and presents functionality in a simple form, where much of the logic is taken away from plain sight to provide an easier experience.
- Encapsulation is bundling like data / functionality together, and creating a smaller unit.
What is CRUD?
- Create, Read, Update, Delete
CSS - compare / contrast fixed, relative, absolute
* Need more detail here
- Fixed - same position no matter the scale
- Relative - relative to it's parent
- Absolute - relative to the space on the total viewable space(?)
- Relative is great if you want relational positioning, absolute is great if you need to place a whole element somewhere outside of its block or natural positioning
What is the definition of a higher-order function?
* Fact check this
- HOF is a function that calls another function
Explain the keyword `this`.
- `this` refers to a functions context. It is unknown until runtime. If called outside of a function, it refers to the window.
When would you use an arrow function instead of a regular function?
- When you want a function to not have an execution context for `this`, like in setTimeout.
Describe map, filter, and reduce methods.
* Check out reduce and explain better
- Map: creates a new array from looping over another array
- Filter: creates a new array with just the data that matches the filter directions
- Reduce: iteratively take an item and carry a sum as you do something to each part of the item, returning a single result
What is NaN? What is special about NaN?
- Not a number. It's a special reserved value and cannot equal itself. It is a type of number.
What is responsive web design?
- Design that "responds" as the page changes size / screens / viewing device
What is CSS selector specificity and how does it work?
- The hierarchy in which style attribute "wins". !important, in-line, element, class, id
What is accessibility in regards to web design?
- Considerations for those with a non-normal web experience i.e deaf, blind, color-blind, light sensitive, sound sensitive, seizure prone, ect.
What is ARIA? Why don't we need this as much as we did ~10 years ago?
* Needs work
- ARIA is used for accessibility, but because we have come out with better naming conventions for elements, we no longer really need ARIA.
What is SEO?
- Search Engine Optimization - optimizing web pages so they make the top of searches
How do we hide our page from Google?
* More detail
- by using Robots.txt
When to use meta tags vs robots.txt?
* Not sure?
What is Lighthouse?
- A tool in chrome dev tools that gives you data about a websites accessibility load times and other data pertaining to SEO
What is Babel?
* I know what this is, but I can't remember right now. It has something to do with compiling but I cannot remember if it was Python or JavaScript. RIP.





Explain event delegation.
What is JSX?
What does the async keyword do?
What's the difference between var, let, and const?
What is the difference between React state and props?
Explain the CSS Box Model.
What are the six (seven) falsey values in JavaScript?
What is AJAX?
What is a promise?
what is an HTML element? What is an HTML attribute?
Explain Function.prototype.bind
What is the difference between == and ===?
What is Webpack and what is it used for?
What is a constructor function?
How do you check if something is an Array in JavaScript?
What is closure and why would you use it?
What's the difference between obj.key and obj["key"]?
What is the difference between static, relative, and absolute positioning?
Explain "hoisting".
OOP - what are abstraction and encapsulation?
What is CRUD?
CSS - compare / contrast fixed, relative, absolute
What is the definition of a higher-order function?
Explain the keyword `this`.
When would you use an arrow function instead of a regular function?
Describe map, filter, and reduce methods.
What is NaN? What is special about NaN?
What is responsive web design?
What is CSS selector specificity and how does it work?What is accessibility in regards to web design?
What is ARIA? Why don't we need this as much as we did ~10 years ago?
What is SEO?
How do we hide our page from Google?
When to use meta tags vs robots.txt?
What is Lighthouse?
What is Babel?