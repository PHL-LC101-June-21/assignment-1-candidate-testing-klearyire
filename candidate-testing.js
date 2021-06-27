const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let candidateAnswers = [];
let correctGrade = [];


let questions =  ["Who was the first American woman in space? ", "True or false: 5 kilometers == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.question("What is your name? ");
  console.log(`Candidate Name: ${candidateName}` + "\n");
}

 // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestions() {

  for (let i = 0; i < questions.length; i++)  {
  candidateAnswers.push(input.question(questions[i]));
}
}




  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //


function gradeQuiz(candidateAnswers) {
  for (let i = 0; i < questions.length; i++) {
console.log(`${questions[i]}
Your answer: ${candidateAnswers[i]}
Correct answer: ${correctAnswers[i]}
`);
  }

  for (let i = 0; i < questions.length; i++) {
    if (JSON.stringify(candidateAnswers[i].toLowerCase()) === JSON.stringify(correctAnswers[i].toLowerCase())) {
    correctGrade.push("x");
    }
  }
  
  

  let grade = (correctGrade.length / 5) * 100;
  console.log(`>>> Overall Grade: ${grade}% (${correctGrade.length} of 5 responses correct) <<<`);
  if (grade < 80) {
    console.log(`>>> Status: Failed <<<`);
  } else {
    console.log(`>>> Status: Passed <<<`);
  }
  

  return grade;
}




function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //

  askQuestions();
  gradeQuiz(this.candidateAnswers);
}




// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};