function getText(message) {
  let input = prompt(message);
  while (input === null || input.trim() === "") {
    input = prompt("Cannot be empty. " + message);
  }
  return input.trim();
}

function getMark(message) {
  let input = prompt(message);
  while (
    input === null ||
    input.trim() === "" ||
    isNaN(Number(input)) ||
    Number(input) < 0 ||
    Number(input) > 100
  ) {
    input = prompt("Invalid mark (0-100). " + message);
  }
  return Number(input);
}

function calculateAverage(m1, m2, m3)
{
    return (m1+m2+m3)/3;
}

function calculateGrade(average) {
    if (average >= 80) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else if (average >= 50) {
        return "D";
    } else {
        return "E";
    }
}

let studentName=getText("Enter your full names: ");
let course=getText("Enter your course: ");
let marks1=getMark("Enter Marks for Mathematics: ");
let marks2=getMark("Enter Marks for Science: ");
let marks3=getMark("Enter Marks for Computer Studies: ");

let average=calculateAverage(marks1,marks2,marks3);
let grade=calculateGrade(average);

console.log("Stdents Report");
console.log(`Name:  ${studentName}`);
console.log(`Course: ${course}`);
console.log(`Marks: ${marks1}, ${marks2}, ${marks3}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Grade: ${grade}`);

alert(`${studentName} (${course})\nAverage: ${average.toFixed(2)}\nGrade: ${grade}`);
