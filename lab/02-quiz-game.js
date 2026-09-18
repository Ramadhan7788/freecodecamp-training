const questions = [
  {
    "category": "css",
    "question": "What is the function of CSS?",
    "choices": [
      "Structuring web pages",
      "Styling and laying out web pages",
      "Managing server-side databases"
    ],
    "answer": "Styling and laying out web pages"
  },
  {
    "category": "css",
    "question": "Which CSS property is used to change the background color?",
    "choices": ["color", "background-color", "background-image"],
    "answer": "background-color"
  },
  {
    "category": "css",
    "question": "Which of the following is a relative unit in CSS?",
    "choices": ["px", "pt", "em"],
    "answer": "em"
  },
  {
    "category": "css",
    "question": "Which CSS property is used to set the space inside an element (between content and border)?",
    "choices": ["padding", "border-spacing", "indent"],
    "answer": "padding"
  },
  {
    "category": "css",
    "question": "Which CSS property is used to make an element flexible (Flexbox)?",
    "choices": ["display: flexbox", "display: flex", "display: block"],
    "answer": "display: flex"
  }
];

let randomQuestion = {};
let computerChoice = '';

const randomIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
};

const getRandomQuestion = function (arr) {
    randomQuestion = arr[randomIndex(arr)];
    return randomQuestion;
};

const getRandomComputerChoice = function (arr) {
    computerChoice = arr[randomIndex(arr)];
    
    return computerChoice;
};

const getResult = function (questionObj, cmpChoice) {
    
    if (questionObj.answer === cmpChoice) {
        return `The computer's choice is correct!`;
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
};

getRandomQuestion(questions);
getRandomComputerChoice(randomQuestion.choices);
console.log(getResult(randomQuestion, computerChoice));