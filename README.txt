******
Day 1
******

What Can you do wth JavaScript?

- Web & Mobile Apps
- Real Time Networking Apps
- Command Line Tools
- Games

Where does JS code run?

Browser - JavaScript Engine
 - Firefox -> SpiderMonkey
 - Chrome -> V8

 Node.js -> C++ program with Chrome's V8 JavaScript Engine. In can run in Windows, Unix, Mac and other platforms

 
 ECMAScript vs JavaScript

 ECMAScript -> Specification
 JavaScript -> Programming Languange

 ECMA v1 -> 1997
 ES6 / ES2015 -> 2015 (many new features)
 -
 -
 Yearly releases

 Converting code written in ES6 to a JavaSCript engine understandle code -> Transpiling (Babel)

 Editor -> Visual Studio Code - https://code.visualstudio.com/
 Node.js - https://nodejs.org/en/
 
Seperation of Concerns

HTML - Content 
JavaScript - Behaviour

Variables
 - Cannot be a reserved keyword
 - Should ne meaningful *
 - Should not start with a number
 - Should not contain space and hyphen (-)
 - Use camel case pattern *
 - Is case sentivie

 Constants
 If you do not need to reassign the value of a vaiable const should be your default choice. If you need to reassign use let.


 ******
 Day 2
 ******

 JavaScript Types

 1. Primitive / Value Types
 2. Reference Types

 Primitive Types
  - String
  - Number
  - Boolean
  - undefined
  - null

JavaScript is a dynamically types language.

Use typeof <variable> in order to find the type of the variable. 
In JavaScript the type is automally assigned based on the value.

Reference Types
 - Object
 - Array
 - Function

Object
When we are dealing with multiple related variables, we can put them inside an object.
Object notation - {}
Object contain multipe key value pairs called propeties.
Accessing a property inside an object
 - Dot notation
 - Bracket notation

 Array
 Data structure used to represent list of items.
 Array notation - []
 Each element ofan array will have an index. It starts with 0.
 To access the elements within an array we use the index.
 Unline other programming languages, in JavaScript we can store different types within an array.
 Elements within the array and length of the array is dynamic and can change at runtime.
 Arrays are objects and when we declare an array it receives inherited properties.
 
 Function
 Functions are block of statements that
    - performs a task
    - calcualtes a value

Difference between a parameter and an argument.
Parameter -> variable that is passed to a function at the time of definition
Argument -> value passed for parameter during calling the function

Oprators
+ -> Addtion of numbers. Concaniate strings.
-, *, / -> Substruction, Multiplication and Divition.
= -> Assignment.

Logical Operators
=== -> Equal
!== -> Not Equal
> -> Greater than
>= -> Greater than or equal to
< -> Less than
<= -> Less than or equal to

Difference between === and == (!== and !=)
=== comparres the value as well as the type
== compares only the value irrespective of the type


******
Day 3
******

Logical Operators - Chain loogical outcome.

&& - AND -> When all conditions need to be satisfied
|| - OR -> When any one of the conditions need to be satisfied
! - NOT -> When the opposite of the condition need to be satisfied

Conditional Statements

Statements that evaluate a condition and executes a block of code based on the outcome.

-> if - else
-> switch - case

Loops

We use loops when we need repeted execution of a block of code.

-> while
-> do...while
-> for
-> for...in
-> for...of

Increment Decrement Operators

i++ -> Execute line if code and then increament i by 1
i-- -> Execute line if code and then decrement i by 1
++i -> Imcrement i by 1 and then execute the line of code
--i -> Decrement i by 1 and then execute the line of code

i+=5 -> Increment i by 5
i-=7 -> Decrement i by 7
i*=2 -> Multiply i by 2
i/=3 -> Divide i by 3

object = 
{
  property name: property value,
  property name: property value
}

For...in and For...of loops are used to iterate through objects. 
 - For...in -> loop through property names -> to loop through objects
 - For...of -> loop through property values -> to loop through arrays


ES6

String literals
- String literals are confined within backtics (``)
- variales are placed within the backtics and denoted by ${variableName}

Arrow Functions

function add(a, b) {
  return a + b;
}

const add = (a, b) => {
  return a + b;
};

const add = (a, b) => a + b;

const printMessage = (message) => {
  console.log(message);
}

const printMessage = message => {
  console.log(message);
}

- Classes
- Inheritence


*******
Day 4
*******

Mutability in JavaScript

Assignment of objects may result in mutable code and should be avoided. Instead use object cloning to make your code immutable.

Object destructuring
... -> Object destructuring operator / Object spread operator

Object API 

Object.assign()


Array Functions (funtional programming)

array.map -> Iterate through array
array.filter -> Filter a value from array

React.js
--------
- A JavaScript library created by Facebook for building user interfaces.
- Runs in the browser at client side ( in client-server setup )
- Component Based library -> A React application is composed of components, 
  i.e. A entire application is built by puting several components together.
- Componets can be siblings or parent/children. If the entire application is one top level component, each componet may
  be composed ofseveral smaller components
- Components are nothing but smaller pieces of the application
- Unidirectional data flow. Data in a React app flows top-down from parent to child.
- React maintains a virtual DOM (document obejct model) in memory and replaces only the changed part, 
  which results in faster and more responsive application

Yarn Package Manager (NPM alternative): https://yarnpkg.com/en/

  Install create react app
  ------------------------
  > npm install -g create-react-app

  Create a new React App
  ----------------------
  > create-react-app react-number
  > cd react-number
  > yarn start / npm start
  
*******
Day 5
*******

A React App will not work if JavaScript is disabled in browser.

JavaScript Modules

Modules are pieces of code wich represent a functionality placed in a single JavaScript file. 
Application code is distributed into several modules.

export statements
export the current module code and make it available for other modules to use.

legacy way -> module.exports = <object, variable, array etc>;
ES6 way -> export default <object, variable, array etc>;

import statements
import dependent modules and work on it

legacy way -> const <variale> = require('filename');
ES6 way -> import <variable> from 'filename'';

Install the folloing libraries from npm registry in order to work with React.
- react
- react-dom

JSX - Combination of HTML and JavaScript that represents the template.


Components

- Class based component -> Heavy wight components wich has logic written inside it. it has methods to maniputate data.
  can contain state variables and lifecycle hooks.
- Functional component

---------------------------------------------
All component names start with capital letter
---------------------------------------------

Get React Developer Tools Chrome extension from Chrome Web Store.

Props - Read Only data that can be passed from parent to child.
State - Local variable within a class based component that can be changed programaticaly.

*******
Day 6
*******

State is local to a component where it is defined and can be modified only by that component.
If you are importing any file other than .js you need to specify file extension.
Compoent Lifecycle phases and methods (React v16.3 and above) -> refer picture.
Complete React Counter App Source Code -> https://github.com/romikanjoy/react-number
Please read the instructions below the source code (README.md) to get started.
