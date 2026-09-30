let score = 65;
let bonus = 5;
let loan = 3;
let finalScore = score + bonus - loan;
let grade;

switch (grade) {
    case finalScore >= 90:
        grade = "A";
        break;
    case finalScore >= 80:
        grade = "B";
        break;
    case finalScore >= 70:
        grade = "C";
        break;
    case finalScore >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}
console.log(finalScore);
console.log(grade);