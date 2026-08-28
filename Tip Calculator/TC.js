let billAmount;
let tipPercent;

document.getElementById("calc").onclick = function(){
  if (document.getElementById("bill-amt").value === "" && document.getElementById("tip-per").value === "") {
    document.getElementById("text").textContent = `Error: enter the Bill Amount and the Tip Percent.`;
    document.getElementById("text").style.color = "brown";
  } else if(document.getElementById("bill-amt").value === ""){
      document.getElementById("text").textContent = `Error: please enter the bill amount.`;
      document.getElementById("text").style.color = "black";
  } else if (document.getElementById("tip-per").value === "") {
    document.getElementById("text").textContent = `Error: please enter the tip percentage.`;
    document.getElementById("text").style.color = "red";
  } else {
    billAmount = document.getElementById("bill-amt").value;
    billAmount = Number(billAmount);
    tipPercent = document.getElementById("tip-per").value / 100;
    tipPercent = Number(tipPercent);

    if (isNaN(billAmount) || isNaN(tipPercent)) {
      document.getElementById("text").textContent = `Error: please enter valid numbers.`;
      document.getElementById("text").style.color = "firebrick";
    } else {
      let result = billAmount * tipPercent;
      document.getElementById("text").textContent = `Your tip is GHS ${result}.`;
      document.getElementById("text").style.color = "green";

      let total = billAmount + result;
      document.getElementById("total").textContent = `Your total is GHS ${total}.`;
      document.getElementById("total").style.color = `blue`;
    }
  }
}
