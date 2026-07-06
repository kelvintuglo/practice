let temperature = 33;

if (temperature > 35) {
  console.log("It's too hot");
} else if (temperature > 20 && temperature < 35) {
  console.log("It's warm");
} else if (temperature < 20) {
  console.log("It's cold");
} else {
  console.log("Huh, temperature device not working");
}

let hasTicket = true;
let age = 22;

if (hasTicket && age >= 18) {
  console.log("Welcome in");
} else if (hasTicket && age < 18) {
  console.log("Sorry, adults only");
} else {
  console.log("No ticket, no entry");
}

const username = null;
const displayName = username ?? "Guest";

console.log(`welcome, ${displayName}`);

let score = 78;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
}else {
  console.log("F");
}

console.log(typeof score);

let loggedIn = true;
let userName;

if (loggedIn){
  console.log(`Welcome back, ${userName  ?? "Anonymous"}`);
}else {
  console.log("Please log in to continue");
}

let hour = Math.floor(Math.random() * 24);

switch (hour) {
  case 5:
  case 6:
  case 7:
  case 8:
    console.log("Good morning");
    break;
  case 12:
  case 13:
  case 14:
    console.log("Good afternoon");
    break;
  case 18:
  case 19:
  case 20:
    console.log("Good evening");
  break;
  default:
    console.log("Good night");
}

const fullName = "Ella Sadaya";

console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

const sentence = "  JavaScript is awesome  ";

console.log(sentence.trim());
console.log(sentence.includes("awesome"));
console.log(sentence.replace("awesome", "powerful"));

const price = "49";
const priceAsNumber = Number(price);
console.log(priceAsNumber + 10);
console.log(typeof priceAsNumber);

const num1 = 15;
const num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let cartTotal = "120";
cartTotal = Number(cartTotal);
let discount = 15;
let isMember = true;

if (isMember) {
  let totalAfter = cartTotal - discount;
  console.log(`Total after discount: ${totalAfter}`);
} else {
  console.log(`No discount applied. Total: ${cartTotal}`);
}