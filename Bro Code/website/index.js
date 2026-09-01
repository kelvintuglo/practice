// console.log("Hello, World!");
// console.log("I like pizza.");

// // window.alert(`This is an alert`);
// // window.alert(`I like pizza`);

// // const name = "Kojo Manu";

// // document.getElementById("myH1").textContent = "Hello"; 
// // document.getElementById("myP").textContent = `Welcome, ${name}`;


// // //Variables
// let age = 25;
// console.log(age);
// console.log(typeof age);

// let price = 20.99;
// console.log(price);
// console.log(typeof price);

// let gpa = 2.1;
// console.log(gpa);
// console.log(typeof gpa);

// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`YOur gpa is: ${gpa}`);

// // //Strings
// let firstName = "tugy";
// console.log(firstName);
// console.log(typeof firstName);
// console.log(`Your firstName is ${firstName}`);

// let favouriteFood = "Waakye";
// console.log(favouriteFood);
// console.log(typeof favouriteFood);
// console.log(`Your favourite food is: ${favouriteFood}`); 

// let email = "wagwan456@cockney.com";
// console.log(email);
// console.log(typeof email);
// console.log(`The email is: ${email}`);

// // //Booleans
// let online = true;
// console.log(online);
// console.log(typeof online);
// console.log(`He is online: ${online}`);

// let forSale = true;
// console.log(forSale);
// console.log(typeof forSale);
// console.log(`Is this car for sale? ${forSale}`); 

// let isEnrolled = false;
// console.log(isEnrolled);
// console.log(typeof isEnrolled);
// console.log(`Are you enrolled in school? ${isEnrolled}`);

// // let fullName = "Ethan Castle";
// // let score = 26;
// // let student = true;

// // document.getElementById("p1").textContent = `My full name is: ${fullName}.`;
// // document.getElementById("p2").textContent = `I am ${score} years old.`;
// // document.getElementById("p3").textContent = `Are you currently a student: ${student}.`; 

// //Arithmetic Operators

// let students = 45;
// students = students + 1;
// students = students - 1;
// students = students * 1;
// students = students / 1;
// students = students ** 2;
// students = students % 4;

// //Augmented assignment operators
// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// //Increment and Decrement operators
// students++;
// students--;



// console.log(students);


// //Taking User Imput
// // 1. Creating a window prompt
// // 2. HTML Textbox

// // Creating a window prompt.
// // let username;
// // username = window.prompt("What's your username?");
// // console.log(username);

// // 2 
// let username;
// // document.getElementById("mySubmit").onclick = function () {
// //   username = document.getElementById("myText").value;
// //   console.log(username);
// //   document.getElementById("myh2").textContent = `Wagwan, ${username}`;
// // }

// let firstname;
// let lastname;
// let fullname;

// // document.getElementById("submit").onclick = function () {
// //   firstname = document.getElementById("firstname").value;
// //   lastname = document.getElementById("lastname").value;
// //   fullname = firstname + " " + lastname;
// //   document.getElementById("g").textContent = `Welcome back ${fullname}`;
// //   console.log(fullname);
// // }

// //Circumference
// const PI = 3.14159;
// let radius;
// let circumference;

// // document.getElementById("h").onclick = function () {
// //   radius = document.getElementById("rad").value;
// //   radius = Number(radius);
// //   circumference = 2 * PI * radius;
// //   document.getElementById("myh3").textContent = `Circumference is: ${circumference}cm`;
// // }

// //Counter Program
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countlabel = document.getElementById("countlabel");

// let count = 0;
// increaseBtn.onclick = function() {
//   count += 2;
//   countlabel.textContent = count;
//   console.log(count);
// }

// resetBtn.onclick = function(){
//   count = 0;
//   countlabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//   count -= 2;
//   countlabel.textContent = count;
//   console.log(count);
// }

//Random Number
let random = Math.random();
console.log(random);

let u = Math.floor(Math.random() * 100) + 1;
console.log(u)

const min = 50;
const max = 100;

let r = Math.floor(Math.random() * (max - min)) + min;
console.log(r);

//if statements

let age = 15;
let hasLicense = false;

if (age >= 16) {
  console.log("You are old enough to drive");

  if (hasLicense) {
    console.log("You have a license!");
  } else {
    console.log("You do not have your license yet");
  }
} else {
  console.log("You must be 16+ to have a license");
}

let a = 18;
if (a >= 100) {
  console.log("You're too old  to be here");
} else if (age < 0) {
  console.log("Age can't be below 0");
} else if (age >= 18) {
  console.log("Your old enough to be here");
} else {
  console.log("You must not be here");
}

//Ternary operator.
let $age = 21;
let message = $age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

let time = 12;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting); 

let isStudent = false;
let $message = isStudent ? "You're a student" : "You're not a student";
console.log($message);

let purchaseAmount = 198;
let discount = purchaseAmount >= 100 ? "You get a 10% discount" : "You don't qualify for a discount";
console.log(discount);

//Switch statement
let day = 1;

switch (day) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Tuesday");
    break;
  case 3: 
    console.log("It is Wednesday");
    break;
  case 4: 
    console.log("It is Thursday");
    break;
  case 5:
    console.log("It is Friday");
    break;
  case 6:
    console.log("It is Saturday");
    break;
  case 7:
    console.log("It is Sunday");
    break;
  default:
    console.log("Not a day man");
}

