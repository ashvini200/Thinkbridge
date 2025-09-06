# JavaScript Basics Documentation

This documentation provides a comprehensive overview of JavaScript basics, combining both theory and practical code examples. It is ideal for beginners to understand core concepts and start building small projects.

## 1. Variables

Definition:
Variables are containers for storing data values. JavaScript uses `var`, `let`, and `const` for variable declaration.

Importance:

- Fundamental building blocks of programming
- Enable data storage and manipulation
- Essential for tracking state in applications

Declaration Methods:

- `var` - Function-scoped, can be redeclared and updated
- `let` - Block-scoped, can be updated but not redeclared
- `const` - Block-scoped, cannot be updated or redeclared

Advantages/Disadvantages:
| Type | Advantage | Disadvantage |
|------|--------------------- |---------------------------------|
| var | Hoisted to function scope | Can lead to unexpected behavior |
| let | Prevents redeclaration, block-scoped | - |
| const| Prevents reassignment | Properties can be modified |

Applications:

- Storing user input
- Tracking application state
- Temporary calculations
- Configuration values

Example:

```javascript
let age = 25;
const name = "Ashvini";
var isStudent = true;

// Using object to group variables
const person = {
  name: "Ashvini",
  age: 25,
  isStudent: true
};
2. Strings
Definition:
Strings represent textual data and are immutable sequences of characters.

Importance:

Handling user input/output

Text processing and manipulation

Data validation and formatting

Common Methods:

length – Returns string length

toUpperCase()/toLowerCase() – Case conversion

split() – Splits string into array

replace() – Replaces parts of string

includes() – Checks if substring exists

Example:

javascript
Copy code
let sentence = "JavaScript is powerful and versatile";
let wordCount = sentence.split(" ").length;
let charCount = sentence.replace(/\s/g, "").length;

// Using regex
let regexWordCount = sentence.match(/\b\w+\b/g).length;
3. Arrays
Definition:
Arrays are ordered collections of values that can be of any type.

Importance:

Organize related data

Enable efficient data processing

Common Methods:

push()/pop() – Add/remove from end

unshift()/shift() – Add/remove from beginning

splice() – Add/remove from any position

forEach() – Iterate through elements

map() – Transform array elements

Example:

javascript
Copy code
let fruits = ["Apple", "Banana"];
fruits.push("Orange");  // Add to end
fruits.unshift("Mango"); // Add to beginning

// Using spread operator for immutability
const newFruits = [...fruits, "Pineapple"];
4. Loops
Definition:
Loops execute a block of code repeatedly until a condition is met.

Types of Loops:

for – Known number of iterations

while – Unknown number of iterations

do-while – Executes at least once

for...of – Iterate over iterables

Example:

javascript
Copy code
// For loop
for(let i = 1; i <= 10; i++){
    console.log("Number:", i);
}

// While loop
let count = 0;
while(count < 5){
    console.log(count);
    count++;
}

// Do-while loop
let num = 0;
do {
    console.log(num);
    num++;
} while(num < 5);
5. Conditional Statements
Definition:
Conditionals control program flow based on boolean conditions.

Types:

if/else

switch

Ternary operator ? :

Example:

javascript
Copy code
let age = 20;
if(age >= 18){
    console.log("Eligible to vote");
}else{
    console.log("Not eligible to vote");
}

// Switch example
const day = new Date().getDay();
let dayName;
switch(day){
    case 0: dayName = "Sunday"; break;
    case 1: dayName = "Monday"; break;
    default: dayName = "Unknown";
}
console.log(dayName);

// Ternary operator
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);
6. Nested Loops
Definition:
Loops placed inside other loops to handle multi-dimensional data.

Example:

javascript
Copy code
// Multiplication table
for(let i = 1; i <= 5; i++){
    let row = "";
    for(let j = 1; j <= 5; j++){
        row += (i * j) + "\t";
    }
    console.log(row);
}

// Process 2D array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let total = 0;
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        total += matrix[i][j];
    }
}
console.log("Matrix total:", total);
7. Best Practices
Use const by default, let when reassignment is needed

Prefer template literals ${variable} over string concatenation

Use array methods (map, filter, reduce) when appropriate

Keep functions small and focused on a single responsibility

Use meaningful variable names

Common Pitfalls:

Modifying arrays during iteration

Equality comparison issues (== vs ===)

Infinite loops from incorrect termination

Scope issues with var declarations

8. Advanced Examples
javascript
Copy code
// Object iteration
const person = { name: "Ashvini", age: 25 };
for(const key in person){
    console.log(`${key}: ${person[key]}`);
}

// Array operations
const numbers = [1,2,3,4,5];
const squared = numbers.map(n => n*n);
const evens = numbers.filter(n => n%2===0);
const sum = numbers.reduce((total, num) => total+num, 0);

// Short-circuit evaluation
const userInput = "";
const username = userInput || "Guest";
console.log(username); // Guest
This README.md file combines theory, practical code examples, and best practices in one place for JavaScript basics.

```
