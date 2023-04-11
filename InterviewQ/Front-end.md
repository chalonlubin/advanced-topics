<!-- First attempt, raw answers no lookup allowed -->

### Explain event delegation.

<!-- - Event delegation is assignment of events in javascript, like handling a click. The cool thing is instead of handling a click on a single target, you can call it on all event targets in all similar elements. -->

_Event delegation is a technique in JavaScript where instead of attaching an event listener to each individual element, you attach it to a parent element that contains all the child elements. When an event is triggered on a child element, the event bubbles up to the parent element, where the event listener is waiting to handle it. This allows for more efficient event handling, as you only need to attach one listener instead of many. It is also useful when you have dynamically created elements or elements that are added or removed from the DOM, as you don't need to attach or detach listeners each time._

### Explain "bubbling".

_Bubbling up, also known as event bubbling, is a feature of the DOM (Document Object Model) in which events triggered on a child element of an HTML document will also trigger on its parent elements all the way up to the top level element, unless the event is explicitly stopped from propagating. This allows for event handling to be performed at multiple levels of the document hierarchy, without having to explicitly attach event handlers to each element. Bubbling up can be useful in scenarios where you want to handle an event at a higher level, for example when you have multiple child elements that need the same event handling logic._

### What is JSX?

<!-- - JSX is the html complier that React uses. It is unique because you can type javascript syntax in the html in certain ways, like ternary statements or an anon functions. -->

_JSX is a syntax extension for JavaScript, used by popular libraries such as React, that allows for writing HTML-like code within JavaScript. It provides a way to describe the structure of a user interface in a more concise and intuitive way than pure JavaScript. JSX code can be transformed into regular JavaScript code using a compiler, such as Babel, before being executed in a browser or on a server. JSX supports the use of custom components, which allows for easy composition and reuse of UI elements._

### What does the async keyword do?

<!-- - Async lets javascript know the function will have code that is asynchronous in it, and allows the use of the await keyword. -->

_The async keyword is used to declare an asynchronous function in javascript. It allows for the return of a promise, and waits for the promise to be resolved to fully execute. This allows async functions to not block the execution of the program and allows other code to run while waiting for the result. It also allows the use of the await keyword._

### What's the difference between var, let, and const?

<!-- - var is function scoped, and can be reassigned / updated
- const has block scope, and cannot be reassigned (useful because it signals a constant)
- let has block scope, and can be reassigned -->

### What is the difference between React state and props?

- **props** pass data from a parent to a child component. They are read-only and cannot be modified within the child component.
- **State** is used to manage data within a component. It is mutable and can be modified using the setState() method. State is local to the component that declares it.

### Explain the CSS Box Model.

_- The box model is the layers of a box in CSS - border, padding, margin, ect._

### What are the six (seven) falsey values in JavaScript?

_null, undefined, 0 (-0), false, "", NaN,_

### What is AJAX?

<!-- * Ajax allows pages to update without refreshing. -->

_AJAX (Asynchronous JavaScript And XML) is a technique used in web development to send and receive data from a server without refreshing the entire web page. It allows updates to portions of a web page, by sending HTTP request to the server int he background._

### What does `preventDefault()` do?

_preventDefault() is a method in JavaScript that is used to prevent the default action of an event from occurring. When an event occurs in a web page (such as clicking on a link or submitting a form), the browser performs a default action associated with that event._

_By calling preventDefault() on the event object, the default action can be prevented from occurring. For example, if you call preventDefault() on a click event associated with a link, the link will not be followed when clicked._

_This method is often used in event handlers to prevent the default behavior of an element, allowing developers to implement custom functionality instead_

### What is a promise?

<!-- - A promise is a lot like it sounds, a future guarantee of a result -->

_A promise is a future guarantee of a result, which can be in one of three states: pending, fulfilled, rejected. Promises can be consumed using .then/catch or await. Promises can help simplify asynchronous code and make it easier to handle errors and manage the flow of data._

### What is an HTML element? What is an HTML attribute?

<!-- - An element is something like a div, a form, a button, ect.
- An attribute is a feature of that element, like color or border ect. -->

_An HTML element is a building block of an HTML document, and is defined by a start tag, some content, and an end tag. HTML elements can also have attributes, which provide additional information about the element._

_An HTML attribute is a characteristic of an HTML element that is used to modify its behavior or provide additional information about the element. Attributes can be included in the start tag of an element and consist of a name-value pair. Some examples of HTML attributes include the 'id' attribute, which is used to give an element a unique identifier, and the 'class' attribute, which is used to apply styling or functionality to a group of elements._

### Explain Function.prototype.bind

_Bind will take a functions 'this' context and bind it to another function, you can optionally pass in other variables it may bind to that function as well. Bind will return a new function, with the assigned this context a variables._

### What is the difference between == and ===?

_Strict equal (===) does not allow for JavaScript to use type cohesion. Loose equal (==) does allow for type cohesion, and in turn is less reliable. It is recommended to use === because it is less error prone, unless you need to use == for a specific reason._

### What is Webpack and what is it used for?

<!-- * Webpack bundles needs for a program and packages them in a way that makes it easier to use out of a box. -->

_Webpack is a powerful tool for front-end development that allows developers to bundle different assets and resources together into a single file or a few files, making it easier to load and manage code. It offers features such as code splitting and hot module replacement that can improve the developer experience and increase productivity._

### What is a constructor function?

_A constructor function is a special type of function in JavaScript that is used to create objects. It is often used in object-oriented programming to set up an object's initial state._

### How do you check if something is an Array in JavaScript?

_Array.isArray(item)_

