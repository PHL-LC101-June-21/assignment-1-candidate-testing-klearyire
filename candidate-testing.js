const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //


// TODO 1.1a: Define candidateName // 
let candidateName = input.question("What is your name? ");


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ["Who was the first American woman in space?", "True or false: 5 kilometers == 5000 meters?", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS?"];
let correctAnswer = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


let correctAnswer1 = "Sally Ride";
let question1 = input.question("\nWho was the first American woman in space? ");
if (correctAnswer1 == question1) {
  console.log("Correct!");
} else {
  console.log(`Incorrect! The correct answer is ${correctAnswer1}`);
}


let correctAnswer2 = "true";
let question2 = input.question("\nTrue or false: 5 kilometers == 5000 meters? ");
if (correctAnswer2 == question2.toLowerCase()) {
  console.log("Correct!");
} else {
  console.log(`Incorrect! The correct answer is ${correctAnswer2}`);
}


let correctAnswer3 = "40";
let question3 = input.question("\n(5 + 3)/2 * 10 = ? ");
if (correctAnswer3 == question3) {
  console.log("Correct!");
} else {
  console.log(`Incorrect! The correct answer is  ${correctAnswer3}`);
}


let correctAnswer4 = "Trajectory";
let question4 = input.question("\nGiven the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
if (correctAnswer4 == question4) {
  console.log("Correct!");
} else {
  console.log(`Incorrect! The correct answer is ${correctAnswer4}`);
}


let correctAnswer5 = "3";
let question5 = input.question("\nWhat is the minimum crew size for the ISS? ");
if (correctAnswer5 == question5) {
  console.log("Correct!");
} else {
  console.log(`Incorrect! The correct answer is ${correctAnswer5}`);
}


//Questions: Who was the first American woman in space? 	"Sally Ride", True or false: 5 kilometer == 5000 meters? 	"true", (5 + 3)/2 * 10 = ? 	"40", Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? 	"Trajectory", What is the minimum crew size for the ISS? 	"3"



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
}



function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
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