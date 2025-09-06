// JavaScript Basics Exercises - Complete Solution

// 1. Variables Exercise
console.log("=== Variables Exercise ===");

// ex1
console.log("=== Variables Exercise: ex1 ===");
let age = 25;
const name = "Ashvini";
var isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
/* o/p -->
Name: Ashvini
Age: 25
Is Student: true */

// ex2
console.log("=== Variables Exercise: ex2 ===");
let water = 300,
  coffee = 50,
  milk = 200,
  sugar = 30;
let espresso = { w: 50, c: 15, m: 0, s: 0 },
  cappuccino = { w: 100, c: 10, m: 50, s: 5 },
  latte = { w: 50, c: 10, m: 100, s: 5 };

function canMake(d) {
  return water >= d.w && coffee >= d.c && milk >= d.m && sugar >= d.s;
}

let chosen = "cappuccino";
let drink =
  chosen === "espresso"
    ? espresso
    : chosen === "cappuccino"
    ? cappuccino
    : latte;

if (canMake(drink)) {
  console.log(`Making ${chosen}!`);
  water -= drink.w;
  coffee -= drink.c;
  milk -= drink.m;
  sugar -= drink.s;
  console.log("Ingredients left:", { water, coffee, milk, sugar });
} else {
  console.log("Ingredients insufficient!");
}
/* o/p -->
Making cappuccino!
Ingredients left: { water: 200, coffee: 40, milk: 150, sugar: 25 } */

// ex3
console.log("=== Variables Exercise: ex3 ===");
let balance = 5000;
let deposit = 2000,
  withdraw = 1500;

function transaction(dep, wdr) {
  if (dep > 0) {
    balance += dep;
    console.log(`Deposited: ${dep}`);
  }
  if (wdr > 0 && wdr <= balance) {
    balance -= wdr;
    console.log(`Withdrawn: ${wdr}`);
  } else if (wdr > balance) {
    console.log("Insufficient balance!");
  }
}

console.log("Initial Balance:", balance);
transaction(deposit, 0);
transaction(0, withdraw);
transaction(3000, 4000);
console.log("Final Balance:", balance);
/* o/p -->
Initial Balance: 5000
Deposited: 2000
Withdrawn: 1500
Deposited: 3000
Insufficient balance!
Final Balance: 8500 */

// 2. Strings Exercise
// ex1
console.log("=== Strings Exercise: ex1 ===");
let sentence1 = "JavaScript is powerful and versatile";
let wordCount = sentence1.split(" ").length;
let charCount = sentence1.replace(/\s/g, "").length;
let firstWord = sentence1.split(" ")[0];
let lastWord = sentence1.split(" ").slice(-1)[0];
let upperCaseSentence = sentence1.toUpperCase();
let lowerCaseSentence = sentence1.toLowerCase();

console.log("Original Sentence:", sentence1);
console.log("Word Count:", wordCount);
console.log("Character Count (excluding spaces):", charCount);
console.log("First Word:", firstWord);
console.log("Last Word:", lastWord);
console.log("Uppercase:", upperCaseSentence);
console.log("Lowercase:", lowerCaseSentence);
/* o/p -->
Original Sentence: JavaScript is powerful and versatile
Word Count: 5
Character Count (excluding spaces): 31
First Word: JavaScript
Last Word: versatile
Uppercase: JAVASCRIPT IS POWERFUL AND VERSATILE
Lowercase: javascript is powerful and versatile */

// ex2
console.log("=== Strings Exercise: ex2 ===");
let sentence2 = "Learning JavaScript is fun";
let words = sentence2.split(" ");
let reversedWords = [];

for (let i = 0; i < words.length; i++) {
  let reversed = words[i].split("").reverse().join("");
  reversedWords.push(reversed);
}

let reversedSentence = reversedWords.join(" ");

console.log("Original Sentence:", sentence2);
console.log("Reversed Words Sentence:", reversedSentence);
/* o/p -->
Original Sentence: Learning JavaScript is fun
Reversed Words Sentence: gninraeL tpircSavaJ si nuf */

// ex3
console.log("=== Strings Exercise: ex3 ===");
let sentence3 = "JavaScript makes coding interesting";
let vowels = "aeiouAEIOU";
let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < sentence3.length; i++) {
  let char = sentence3[i];
  if (vowels.includes(char)) {
    vowelCount++;
  } else if (char.match(/[a-zA-Z]/)) {
    consonantCount++;
  }
}

console.log("Sentence:", sentence3);
console.log("Number of Vowels:", vowelCount);
console.log("Number of Consonants:", consonantCount);
/* o/p -->
Sentence: JavaScript makes coding interesting
Number of Vowels: 13
Number of Consonants: 20 */