### What is closure and why would you use it?

_A closure is created when a function is defined inside another function and the inner function has access to the outer function's variables and parameters, even after the outer function has returned. This allows the inner function to "remember" the environment in which it was created and maintain access to those variables and parameters._

_Uses include encapsulation of private data, creating higher order functions, and avoiding global variables._

### What's the difference between obj.key and obj["key"]?

_Dot notation needs to know the exact key name(cannot be a variable), where as the bracket notation can use unknowns such as a variable to represent the key. Bracket notation is also helpful because it can account for spaces in strings, where dot notation cannot._

### What is the difference between static, relative, fixed,and absolute positioning?

- Static - default positioning
- Relative - relative to where it would originally be, this now allows for overlap. The original space is preserved.
- Absolute - takes element out of document flow, and places it relative to the total document space, will overlap unless z index is specified.
- Fixed - positions relative to the viewport, will always stay viewable.

### Explain "hoisting".

_Bringing a function or variable to the top of a execution context at runtime, so it is defined and usable right at runtime even if it is below where it is called. Important to note that only declarations can be hosted, not assignments on initializations. So if you declare a variable without value assigned until later, the hosted variable wills still be undefined._

### OOP - what are abstraction and encapsulation?

_Abstraction removes the "how" of things and presents functionality in a simple form, where much of the logic is taken away from plain sight to provide an easier experience. It values highlighting the essential characteristics of a an object. Abstraction allows for more flexible and maintainable code, as it separates most of the details from the high level functionality._

- _Encapsulation is bundling like data / functionality together, and creating a smaller unit, while protecting that unit from interference or misuse. It prevents unintended changes to the data._

### What is CRUD?

- _Create, Read, Update, Delete_

### CSS - compare / contrast fixed, relative, absolute

- Fixed - same position in the viewport, will respond to viewport size changes.
- Relative - relative to it's original static position, (Still holds it's space in static position, but will overlap now as well.)
- Absolute - relative to the nearest non static ancestor, can/will overlap

### What is the definition of a higher-order function?

<!--  HOF is a function that calls another function -->

_A higher-order function (HOF) is a function that takes one or more functions as arguments, or returns a function as its result. In other words, a higher-order function either takes a function as an input, or outputs a function as a result. Higher-order functions are a powerful concept in functional programming, as they allow for greater modularity, composability, and abstraction._

### Explain the keyword `this`.

- `this` refers to a functions execution context. It is dynamically determined at runtime. If called outside of a function, it refers to the window. When an object is created with the `new` keyword, it assigns it's `this` context to that object.

### When would you use an arrow function instead of a regular function?

_When you want a function to not have an execution context for `this`, like in setTimeout, callbacks and event handlers. It is also just an easier and shorter syntax to write._

### Describe map, filter, and reduce methods.

- Map: creates a new array by calling a function on each element of an existing array. The function is applied to each element, and the result is used to create a new array.
- Filter: method creates a new array with all elements that pass a test implemented by a provided function. The function is applied to each element, and only elements that pass the test are included in the new array.
- Reduce: applies a function to each element of an array, and reduces the array to a single value. The function is applied to the first two elements, and the result is used as the first argument for the next application of the function. This process is repeated until all elements have been processed, and a single value is returned.

### What is NaN? What is special about NaN?

_Not a number. It's a special reserved value and cannot equal itself. It is a type of number to represent an unpresentable mathematical value._

### What is responsive web design?

_Design that "responds" as the page changes size / screens / viewing device_

### What is CSS selector specificity and how does it work?

<!-- The hierarchy in which style attribute "wins". !important, in-line, element, class, id -->

_CSS selector specificity is the mechanism used to determine which styles will be applied to an HTML element when multiple CSS rules have conflicting styles. Each CSS selector has a specific weight assigned to it, which determines its level of specificity. The more specific the selector, the higher its weight and the more likely it is to apply its styles. If two selectors have the same weight specificity, the one that occurs last takes precedence._

### What is the order of CSS selector specificity?

Type selectors (e.g. div, span, a)
Class selectors (e.g. .my-class)
ID selectors (e.g. #my-id)
Inline styles (e.g. style="color: red;")
!important declarations

### What is accessibility in regards to web design?

_Considerations for those with a non-normal web experience i.e deaf, blind, color-blind, light sensitive, sound sensitive, seizure prone, ect._

### What is ARIA? Why don't we need this as much as we did ~10 years ago?

<!-- - ARIA is used for accessibility, but because we have come out with better naming conventions for elements, we no longer really need ARIA. -->

_ARIA (Accessible Rich Internet Applications) is a set of attributes that can be added to HTML elements to make web content more accessible to people with disabilities, particularly those using assistive technologies such as screen readers. ARIA attributes can help provide additional context and meaning to elements, such as indicating the purpose of a button or the state of a checkbox._

### What is SEO?

_SEO (Search Engine Optimization) is the practice of optimizing websites and digital content to improve their visibility and ranking in search engine results pages (SERPs). The goal of SEO is to increase the quantity and quality of traffic to a website from organic (unpaid) search engine results_

### How do we hide our page from Google?

Robots.txt, authentication, setting specific meta tags to "noindex".

### When to use meta tags vs robots.txt?

*In general, meta tags are best used for providing more specific information about individual pages, while robots.txt is best used for controlling access to a website or specific sections of a website*

### What is Lighthouse?

*A tool in chrome dev tools that gives you data about a websites accessibility load times and other data pertaining to SEO*

### What is Babel?

- Babel is a complier and translates JSX / ES6 / TypeScript into JS so client side browsers can interpret it.

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
