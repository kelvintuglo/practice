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
      home: "+999-894-234-7865",
      work: "+234-777-234-9201",
    }
  }
};

console.log(mandem.name);
console.log(mandem.age);
console.log(mandem.contact);
console.log(mandem.contact.email);
console.log(mandem.contact.phone.work);
console.log(mandem["contact"]["phone"]["home"]);

//Nested Array objects
const students = [
  {name: "Yaw", age: 14, class: "Basic 4", score: 89},
  {name: "Ama", age: 14, class: "Basic 4", score: 68},
  {name: "Adjoa", age: 13, class: "Basic 4", score: 77},
];
// //full array
console.log(students);

//The individual objects in the array
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

//Specific properties in the objects in the array
console.log(students[0].name);
console.log(students[1].name);
console.log(students[2].name);

console.log(students[0].score);
console.log(students[1].score);
console.log(students[2].score);

const resident = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};

console.log(resident);

console.log(resident.addresses);
console.log(resident.addresses[0]);
console.log(resident.addresses[1]);

console.log(resident.addresses[0].type);
console.log(resident.addresses[1].type);
console.log(resident.addresses[0].street);
console.log(resident.addresses[1].street);

//The object method
//The Object() method can be used with new to store values.
//new Object()

const profileName = "D3f4ult";
const profileName1 = Object(profileName);
console.log(profileName1);
console.log(typeof profileName1);

//JSON
//object
const bob ={
  name: "Kelvin",
  age: 46,
  working: false,
  hobbies: ["football", "COD", "hanging out with friends"]
};

console.log(bob);
console.log(bob.name);
console.log(bob.age);
console.log(bob.working);
console.log(bob.hobbies);

bob.hobbies[3] = "fishing";
console.log(bob.hobbies);

console.log(typeof bob);

//This here turns the bob object into a JSON string
console.log(JSON.stringify(bob));

//Object Revision
const laptop = {
  brand: "Hp",
  model: "Elitebook 8460p",
  os: "Ubuntu 24.04 LTS",
  specs: {
    processor: "Intel core i5 2nd Gen @3.3000GHz",
    ram: 16,
    storage: "500 HDD",
  }
}

console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.os);
console.log(laptop.specs);
console.log(laptop.specs.processor);
console.log(laptop.specs.ram);
console.log(laptop.specs.storage);