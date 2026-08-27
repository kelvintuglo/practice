let billAmount;
let tipPercent;

document.getElementById("calc").onclick = function(){
  if (document.getElementById("bill-amt").value === "" || document.getElementById("tip-per").value === "") {
    document.getElementById("text").textContent = `Error: enter the bill amount and the tip percent.`;
    document.getElementById("text").style.color = "red";
  } else if(dfj){
      //figure this shit out man
  } else {
    billAmount = document.getElementById("bill-amt").value;
    billAmount = Number(billAmount);
    tipPercent = document.getElementById("tip-per").value / 100;
    tipPercent = Number(tipPercent);

    if (isNaN(billAmount) || isNaN(tipPercent)) {
      document.getElementById("text").textContent = `Please enter valid numbers.`;
      document.getElementById("text").style.color = "black";
    } else {
      let result = billAmount * tipPercent;
      document.getElementById("text").textContent = `Your tip is GHS ${result}`;
      document.getElementById("text").style.color = "green";
    }
  }
  // let total = billAmount + result;
  // document.getElementById("text").textContent = `Your total is GHS ${total}`;
  // document.getElementById("text").style.color = `blue`;
}

//1.09.02. timestamp