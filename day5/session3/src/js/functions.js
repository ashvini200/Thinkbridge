// =========================
// Functions and Scope Examples
// =========================

// Ex1: Function Declaration - Add numbers
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Ex2: Function Declaration - Multiply numbers
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5)); // 20

// Ex3: Function Expression - Subtract numbers
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(10, 6)); // 4

// Ex4: Function Expression - Divide numbers
const divide = function (a, b) {
  return a / b;
};
console.log(divide(20, 4)); // 5

// Ex5: Arrow Function - Square
const square = (n) => n * n;
console.log(square(7)); // 49

// Ex6: Arrow Function - Cube
const cube = (n) => n * n * n;
console.log(cube(3)); // 27

// Ex7: Default Parameters
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet("Ashvini")); // Hello, Ashvini
console.log(greet()); // Hello, Guest

// Ex8: Multiple Default Parameters
function introduce(name = "Anonymous", age = 0) {
  return `${name} is ${age} years old`;
}
console.log(introduce("Rohit", 22)); // Rohit is 22 years old
console.log(introduce()); // Anonymous is 0 years old

// Ex9: Return Boolean
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false

// Ex10: Return String
function fullName(first, last) {
  return first + " " + last;
}
console.log(fullName("Ashvini", "Hirve")); // Ashvini Hirve

// Ex11: Function with Array Parameter
function sumArray(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}
console.log(sumArray([1, 2, 3, 4])); // 10

// Ex12: Function with Object Parameter
function printPerson(person) {
  return `${person.name}, ${person.age}`;
}
console.log(printPerson({ name: "Sanjana", age: 21 })); // Sanjana, 21

// Ex13: Anonymous Function in setTimeout
setTimeout(function () {
  console.log("Ex13: Hello after 1 second");
}, 1000);

// Ex14: Arrow Function in setTimeout
setTimeout(() => {
  console.log("Ex14: Arrow function after 1 second");
}, 1000);

// Ex15: Function Returning Function
function outer() {
  return function inner() {
    return "Inner function";
  };
}
const fn = outer();
console.log(fn()); // Inner function

// Ex16: Closure Example
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Ex17: IIFE
(function () {
  console.log("Ex17: Immediately Invoked Function");
})();

// Ex18: Arrow IIFE
(() => {
  console.log("Ex18: Arrow IIFE running");
})();

// Ex19: Function Scope
function scopeTest() {
  let x = 10;
  console.log("Inside:", x);
}
scopeTest();
// console.log(x); // Error

// Ex20: Block Scope with let
{
  let x = 5;
  console.log("Inside block:", x); // 5
}
// console.log(x); // Error

// Ex21: Block Scope with const
{
  const y = 20;
  console.log("Inside block:", y); // 20
}
// console.log(y); // Error

// Ex22: Global Variable
let globalVar = "Global";
function showGlobal() {
  console.log(globalVar);
}
showGlobal(); // Global

// Ex23: Local Variable
function showLocal() {
  let localVar = "Local";
  console.log(localVar);
}
showLocal(); // Local

// Ex24: Parameter Shadowing
let value = 50;
function test(value) {
  console.log(value);
}
test(100); // 100

// Ex25: Function with Rest Parameters
function total(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(total(1, 2, 3, 4)); // 10

// Ex26: Function with Spread Operator
function maxNum(a, b, c) {
  return Math.max(a, b, c);
}
const numbers = [3, 7, 2];
console.log(maxNum(...numbers)); // 7

// Ex27: Function Hoisting
console.log(hoisted()); // Hoisted works
function hoisted() {
  return "Hoisted works";
}

// Ex28: Expression Not Hoisted
// console.log(notHoisted()); // Error
const notHoisted = function () {
  return "Not hoisted";
};
console.log(notHoisted()); // Not hoisted

// Ex29: Function Inside Function
function outerFunc() {
  function innerFunc() {
    return "Inner called";
  }
  return innerFunc();
}
console.log(outerFunc()); // Inner called

// Ex30: Recursion - Factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Ex31: Recursion - Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8

// Ex32: Arrow with Multiple Lines
const area = (l, w) => {
  let result = l * w;
  return result;
};
console.log(area(5, 4)); // 20

// Ex33: Function Returning Object
function createUser(name, age) {
  return { name, age };
}
console.log(createUser("Om", 22)); // { name: 'Om', age: 22 }

// Ex34: Function Modifying Object
function updateAge(user, newAge) {
  user.age = newAge;
}
let user1 = { name: "Rashmi", age: 20 };
updateAge(user1, 25);
console.log(user1); // { name: 'Rashmi', age: 25 }

// Ex35: Pure Function
function double(n) {
  return n * 2;
}
console.log(double(8)); // 16

// Ex36: Impure Function
let count = 0;
function increase() {
  count++;
  return count;
}
console.log(increase()); // 1
console.log(increase()); // 2

// Ex37: Callback Function
function process(num, callback) {
  return callback(num);
}
console.log(process(5, square)); // 25

// Ex38: Higher Order Function
function higherOrder(fn, value) {
  return fn(value);
}
console.log(higherOrder((x) => x + 10, 20)); // 30

// Ex39: Arrow Function with Default
const greetMsg = (msg = "Hi") => msg;
console.log(greetMsg("Hello")); // Hello
console.log(greetMsg()); // Hi

// Ex40: Immediately Return Arrow
const getFive = () => 5;
console.log(getFive()); // 5
