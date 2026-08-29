const max = 6;
const min = 1;
let randomNum1;
let randomNum2;
let randomNum3;


document.getElementById("myBtn").onclick = function(){
  randomNum1 = Math.floor(Math.random() * max) + min;
  document.getElementById("label1").textContent = randomNum1;

  randomNum2 = Math.floor(Math.random() * max) + min;
  document.getElementById("label2").textContent = randomNum2;

  randomNum3 = Math.floor(Math.random() * max) + min;
  document.getElementById("label3").textContent = randomNum3;
}