// Concatenation ex1
console.log("=== Strings Exercise: Concatenation ex1 ===");
let firstName = "Ashvini";
let lastName = "Hirve";
let fullName1 = firstName + " " + lastName;
let fullName2 = `${firstName} ${lastName}`;

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Full Name (using +):", fullName1);
console.log("Full Name (using template literals):", fullName2);
/* o/p -->
First Name: Ashvini
Last Name: Hirve
Full Name (using +): Ashvini Hirve
Full Name (using template literals): Ashvini Hirve */

// Concatenation ex2
console.log("=== Strings Exercise: Concatenation ex2 ===");
let num1 = 2024;
let num2 = 9;
let num3 = 4;

let concat1 = num1 + "" + num2 + "" + num3;
let concat2 = `${num1}${num2}${num3}`;

console.log("Numbers:", num1, num2, num3);
console.log("Concatenated (using +):", concat1);
console.log("Concatenated (using template literals):", concat2);
/* o/p -->
Numbers: 2024 9 4
Concatenated (using +): 202494
Concatenated (using template literals): 202494 */

// Concatenation ex3
console.log("=== Strings Exercise: Concatenation ex3 ===");
let numbersArray1 = [10, 20, 30, 40];
let concatenated = "";

for (let i = 0; i < numbersArray1.length; i++) {
  concatenated += numbersArray1[i];
}

console.log("Numbers Array:", numbersArray1);
console.log("Concatenated String:", concatenated);
/* o/p -->
Numbers Array: [10, 20, 30, 40]
Concatenated String: 10203040 */

// 3. Arrays Exercise
// ex1
console.log("=== Arrays Exercise: ex1 ===");
let numbersArray2 = [12, 45, 7, 89, 23, 56];
let largest = numbersArray2[0];
let smallest = numbersArray2[0];

for (let i = 1; i < numbersArray2.length; i++) {
  if (numbersArray2[i] > largest) largest = numbersArray2[i];
  if (numbersArray2[i] < smallest) smallest = numbersArray2[i];
}

console.log("Numbers Array:", numbersArray2);
console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);
/* o/p -->
Numbers Array: [12, 45, 7, 89, 23, 56]
Largest Number: 89
Smallest Number: 7 */

// ex2
console.log("=== Arrays Exercise: ex2 ===");
let numbersArray3 = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbersArray3.length; i++) {
  sum += numbersArray3[i];
}

let average = sum / numbersArray3.length;

console.log("Numbers Array:", numbersArray3);
console.log("Sum of Numbers:", sum);
console.log("Average of Numbers:", average);
/* o/p -->
Numbers Array: [10, 20, 30, 40, 50]
Sum of Numbers: 150
Average of Numbers: 30 */

// ex3
console.log("=== Arrays Exercise: ex3 ===");
let numbersArray4 = [12, 7, 45, 8, 23, 56, 19];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbersArray4.length; i++) {
  if (numbersArray4[i] % 2 === 0) {
    evenNumbers.push(numbersArray4[i]);
  } else {
    oddNumbers.push(numbersArray4[i]);
  }
}

console.log("Original Array:", numbersArray4);
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);
/* o/p -->
Original Array: [12, 7, 45, 8, 23, 56, 19]
Even Numbers: [12, 8, 56]
Odd Numbers: [7, 45, 23, 19] */

// Add to array
console.log("=== Arrays Exercise: Add to Array ===");
let fruits = ["Apple", "Banana", "Mango"];
console.log("Original Array:", fruits);

fruits.push("Orange");
fruits.push("Grapes");
fruits.unshift("Pineapple");

console.log("Updated Array:", fruits);
/* o/p -->
Original Array: ["Apple", "Banana", "Mango"]
Updated Array: ["Pineapple", "Apple", "Banana", "Mango", "Orange", "Grapes"] */

// Remove from array
console.log("=== Arrays Exercise: Remove from Array ===");
let fruits2 = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Original Array:", fruits2);

fruits2.pop();
fruits2.shift();
fruits2.splice(1, 1);

console.log("Updated Array:", fruits2);
/* o/p -->
Original Array: ["Apple", "Banana", "Mango", "Orange", "Grapes"]
Updated Array: ["Banana", "Orange"] */

// Array length
console.log("=== Arrays Exercise: Array Length ===");
let colors = ["Red", "Green", "Blue"];
console.log("Original Array:", colors);
console.log("Original Length:", colors.length);

colors.push("Yellow", "Purple");
console.log("After Adding Elements:", colors);
console.log("New Length:", colors.length);

colors.pop();
console.log("After Removing Last Element:", colors);
console.log("Final Length:", colors.length);
/* o/p -->
Original Array: ["Red", "Green", "Blue"]
Original Length: 3
After Adding Elements: ["Red", "Green", "Blue", "Yellow", "Purple"]
New Length: 5
After Removing Last Element: ["Red", "Green", "Blue", "Yellow"]
Final Length: 4 */

