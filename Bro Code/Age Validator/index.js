let age;

document.getElementById("submit").onclick = function(){
  age = document.getElementById("age").value;
  age = Number(age);

  if (age === "") {
    document.getElementById("age-result").textContent = "Please enter your age.";
    document.getElementById("age-result").style.color = "red";
  } else if (isNaN(age)) {
    document.getElementById("age-result").textContent = "Please enter a valid number for age.";
    document.getElementById("age-result").style.color = "red";
  } else if (age >= 100) {
    document.getElementById("age-result").textContent = "You're TOO OLD to enter this site.";
    document.getElementById("age-result").style.color = "firebrick";
  } else if (age == 0) {
    document.getElementById("age-result").textContent = "You can't enter. You were just born.";
    document.getElementById("age-result").style.color = "firebrick";
  } else if (age >= 18) {
    document.getElementById("age-result").textContent = "You're old enough to enter this site.";
    document.getElementById("age-result").style.color = "green";
  } else if (age < 0) {
    document.getElementById("age-result").textContent = "Your age can't be below 0";
    document.getElementById("age-result").style.color = "firebrick";
  }else {
    document.getElementById("age-result").textContent = "You must be 18+ to enter this site";
    document.getElementById("age-result").style.color = "firebrick";
  }
}