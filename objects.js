// const person = {
//   name: "Ethan",
//   age: 26,
//   city: "Accra",
//   "1stlanguage": "Ewe",
// }

// console.log(person);

// //Dot Notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// // console.log(person.1stlanguage); can't be run because of the
// //invalid JS identifier.

// //Bracket Notation
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["city"]);
// console.log(person["1stlanguage"]); //dot notation can be used to
// //access properties with invalid JS identifiers.

// //hasOwnProperty()
// console.log(person.hasOwnProperty("name"));
// console.log(person.hasOwnProperty("city"));
// console.log(person.hasOwnProperty("1stlanguage"));



// //Object.hasOwn()
// console.log(Object.hasOwn(person, "name"));
// console.log(Object.hasOwn(person, "age"));
// console.log(Object.hasOwn(person, "1stlanguage"));

// //in
// console.log("name" in person);
// console.log("city" in person);
// console.log("age" in person);

// //undefined
// console.log(person.name == undefined);
// console.log(person.age !== undefined);
// console.log(person.city == undefined);



// //Accessing nested objects and arrays
// const personalInfo = {
//   name: "Akosua",
//   age: 35,
//   school: "KGB",
//   contact: {
//     email: "huhulahuhu@me.com",
//     phone: {
//       home: "123-456-7890",
//       work: "098-765-4321",
//     }
//   }
// }

// console.log(personalInfo);
// console.log(personalInfo.name);
// console.log(personalInfo["age"]);
// console.log(personalInfo["contact"]);
// console.log(personalInfo.contact.email);
// console.log(personalInfo.contact.phone.home);
// console.log(personalInfo.contact.phone.work);
// console.log(personalInfo["contact"]["phone"]["work"]);
// console.log(personalInfo["contact"]["phone"]["home"]);


// const kyc = {
//   name: "Ojoo",
//   age: 39,
//   work: "teacher",
//   addresses: [
//     {type: "home", street: "Asensu street", city: "Ashaiman"},
//     {type: "work", street: "Omanmu", city: "Mankessim"}
//   ]
// }
// console.log(kyc.addresses);
// console.log(kyc["addresses"]);
// console.log(kyc.addresses[0]);
// console.log(kyc.addresses[1]);
// console.log(kyc.addresses[0].street);
// console.log(kyc.addresses[1]["type"]);
// console.log(kyc["addresses"][0].city);
// console.log(kyc["addresses"][1]["city"]);

// //Primitive Data types
// //Immutable and are not changeable when created
// /* 
// 1. Number
// 2. Bigint
// 3. String
// 4. Boolean
// 5. Null
// 6. Undefined
// 7. Symbol
// */

// //Non-primitive Data types
// //Mutable and changeable when created
// /*
// 1. Objects
// 2. Arrays
// 3. Functions
// */

// //Objects Methods
// //These are invoked using the dot notation/
// const animal ={
//   type: "dog",
//   age: 2,
//   breed: "doberman pinscher",
//   name: "Rudy",
//   favFood: "steak",
//   sayHello: function() {
//     return `Hi, ${animal.name}. You're such a good boy.`;
//   },
//   animalBreed: function() {
//     return `${animal.name} is a ${animal.breed}.`;
//   },
//   animalFavFood: function(){
//     return `${animal.name}'s favourite food is ${animal.favFood}.`;
//   }
// };

// console.log(animal.sayHello());
// console.log(animal.animalBreed());
// console.log(animal.animalFavFood());

// //Object constructor
// //Used to create and initialize objects.
// //Object()
// //Invoked with the "new" keyword.

// const num = 26;
// const numObj = (Object(num));

// console.log(numObj);
// console.log(typeof numObj);

// const dudu = "aja";
// const dada = (Object(dudu));
// console.log(dada);
// console.log(typeof dada);

// const isGee = true;
// const aa = (Object(isGee));
// console.log(aa);

// const fifi = new Object(25);
// console.log(fifi);

// const fafa = ["baba", "bubu", "bebe"];
// const fifo = Object(fafa);
// console.log(fifo);

// const tutu = undefined;
// console.log(new Object(tutu));

// const tata = null;
// console.log(new Object(tata));

// const tyty = Object();
// console.log(new Object(tyty));

// //JSON
// const recon = {
//   name: "Antoinne",
//   age: 56,
//   favSports: "NFL",
//   carBrand: "BMW",
//   isFather: true,
//   childrenNum: 4,
// }

// console.log(recon);
// console.log(typeof recon);

// //JSON.stringigy() turns an object into a JSON string
// console.log(JSON.stringify(recon));

// //this only outputs the key-values that have been listed in the array.
// console.log(JSON.stringify(recon, ["name", "isFather", "carBrand"]));

// //the number defines the amount of spaces infront of the key-values in the object.
// console.log(JSON.stringify(recon, null, 20));

// //JSON.parse()
// //This turns a JSON string back into a JS object.
// const pipi = {
//   "school": "UCC",
//   "location": "Kumasi",
//   "area": "Ahwiaa",
//   "course": "IT/Maths",
//   "subjects": ["Database", "Intro to Abstract Algebra", "Programming"],
// }

// console.log(pipi);
// //convert the object into a string before parsing it
// const papa = JSON.stringify(pipi);
// console.log(JSON.parse(papa));

// //Optional chaining (?.)
// //Used when not sure a property exists or not in the object.
// const mani = {
//   location: "Abossey Okai",
//   address: {
//     street: "Asensu street",
//     town: "Ashaiman",
//     phone: {
//       work: "123-456-7890",
//       home: "098-765-4321"
//     },
//   }
// }

// console.log(mani.address.phone.home);
// console.log(mani?.address?.municipal);

// //Object Destructuring
// const ii = {
//   hometown: "Aboadze",
//   age: 45,
//   city: "Bawjiase",
// }

// const {hometown: hisHometown, age: hisAge, city: hisCity} = ii;

// console.log(hisHometown);
// console.log(hisAge);
// console.log(hisCity);

// const recipe = {
//   name: "Chocolate Cake",
//   ingredients: {
//     flour: "2 cups",
//     sugar: "1 cup"
//   }
// };

// console.log(recipe);
// const {ingredients: {flour}} = recipe;
// const {ingredients: {sugar}} = recipe;

// console.log(flour);
// console.log(sugar);

const questions = [
  {
    category: "Science",
    question: "What is the atomic number for Silicon?",
    choices: ["14", "08", "12"],
    answer: "14",
  },

  {
    category: "Science",
    question: "How many sub-atomic particles are in an atom?",
    choices: ["1", "3", "5"],
    answer: "3",
  },

  {
    category: "Science",
    question: "What is the last name of the electrons on the last shell of an atom?",
    choices: ["last electrons", "bottom electrons", "valence electrons"],
    answer: "valence electrons",
  },

  {
    category: "Science",
    question: "Which of the following is a noble or inert gas?",
    choices: ["Carbon", "Argon", "Neon"],
    answer: "Argon",
  },

  {
    category: "Science",
    question: "Which of the following elements fall under the octet rule?",
    choices: ["Hydrogen", "Lithium", "Helium"],
    answer: "Helium",
  }
];

function getRandomQuestion(){
  const genNum = Math.floor(Math.random() * 6);

  return questions[genNum]["question"];
}

console.log(getRandomQuestion(questions));