// Assignment 1 solution

// ==========================================
// (part one / coding solutions)
// ==========================================

// Question 1: Convert the string "123" to a number and add 7
console.log(Number("123") + 7);

// Question 2: Check if the given variable is falsy and return "Invalid" if it is.
function validate(variable) {
  return variable ? "Valid" : "Invalid";
}
console.log(validate(0));

// Question 3: Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// Question 4: Create an array of numbers and return only the even numbers using filter method.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((num) => num % 2 === 0));

// Question 5: Use the spread operator to merge two arrays, then return the merged array.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log([...arr1, ...arr2]);

// Question 6: Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).
let day = 1;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
}

// Question 7: Create an array of strings and return their lengths using map method
let wordsArray = ["a", "ab", "abc"];
console.log(wordsArray.map((str) => str.length));

// Question 8: Write a function that checks if a number is divisible by 3 and 5.
function checkDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible By Both");
  } else if (num % 3 === 0) {
    console.log("Divisible By 3 Only");
  } else if (num % 5 === 0) {
    console.log("Divisible By 5 Only");
  } else {
    console.log("Not Divisible By Both");
  }
}
checkDivisible(15);

// Question 9: Write a function using arrow syntax to return the square of a number
const square = (num) => num * num;
console.log(square(5));

// Question 10: Write a function that destructures an object to extract values and returns a formatted string.
const person = { name: "John", age: 25 };
function describePerson({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
describePerson(person);

// Question 11: Write a function that accepts multiple parameters (two or more) and returns their sum.
function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Question 12: Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
function success() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
      console.log("Success");
    }, 3000);
  });
}
success();

// Question 13: Write a function to find the largest number in an array.
let arrOfNums = [1, 3, 7, 2, 4];
function getMax(arr) {
  return Math.max(...arr);
}
console.log(getMax(arrOfNums));

// Question 14: Write a function that takes an object and returns an array containing only its keys.
const Person = { name: "John", age: 25 };
function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys(Person));

// Question 15: Write a function that splits a string into an array of words based on spaces.
let text = "The quick brown fox";
console.log(text.split(" "));


// ==========================================
// (part two / essay solutions)
// ==========================================

// Question 16: Difference between forEach and for...of
// ------------------------------------------------
// forEach is an array method that runs a callback on each element.
// It cannot use break or continue.
// for...of works on any iterable and supports break/continue.
// Use forEach for simple iteration and for...of when you need control flow.

// Question 17: Hoisting and the Temporal Dead Zone (TDZ)
// ------------------------------------------------
// Hoisting moves declarations to the top of the scope.
// var is hoisted and initialized as undefined.
// let and const are hoisted but not initialized, creating the TDZ.
// Accessing them before declaration throws an error.

// Example:
// console.log(a); // undefined
// var a = 5;
// console.log(b); // Error: TDZ
// let b = 10;

// Question 18: Differences between == and ===
// ------------------------------------------------
// == performs type coercion before comparison.
// === compares value and type strictly with no coercion.
// Example: 5 == "5" => true, 5 === "5" => false

// Question 19: try-catch and async operations
// ------------------------------------------------
// try-catch handles errors without stopping the program.
// In async/await, it is important because rejected promises
// are caught safely inside catch.
// Example:
// async function fetchData() {
//   try {
//     let data = await fetch("url");
//     return data;
//   } catch (err) {
//     console.log("Error happened");
//   }
// }

// Question 20: Type conversion vs coercion
// ------------------------------------------------
// Type conversion is explicit: Number("123") => 123
// Type coercion is automatic: "5" * 2 => 10, "5" + 2 => "52"