// 4. Loops Exercise
// ex1
console.log("=== Loops Exercise: ex1 ===");
for (let i = 1; i <= 10; i++) {
  console.log("Number:", i);
}
/* o/p -->
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
Number: 6
Number: 7
Number: 8
Number: 9
Number: 10 */

// ex2
console.log("=== Loops Exercise: ex2 ===");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Even Number:", i);
  }
}
/* o/p -->
Even Number: 2
Even Number: 4
Even Number: 6
Even Number: 8
Even Number: 10
Even Number: 12
Even Number: 14
Even Number: 16
Even Number: 18
Even Number: 20 */

// ex3
console.log("=== Loops Exercise: ex3 ===");
let sumLoop = 0;
for (let i = 1; i <= 10; i++) {
  sumLoop += i;
}
console.log("Sum of first 10 natural numbers:", sumLoop);

let numLoop = 5;
console.log("Multiplication Table of 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`${numLoop} x ${i} = ${numLoop * i}`);
}
/* o/p -->
Sum of first 10 natural numbers: 55
Multiplication Table of 5:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50 */

// For...of loop ex1
console.log("=== Loops Exercise: For...of ex1 ===");
for (let i = 10; i >= 1; i--) {
  console.log("Number:", i);
}
/* o/p -->
Number: 10
Number: 9
Number: 8
Number: 7
Number: 6
Number: 5
Number: 4
Number: 3
Number: 2
Number: 1 */

// ex2
console.log("=== Loops Exercise: For...of ex2 ===");
let numbersArray5 = Array.from({ length: 20 }, (_, i) => i + 1);
for (let num of numbersArray5) {
  if (num % 2 === 0) {
    console.log("Even Number:", num);
  }
}
/* o/p -->
Even Number: 2
Even Number: 4
Even Number: 6
Even Number: 8
Even Number: 10
Even Number: 12
Even Number: 14
Even Number: 16
Even Number: 18
Even Number: 20 */

// ex3
console.log("=== Loops Exercise: For...of ex3 ===");
for (let i = 1; i <= 10; i++) {
  console.log(`Square of ${i}:`, i * i);
}
/* o/p -->
Square of 1: 1
Square of 2: 4
Square of 3: 9
Square of 4: 16
Square of 5: 25
Square of 6: 36
Square of 7: 49
Square of 8: 64
Square of 9: 81
Square of 10: 100 */

// 5. If/Else Exercise
// ex1
console.log("=== If/Else Exercise: ex1 ===");
let numCheck1 = -10;
if (numCheck1 > 0) {
  console.log("Number is Positive");
} else if (numCheck1 < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is Zero");
}
/* o/p -->
Number is Negative */

// ex2
console.log("=== If/Else Exercise: ex2 ===");
let ageCheck = 17;
if (ageCheck >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}
/* o/p -->
Not eligible to vote */

// ex3
console.log("=== If/Else Exercise: ex3 ===");
let a = 25,
  b = 42,
  c = 17;
if (a > b && a > c) {
  console.log("Largest number is:", a);
} else if (b > a && b > c) {
  console.log("Largest number is:", b);
} else {
  console.log("Largest number is:", c);
}
/* o/p -->
Largest number is: 42 */

// 6. Switch Case Exercise
// ex1
console.log("=== Switch Case Exercise: ex1 ===");
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}
/* o/p -->
Wednesday */

// ex2
console.log("=== Switch Case Exercise: ex2 ===");
let marks = 85;
switch (true) {
  case marks >= 90:
    console.log("Grade: A+");
    break;
  case marks >= 75:
    console.log("Grade: A");
    break;
  case marks >= 60:
    console.log("Grade: B");
    break;
  case marks >= 50:
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: F");
}
/* o/p -->
Grade: A */

// ex3
console.log("=== Switch Case Exercise: ex3 ===");
let numSwitch1 = 20,
  numSwitch2 = 5,
  operator = "/";
switch (operator) {
  case "+":
    console.log("Sum:", numSwitch1 + numSwitch2);
    break;
  case "-":
    console.log("Difference:", numSwitch1 - numSwitch2);
    break;
  case "*":
    console.log("Product:", numSwitch1 * numSwitch2);
    break;
  case "/":
    console.log("Quotient:", numSwitch1 / numSwitch2);
    break;
  default:
    console.log("Invalid Operator");
}
/* o/p -->
Quotient: 4 */

// 7. Nested Loops & Ternary Operator
// ex1
console.log("=== Nested Loops Exercise ===");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += i * j + "\t";
  }
  console.log(row);
}
/* o/p -->
1	2	3	4	5	
2	4	6	8	10	
3	6	9	12	15	
4	8	12	16	20	
5	10	15	20	25	*/

// ex2
console.log("=== Ternary Operator Exercise ===");
let numberTernary = 17;
let result = numberTernary % 2 === 0 ? "Even" : "Odd";
console.log("Number:", numberTernary);
console.log("Result:", result);
/* o/p -->
Number: 17
Result: Odd */
