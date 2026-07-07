const person = {
  name: "Kelvin",
  age: 26,
  job: "Teacher",
  hobby: "Basketball",
}

console.log(person.name);
console.log(person.age);
console.log(person["job"]);
console.log(person["hobby"]);

const beloved = {
  name: "Ella",
  age: 22,
  job: "Bank owner",
  hobby: "Chatting with me",
}

console.log(beloved.name);
console.log(beloved.age);
console.log(beloved["job"]);
console.log(beloved["hobby"]);

delete beloved.job;
console.log(beloved);

//hasOwnProperty()
console.log(beloved.hasOwnProperty("name"));
console.log(beloved.hasOwnProperty("food"));
console.log(beloved.hasOwnProperty("age"));
console.log(beloved.hasOwnProperty("car"));

//Object.hasOwn()
console.log(Object.hasOwn(beloved, "name"));
console.log(Object.hasOwn(beloved, "house"));
console.log(Object.hasOwn(beloved, "hobby"));
console.log(Object.hasOwn(beloved, "sport"));

const goat = {
  name: "Lionel Messi",
  age: 39,
  country: "Argentina",
  ballonDor: 8,
  contender: null,
  critics: undefined,
  haters: 0,
}
console.log(goat.name);
console.log(goat["ballonDor"]);
console.log(goat.age);
console.log(goat["country"]);
console.log(goat.hasOwnProperty("name"));
console.log(Object.hasOwn(goat, "ballonDor")); //true
console.log(Object.hasOwn(goat, "contender")); //true
console.log(Object.hasOwn(goat, "critics")); //true
console.log(Object.hasOwn(goat, "haters")); //true

//In operator
const appliances = {
  name: "Fridge",
  cost: 1000,
  years: 3,
}

console.log(appliances.name); //Fridge
console.log(appliances.hasOwnProperty("cost")); //true
console.log(Object.hasOwn(appliances, "height")); //false
console.log("years" in appliances); //true
console.log("configuration" in appliances); //false


//Working with nested objects and arrays

//Nested object
const mandem = {
  name: "Kelvin",
  age: 26,
  contact: {
    email: "asokwanana909@gmail.com",
    phone: {
      home: +999-894-234-7865,
      work: +234-777-234-9201,
    }
  }
};

console.log(mandem.name);