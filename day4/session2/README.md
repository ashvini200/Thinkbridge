README – Session 2: JavaScript Basics: Types and Control Flow
Overview

In this session, we cover the fundamentals of JavaScript, including data types, variables, and control flow mechanisms. These concepts form the backbone of programming in JavaScript and are essential for writing functional and dynamic web applications.

By the end of this session, you should be able to write basic JavaScript code, manipulate data, and implement logic using loops and conditionals.

Objectives

Understand different JavaScript data types (numbers, strings, arrays, objects, etc.).

Learn to declare and use variables using var, let, and const.

Practice string manipulation and array operations.

Implement control flow using conditionals (if, else if, else, switch).

Use loops (for, while, for...of) to iterate over data.

Solve exercises to reinforce basic JavaScript concepts.

Key Concepts

1. Variables and Data Types

Variables store values that can be used and manipulated in the program.

Declaration:

let name = "Ashvini";
const age = 21;
var city = "Pune";

Common data types:

Number: let num = 10;

String: let str = "Hello";

Boolean: let flag = true;

Array: let arr = [1, 2, 3];

Object: let obj = { name: "Ashvini", age: 21 };

2. Strings and Arrays

Strings: Concatenation, template literals, length, and methods like toUpperCase(), slice().

let greeting = `Hello, ${name}!`;

Arrays: Adding/removing elements, iteration, accessing elements by index.

arr.push(4); // add element
arr.pop(); // remove last element

3. Control Flow: Conditionals

if...else if...else

if(age >= 18){
console.log("Adult");
} else {
console.log("Minor");
}

switch statement

switch(day){
case "Monday": console.log("Start of week"); break;
case "Friday": console.log("Weekend soon"); break;
default: console.log("Regular day");
}

4. Loops

for loop

for(let i = 0; i < 5; i++){
console.log(i);
}

while loop

let i = 0;
while(i < 5){
console.log(i);
i++;
}

for...of loop (arrays)

for(let item of arr){
console.log(item);
}

Tasks

Write exercises for variables and different data types.

Practice string and array operations.

Solve problems using loops and conditionals.

Experiment with template literals and array iteration.

Deliverables

js-basics.md – Notes containing solved exercises, explanations, and code snippets.

/src/js/basics.js – JavaScript file with working code examples for exercises.

Sample basics.js snippet:

// Variables and data types
let name = "Ashvini";
const age = 21;

// Conditional
if(age >= 18){
console.log(`${name} is an adult.`);
} else {
console.log(`${name} is a minor.`);
}

// Loop
for(let i = 1; i <= 5; i++){
console.log(`Count: ${i}`);
}

// Array operations
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
for(let fruit of fruits){
console.log(fruit);
}

Resources

MDN JavaScript First Steps

MDN JavaScript Guide

This session provides hands-on practice with core JavaScript concepts and prepares you for more advanced topics like functions, objects, and DOM manipulation.