//String Methods
let userName = "Ethan Castle";
console.log(userName.charAt(6));
console.log(userName.indexOf("n"));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.trimStart());
console.log(userName.trimEnd());
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.repeat(5));
console.log(userName.startsWith("E"));
console.log(userName.endsWith("e")); 

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);
phoneNumber = phoneNumber.padStart(15, "a");
console.log(phoneNumber);

//String Slicing
const fullName = "Ethan Castle";
let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6, 12);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);
let $firstName = fullName.slice(0, fullName.indexOf(" "));
let $lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
console.log($firstName);
console.log($lastName);

const email = "ethancastle@gmail.com";

let UserName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(UserName);
console.log(extension);


//Method Chaining
// let usernames = window.prompt("Enter your name: ");
// usernames = usernames.trim().charAt(0).toUpperCase() + usernames.trim().slice(1).toLowerCase();
// console.log(usernames);

//Logical Operators
const temp = 250;
// AND logical operator (&&)
if (temp > 0 && temp <= 30){
  console.log("The weather is GOOD");
} else {
  console.log("The weather is BAD");
}

// OR logical operator (||)
if (temp <= 0 || temp > 30){
  console.log("The weather is BAD");
} else {
  console.log("The weather is GOOD");
}

// NOT logical operator (!)
const isSunny = true;
if (!isSunny){
  console.log("It is SUNNY");
} else{
  console.log("It is CLOUDY");
}

// Assignment Operators
// = assingment operator
// == equality operator
// === strict equality operator
// != inequality operator
// !== strict inequality operator

const PI = 3.14;

if (PI == "3.14"){
  console.log("That is PI");
} else {
  console.log("That is NOT PI");
}

if (PI === "3.14"){
  console.log("That is PI");
} else {
  console.log("That is NOT PI");
}

if (PI != "3.14"){
  console.log("That is NOT PI");
} else {
  console.log("That is PI");
}

if (PI !== "3.14"){
  console.log("That is NOT PI");
} else {
  console.log("That is PI");
}

// //While loop
// let theUserName = "";

// while(theUserName === "" || theUserName === null){
//   theUserName = window.prompt("Enter your name:");
// }

// console.log(`Hello ${theUserName}`);

// //Do...while loop
// let myName = "";
// do{
//   myName = window.prompt("Enter your name:");
// } while(myName === "" || myName === null);

// console.log(`Hello, ${myName}`);

// let loggedIn = false;
// let myuserName;
// let password;

// while(!loggedIn){
//   myuserName = window.prompt("Enter your username");
//   password = window.prompt("Enter your password");

//   if (myuserName === "myuserName" && password === "mypassword"){
//     loggedIn = true;
//     console.log("You are logged in");
//   } else {
//     console.log("Invalid credentials. Please try again");
//   }
// }

// do{
//   myuserName = window.prompt("Enter your username");
//   password = window.prompt("Enter your password");

//   if (myuserName === "myuserName" && password === "mypassword"){
//     loggedIn = true;
//     console.log("You are logged in");
//   } else {
//     console.log("Invalid credentials. Please try again");
//   }
// } while(!loggedIn)

//for loop
for(let i = 0; i<=2; i++){
 console.log("Hello");
}

for(let i = 10; i>0; i=i-2){
  console.log("Wadup");
}

for(let i = 1; i <= 10; i++){
  console.log("Wagwan gee");
}

for(let i = 10; i >= 0; i--){
  console.log(i);
}

//Continue and Break
for(let i = 1; i <= 20; i++){
  if(i == 16){
    continue //to skip an iteration.
  } else {
      console.log(i);
  }
}

for(let i = 1; i <= 20; i++){
  if(i == 16){
    break //break out of the loop entirely.
  } else {
      console.log(i);
  }
}

//Functions
function happyBirthday(name, age){
  console.log("Happy birthday to you");
  console.log("Happy birthday to you");
  console.log(`Happy birthday dear ${name}`);
  console.log("Happy birthday to you");
  console.log(`You are ${age} years old`);
}

happyBirthday("Snowden", 26);
happyBirthday("Tugy", 30);

//add two numbers
function addTwoNumbers(x ,y){
  return x + y
}
console.log(addTwoNumbers(2, 6));
console.log(addTwoNumbers(10, 455));

//multiply
function multiply(a, b){
  return a * b;
}
console.log(multiply(2, 5));
console.log(multiply(200, 0));

//subtract
function subtract(c, d){
  return c - d;
}
console.log(subtract(5, 10));
console.log(subtract(19, 8));

//divide
function divide(e ,f){
  return e / f;
}
console.log(divide(4, 2));
console.log(divide(8, 20));

// Even or odd
function even(number){
 if (number % 2 === 0){
  return `${number} is an even number.`
 } else {
  return `${number} is an odd number.`
 }
}
console.log(even(2));
console.log(even(19));
console.log(even(22));

function isValidEmail(email){
  if(email.includes("@")){
    return `${email} is a valid email.`
  } else{
    return `${email} is not a valid email.`
  }
}
console.log(isValidEmail("snowden@mukui.com"));
console.log(isValidEmail("aboboyaAtgmail.com"));