let test1;
let test2;
let examScore;

function clearResults(){
  document.getElementById("total-score").textContent = "";
  document.getElementById("remarks").textContent = "";
}

document.getElementById("submit").onclick = function(){
  if (document.getElementById("test1").value === "" && document.getElementById("test2").value === "" && document.getElementById("exam-score").value === "") {
    document.getElementById("text").textContent = "Error: please enter the scores for test 1, test 2 and the exam score.";
    document.getElementById("text").style.color = "red";
    clearResults();
  } else if (document.getElementById("test1").value === "") {
    document.getElementById("text").textContent = "Error: please enter test 1 scores";
    document.getElementById("text").style.color = "red";
    clearResults();
  }else if (document.getElementById("test2").value === "") {
    document.getElementById("text").textContent = "Error: please enter test 2 scores";
    document.getElementById("text").style.color = "red";
    clearResults();
  } else if (document.getElementById("exam-score").value === "") {
    document.getElementById("text").textContent = "Error: please enter exam scores";
    document.getElementById("text").style.color = "red";
    clearResults();
  } else {
    test1 = document.getElementById("test1").value;
    test1 = Number(test1);

    test2 = document.getElementById("test2").value;
    test2 = Number(test2);

    examScore = document.getElementById("exam-score").value;
    examScore = Number(examScore);

    if (isNaN(test1) && isNaN(test2) && isNaN(examScore)) {
      document.getElementById("text").textContent = "Error: please enter valid numbers.";
      document.getElementById("text").style.color = "brown";
      clearResults();
    } else if (isNaN(test1)) {
      document.getElementById("text").textContent = "Error: please enter valid numbers for test 1.";
      document.getElementById("text").style.color = "brown";
      clearResults();
    } else if (isNaN(test2)) {
      document.getElementById("text").textContent = "Error: please enter valid numbers for test 2.";
      document.getElementById("text").style.color = "brown";
      clearResults();
    } else if (isNaN(examScore)) {
      document.getElementById("text").textContent = "Error: please enter valid numbers for exam score.";
      document.getElementById("text").style.color = "brown";
      clearResults();
    } else if (test1 > 20 || test2 > 20) {
      document.getElementById("text").textContent = "Error: test score can't be above 20.";
      document.getElementById("text").style.color = "red";
      clearResults();
    } else if (test1 < 0 || test2 < 0) {
      document.getElementById("text").textContent = "Error: test score can't be below 0";
      document.getElementById("text").style.color = "red";
      clearResults();
    } else if (examScore < 0) {
      document.getElementById("text").textContent = "Error: exam score can't be below 0";
      document.getElementById("text").style.color = "red";
      clearResults();
    } else if (examScore > 100) {
      document.getElementById("text").textContent = "Error: exam score can't be above 100";
      document.getElementById("text").style.color = "red";
      clearResults();
    } else {
      examScore = (examScore/100)*60;
      let totalScore = Math.floor(test1 + test2 + examScore);
      
      //input totalScore somewhere here or something.
      document.getElementById("total-score").textContent = `Total Score: ${totalScore}`;
      document.getElementById("total-score").style.color = "purple";

      if (totalScore >= 80) {
        document.getElementById("text").textContent = "Grade: A";
        document.getElementById("text").style.color = "navy";
        document.getElementById("remarks").textContent = "Remarks: EXCELLENT.";
      } else if (totalScore >= 75) {
        document.getElementById("text").textContent = "Grade: B+";
        document.getElementById("text").style.color = "navy";
        document.getElementById("remarks").textContent = "Remarks: VERY GOOD.";
      } else if (totalScore >= 70) {
        document.getElementById("text").textContent = "Grade: B";
        document.getElementById("text").style.color = "navy";
        document.getElementById("remarks").textContent = "Remarks: GOOD.";
      } else if (totalScore >= 65) {
        document.getElementById("text").textContent = "Grade: C+";
        document.getElementById("text").style.color = "navy";
        document.getElementById("remarks").textContent = "Remarks: FAIRLY GOOD.";
      } else if (totalScore >= 60) {
        document.getElementById("text").textContent = "Grade: C";
        document.getElementById("text").style.color = "navy";
        document.getElementById("remarks").textContent = "Remarks: AVERAGE.";
      } else if (totalScore >= 55) {
        document.getElementById("text").textContent = "Grade: D+";
        document.getElementById("text").style.color = "navy";
        document.getElementById("remarks").textContent = "Remarks: AVERAGE.";
      } else if (totalScore >= 50) {
        document.getElementById("text").textContent = "Grade: D";
        document.getElementById("text").style.color = "navy";
        document.getElementById("remarks").textContent = "Remarks: PASS";
      } else {
        document.getElementById("text").textContent = "Grade: E";
        document.getElementById("text").style.color = "red";
        document.getElementById("remarks").textContent = "Remarks: FAIL";
      }
    }
  }
}