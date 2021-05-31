var questions = [
    {
      question: "What does CPU stand for?",
      answers : {
          a :"Central Process Unit",
          b: "Central Processing Unit",
          c: "Computer Personal Unit",
          d: "Central Processor Unit",
      },
      correctAnswer: "b"
    },
    {
      question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      answers :{
          a: "Public",
          b: "Static",
          c: "Final",
          d: "Private"
      },
      correctAnswer: "c"
    },
    {
      question: "The logo for Snapchat is a Bell.",
      answers: {
          a: "False",
          b: "True"
      },
      correctAnswer: "a"
    },
    {
      question: "Pointers were not used in the original C programming language; they were added later on in C++.",
      answers: {
          a: "True",
          b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the most preferred image format used for logos in the Wikimedia database?",
      answers: {
          a: ".png",
          b: ".jpeg",
          c: ".svg",
          d: ".gif"
      },
      correctAnswer: "c"
    },
    {
      question: "In web design, what does CSS stand for?",
      answers: {
          a: "Cascading Style Sheet",
          b: "Counter Strike: Source",
          c: "Computer Style Sheet",
          d: "Corrective Style Sheet"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the code name for the mobile operating system Android 7.0?",
      answers: {
        a: "Ice Cream Sandwich",
        b: "Nougat",
        c: "Marshmallow",
        d: "Jelly Bean"
      },
      correctAnswer: "b"
    },
    {
      question: "On Twitter, what is the character limit for a Tweet?",
      answers: {
        a: "100",
        b: "160",
        c: "120",
        d: "140"
    },
      correctAnswer: "d"
    },
    {
      question: "Linux was first created as an alternative to Windows XP.",
      answers: {
        a: "False",
        b: "True"
    },
      correctAnswer: "a"
    },
    {
      question: "Which programming language shares its name with an island in Indonesia?",
      answers: {
        a: "Python",
        b: "C",
        c: "Java",
        d: "Jakarta"
    }, 
      correctAnswer: "c"
    },
  ];

const quizCard = document.getElementById("quiz-card")
const questionContainer = document.getElementById("question")
const resultContainer = document.getElementById("result")
const submitButton = document.getElementsByTagName("button")[0]

const buildQuiz = function(){
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers){
            answers.push(
                `<label>
                   <input type="radio" name="question${questionNumber}" value="${letter}">
                   ${letter} :
                   ${currentQuestion.answers[letter]}
                 </label>`
            );
        }
        output.push(
            `<div class="slide">
            <div class="questions">${currentQuestion.question}</div>
            <div class="answer">${answers.join("")}</div>
            </div>`
        );
    }
)
quizCard.innerHTML = output.join("")
}

showSlide(currentSlide)


const showResults = function(){

}

submitButton.addEventListener('click', showResults)

  window.onload = function () { buildQuiz()
    // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
    // HINT: for each question, create a container with the "question"
    // create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
    // when EVERY question has an answer (google for how to get a value from a radio button with JS)
    // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
    // Display first question with a title + radio button
    // when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.
  };

  // HOW TO calculate the result
  // You can do it in 2 ways:
  // If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
  // If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer