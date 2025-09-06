// Simple JavaScript file for debugging practice
function calculateFactorial(n) {
  if (n === 0) {
    return 1;
  }
  // Debug: Check the value of n at each step
  console.log(`Calculating factorial for: ${n}`);
  return n * calculateFactorial(n - 1);
}

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // Debug: Check the current element and total
    console.log(`Adding ${arr[i]} to current total: ${total}`);
    total += arr[i];
  }
  return total;
}

// Sample data for testing
const numbers = [1, 2, 3, 4, 5];
const testNumber = 5;

// Calculate factorial and sum
const factorial = calculateFactorial(testNumber);
const arraySum = sumArray(numbers);

// Output results
console.log(`Factorial of ${testNumber} is: ${factorial}`);
console.log(`Sum of [${numbers}] is: ${arraySum}`);

// More complex example with objects
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

// Debug: Check the users array
console.log("Users array:", users);

// Function to find user by ID
function findUserById(id) {
  // Debug: Check the ID being searched
  console.log(`Searching for user with ID: ${id}`);
  return users.find((user) => user.id === id);
}

// Find a user
const user = findUserById(2);
console.log("Found user:", user);

// Set a breakpoint on the line below to debug
console.log("Debugging completed!");
