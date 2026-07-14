//Grading Scale
/*This is a template for what Ducora would use 
on the report cards of the student's*/
/*This one here here uses the graiding scale of 
universities in Ghana*/

function gradeScale(totalScore) {
  if (totalScore > 100){
    return `Invalid input. Total Score can't be above 100.`;
  } else if (totalScore < 0) {
    return `Invalid input. Total Score can't be a negative number.`;
  } else if (totalScore >= 80){
    return `Grade: A\nRemarks: Outstanding`;
  } else if(totalScore >= 75) {
    return `Grade: B+\nRemarks: Very Good`;
  } else if (totalScore >= 70) {
    return`Grade: B\nRemarks: Good`;
  } else if(totalScore >= 65) {
    return `Grade: C+\nRemarks: Fairly Good`;
  } else if(totalScore >= 60) {
    return `Grade: C\nRemarks: Average`;
  } else if(totalScore >= 55) {
    return `Grade: D+\nRemarks: Below Average`;
  } else if (totalScore >= 50) {
    return `Grade: D\nRemarks: Marginal Pass`;
  } else if (totalScore >= 45) {
    return `Grade: E\nRemarks: Unsatisfactory (Fail)`;
  } else {
    return `Grade: F\nRemarks: Bad (Fail)`;
  }
}

console.log(gradeScale(105));
console.log(gradeScale(-10));
console.log(gradeScale(88));
console.log(gradeScale(72));
console.log(gradeScale(67));
console.log(gradeScale(61));
console.log(gradeScale(58));
console.log(gradeScale(50));
console.log(gradeScale(47));
console.log(gradeScale(21));

/*One thing worth thinking about for later (not right now, just tuck it away): 
right now this function returns a string meant for console output. But eventually, 
on an actual report card in Ducora's UI, would you want the grade letter and the 
remarks as one blended string like this — or would it be more useful to return them 
as two separate pieces of data (like an object: { grade: "A", remarks: "Outstanding" }) 
so your frontend code can style or place them independently? You don't need to solve that 
now — just something to keep in your back pocket as you get further into objects.*/

//Switch Statement Variant.
/*Using switch(true) to evaluate range conditions since
switch usually doesn't work with ranges*/
function gradescale(totalscore) {
  switch (true) {
    case totalscore > 100:
      return `Invalid input. Total score must not be above 100.`;
      break;
    case totalscore < 0:
      return `Invalid input. Total score cannot be a negative number.`;
      break;
    case totalscore >= 80:
      return (`Grade: A\nRemarks: Outstanding`);
      break;
    case totalscore >= 75:
      return (`Grade: B+\nRemarks: Very Good`);
      break;
    case totalscore >= 70:
      return (`Grade: B\nRemarks: Good`);
      break;
    case totalscore >= 65:
      return (`Grade: C+\nRemarks: Fairly Good`);
      break;
    case totalscore >= 60:
      return (`Grade: C\nRemarks: Average`);
      break;
    case totalscore >= 55:
      return (`Grade: D+\nRemarks: Below Average`);
      break;
    case totalscore >= 50:
      return (`Grade: D\nRemarks: Marginal Pass`);
      break;
    case totalscore >= 45:
      return (`Grade: E\nRemarks: Unsatisfactory (Fail)`);
      break;
    default:
      return (`Grade: F\nRemarks: Bad (Fail)`);
  }
}

console.log(gradescale(105));
console.log(gradescale(-10));
console.log(gradescale(88));
console.log(gradescale(72));
console.log(gradescale(67));
console.log(gradescale(61));
console.log(gradescale(58));
console.log(gradescale(50));
console.log(gradescale(47));
console.log(gradescale(21));