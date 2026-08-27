const currentYear = 2026;
let age;
let birthYear;

document.getElementById("submit").onclick = function(){
  if (document.getElementById("age").value === "") {
    document.getElementById("p").textContent = `Please enter your age.`;
    document.getElementById("p").style.color = "black";
  } else {
    age = document.getElementById("age").value;
    age = Number(age);
    if (isNaN(age)) {
      document.getElementById("p").textContent = `Please enter a valid number.`;
      document.getElementById("p").style.color = "red";
    } else {
      birthYear = currentYear - age;
      document.getElementById("p").textContent = `Your birth year is ${birthYear}.`;
      document.getElementById("p").style.color = "green";
    }
  }
}

