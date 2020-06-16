// create questions as objects\
var questions = [
    {
        title: "Example Question 1:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 1"
    },
    {
        title: "Example Question 2:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 3"
    },
    {
        title: "Example Question 3:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 2"
    },
    {
        title: "Example Question 4:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 3"
    },
    {
        title: "Example Question 5:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 4"
    }
];

// hook container element
var containerEl = document.querySelector(".container");

// hook timer element
var timerDisplay = document.querySelector(".timer");

// create dynamic H1 tag
var startText = document.createElement("h1");

// create dynamic start button
var startBtn = document.createElement("button");

// create dynamic p tag to display correct or incorrect
var questionText = document.createElement("p");

const answers = []

// declare global variables
var timer = 60;
var i = 0;

//Display Initial page
function openingPage() {
    startText.textContent = "Welcome to the quiz!";
    startBtn.textContent = "Start Here";
    containerEl.appendChild(startText);
    containerEl.appendChild(startBtn);
}

//____________________FUNCTIONS____________________//

//FUNCTION FOR WHEN START BUTTON IS CLICKED//
function startQuiz() {

    //calls showTimer function
    showTimer();

    //displays questions
    nextQuestion();
}


//showTimer FUNCTION CREATED//
function showTimer() {

    //text content
    timerDisplay.textContent = timer;

    // decreses interval by 1 per second and clears it when the timer runs out
    var timeInterval = setInterval(function () {
        timer--;
        timerDisplay.textContent = timer;
        if (timer === 0) {
            clearInterval(timeInterval)
        }
    }, 1000)
}
// nextQuestion FUNCTION CREATED
function nextQuestion() {
    // create current question variable
    var currentQuestion = questions[i];
    // then empty question container
    containerEl.textContent = "";
    // add current question title to display
    questionText.textContent = currentQuestion.title;
    // append question to container
    containerEl.appendChild(questionText);
    //variable for correct answer
    var answerDiv = document.createElement("div");
    // Loop for remaining questions
    for (let i = 0; i < currentQuestion.choices.length; i++) {

        //title: "Example Question 1:",
        //choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        // answer: "Choice 1"

        //if current answer is correct
        var answerBtn = document.createElement("button");
        answerBtn.classList.add("choiceBtn");
        answerBtn.textContent = currentQuestion.choices[i];
        if (currentQuestion.choices[i] === currentQuestion.answer) {
            answerBtn.classList.add("correct");
        }
        answerDiv.appendChild(answerBtn);
    }
    containerEl.appendChild(answerDiv);
    i++
};


// checkAnswer FUNCTION CREATED
function checkAnswer(event) {

    //if correct division line appears p tag will display correct and i adds
    console.log(`event target classes: ${event.target.classList}`)
 
    if (event.target.classList.contains("correct")) {
        
        

        nextQuestion();
        // ..........if answered incorrectly....................
    }

}

//if correct display correct + go to next question


//if incorrect display incorrect + subtract 2 seconds from timer + go to next


//Stop Quiz if timer runs out or all questions are complete

//display results



//********___________________CLICKS________________________******** //

//START QUIZ BUTTON CLICK
startBtn.addEventListener("click", startQuiz);
//CLICK THAT CHECKS ANSWER FOR CORRECTNESS
document.addEventListener("click", checkAnswer);


//CALLS OPENING PAGE TO DISPLAY
openingPage()