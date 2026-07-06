const name = "Kelvin";

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet(name);
greet("Kira");
greet("Ella");


// Email Masker
function maskEmail (email){
  let slicedEmail = email.slice(0, email.indexOf("@"));                                  

  let firstChar = slicedEmail[0];
  let middleChars = "*".repeat(slicedEmail.length - 2);
  let lastChar = slicedEmail[slicedEmail.length -1];

  let maskedUsername = `${firstChar}${middleChars}${lastChar}`;

  let slicedDomain = email.slice(email.indexOf("@"));
  let finalEmail = `${maskedUsername}${slicedDomain}`;
  return finalEmail;
}

console.log(maskEmail("kelvinkusha@gmail.com"));
console.log(maskEmail("tuglokelvin@gmail.com"));
console.log(maskEmail("emmanuellasadaya506@gmail.com"));

//Celsius to Fahrenheit

function convertCtoF(celsius) {
  const fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}

console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(20));
console.log(convertCtoF(30));
console.log(convertCtoF(-10));

//Card Counter
// let count = 0;
// function cardCounter (card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
    
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
    
//     default:

//   }

//   if (count > 0) {
//     return `${count} Bet`;
//   } else {
//     return `${count} Hold`;
//   }
// }

// console.log(cardCounter(4));
// console.log(cardCounter(-2));
// console.log(cardCounter("A"));
// console.log(cardCounter(5));

// Leap Year

let year = 2016;
function isLeapYear (year) {
  if (year % 400 === 0) {
    return `${year} is a leap year.`;
  } else if (year % 100 === 0) {
    return `${year} is not a leap year.`;
  } else if (year % 4 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year`
  }
}

let result = isLeapYear(year);
console.log(result);


//Truncate A String
function truncateString (string, num) {
  if (string.length > num) {
    return string.slice(0, num) + "...";
  } else {
    return string;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));

// //Confirm Ending tool
function confirmEnding (string1, string2) {
  if (string1.slice(-string2.length) === string2) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Conner", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Open sesame", "game"));
console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Abstraction", "action"));

// function celsiusToFahrenheit (celsius) {
//   let fahrenheit = celsius * (9/5) + 32;
//   return fahrenheit;
// }

// console.log(celsiusToFahrenheit(30));

//arrow function
// const celsiusToFahrenheit = (celsius) => {
//   let fahrenheit = celsius * (9/5) + 32;
//   return fahrenheit;
// }

// console.log(celsiusToFahrenheit(32));

//expression
const celsiusToFahrenheit = function(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}
console.log(celsiusToFahrenheit(98));

//greetuser
function greetUser (name, greeting = "Hello") {
  return  `${greeting}, ${name}`;
}

console.log(greetUser("Kwame"));


//Scope
let message = "I am global";

function showMessage() {
  let message = "I am local";
  console.log(message);
}

showMessage(); //I am Local
console.log(message); //I am global



//1. Letter Grade
function getLetterGrade (score) {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 70 && score <= 79) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 50 && score <= 59) {
    return "D";
  } else {
    return "F"
  }
}

console.log(getLetterGrade(78));
console.log(getLetterGrade(27));
console.log(getLetterGrade(59));
console.log(getLetterGrade(96));

// 3. Generate Report

function generateReport (studentName, scores) {
  return `${studentName} scored ${scores} - Grade: ${getLetterGrade(scores)}`;
}

console.log(generateReport("Yaw", 78));
console.log(generateReport("Kofi", 69));


//Functions

function multiplyBy (num1, num2) {
  return num1 * num2;
}

console.log(multiplyBy(4, 8));
console.log(multiplyBy(100, 8));

// arrow

const MultiplyBy = (num1, num2) => {
  return num1 * num2;
}

console.log(MultiplyBy(6, 7));
console.log(MultiplyBy(7,8));

//expressions

const multiplyby = function(num1, num2) {
  return num1 * num2;
}

console.log(multiplyby(10, 4));
console.log(multiplyby(20, 31));

//Default Parameters

function buildUsername (firstName, lastName, separator = "_") {
  return `${firstName}${separator}${lastName}`.toLowerCase();
}

console.log(buildUsername("Kelvin", "Tuglo"));
console.log(buildUsername("Alex", "Wontumi"));
console.log(buildUsername("Ekow", "Turkson"));
console.log(buildUsername("Henry", "Bonsu"));

//Scope
let count = 1;

function increment() {
  count = count + 1;
  return count;
}

console.log(increment()); //2
console.log(count); //2

//FoF

function squareNumber (n) {
  return n ** 2;
}

console.log(squareNumber(4));
console.log(squareNumber(2));
console.log(squareNumber(14));
console.log(squareNumber(8));

function sumOfSquares (a, b) {
  return  squareNumber(a) + squareNumber(b);
}

console.log(sumOfSquares(3, 4));

console.log(sumOfSquares(10, 10));


//Calculate Discount
function calculateDiscount (price, discountPercent = 10/100) {
  let finalPrice = price - discountPercent;
  return finalPrice;
}

console.log(calculateDiscount(200, 25));

//Is Even
function isEven (n) {
  if (isEven) {
    return true;
  } else {
    return false;
  }
}

function describeNumber (n) {
  isEven(n) 
  return 
}

// Scope
function outer() {
  let x = 5;

  function inner() {
    return x * 2;
  }

  return inner(); // 10
}

console.log(outer()); //5
console.log(x); // Reference Error - Not defined

function isPositive (n) {
  if (n > 0) {
    return true;
  } else {
    return false;
  }
}

const isNegative = (n) => {
  if (n < 0) {
    return true;
  } else {
    return false;
  }
}