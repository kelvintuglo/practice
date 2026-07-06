const num = [1, 2, 3];
num.push(4);
console.log(num);

const poppednum = num.pop();
console.log(poppednum);
console.log(num);

const _names = ["esi", "kojo", "ama"];
_names.push("yaw");
console.log(_names);
console.log(_names.length);
_names.pop();
console.log(_names);
console.log(_names.length);

const shoes = ["vans", "converse", "air force", "jordans"];
shoes.unshift("birkenstocks", "new balance");
console.log(shoes);

shoes.shift("birkenstocks");
console.log(shoes);

//Array Destructuring
const cars = ["bmw", "lamborghini", "ferrari", "toyota"];
const [firstCar, secondCar, thirdCar] = cars;
console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);

const [myCar, , herCar] = cars;
console.log(myCar);
console.log(herCar);

const [theCar, thatCar, ,] = cars;
console.log(theCar);
console.log(thatCar);

const [a, b, c, d, e = "ford"] = cars;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const [whip, guap, ...rest] = cars;
console.log(whip);
console.log(guap);
console.log(rest);

const str = "hello";
const splitStr = str.split("");
console.log(splitStr);


const msg = "hello, how are you doing";
const splitMsg = msg.split(" ");
console.log(splitMsg);

const letter = "one-dimensional";
const splitLetter = letter.split("-");
console.log(splitLetter);

const arr = "two-dimensional arrays are so fun dude";
const splitArr = arr.split("-");
console.log(splitArr);

let Arr = [1, 2, 3, 4, 5];
let removed = Arr.splice(1, 2);
console.log(Arr, removed);

let _arr = ["a", "b", "c"];
console.log(_arr.indexOf("d"));
console.log(_arr.includes("d"));

let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(nums, doubled);

//Arrays mini project
let students = ["Ama", "Kwame", "Yaw", "Efua"];
let grades = [78, 65, 90, 55];

//Roster Management
function addStudent (name, grade) {
  students.push();
  grades.push();

  return `Student name: ${students.push()}.
  Grade: ${grades.push()}.`;
  console.log(students.push());
  console.log(grades.push());
}
console.log(addStudent("Kojo", 89));

function addPriority (name, grade) {
  students.unshift();
  grades.unshift();

  return `Student's name: ${students.unshift()}.
  Grade: ${grades.unshift()}`;
}
console.log(addPriority("Adjoa", 30));

function removeLastStudent () {
  students.pop();
  grades.pop();

  return `Removed name: ${students.pop()}
  Removed grade: ${grades.pop()}`;
}
console.log(removeLastStudent());

function removeFirstStudent () {
  students.shift();
  grades.shift();

  return `Removed student: ${students.shift()}
  Removed grade: ${grades.shift()}`;
}
console.log(removeFirstStudent());















//Searching Index
function isEnrolled () {

}