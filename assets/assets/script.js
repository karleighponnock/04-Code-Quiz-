// create questions as objects\
var questions = [
    {
        title: "This is the first question:",
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

var resultsPage = document.querySelector(".results");

var highScores = document.querySelector(".highScores");

var allScores = document.querySelector(".allScores");

// declare global variables
var timer = 60;
var qindex = 0;
var timerId;



//Display Initial page
function openingPage() {
    startText.textContent = "Welcome to the quiz!";
    startText.classList.add("startText");
    startBtn.textContent = "Start Here";
    startBtn.classList.add("startBtn");
    containerEl.appendChild(startText);
    containerEl.appendChild(startBtn);
}

//____________________FUNCTIONS____________________//

//FUNCTION FOR WHEN START BUTTON IS CLICKED//
function startQuiz() {
    qindex = 0;
    //calls showTimer function
    showTimer();

    //displays questions
    if (qindex < 5) {
        nextQuestion();
    }

    if (qindex === 5) {
        document.querySelector(".container").innerHTML = ""
        document.querySelector(".timer").innerHTML = ""
        var scoresTitle = document.createElement("p").innerHTML = "High Scores!"
        var highScores = document.createElement("input")
        document.querySelector(".results").appendChild(p)
    }

}


//showTimer FUNCTION CREATED//
function showTimer() {

    //text content
    timerDisplay.textContent = timer;

    // decreses interval by 1 per second and clears it when the timer runs out
    timerId = setInterval(function () {
        timer--;
        timerDisplay.textContent = timer;
        if (timer === 0) {
            function results(timer) {
                var grade = document.createElement("p");
                grade.textContent = message;
                containerEl.append(grade);
                var resultTimer = setTimeout(function () {
                    grade.textContent = "";
                })
            }
            clearInterval(timerId)
        } else if (qindex > 4) {
            clearInterval(timerId)
            showHighscores();
        }
    }, 1000)
}
// nextQuestion FUNCTION CREATED

function nextQuestion() {
    console.log("qindex: ", qindex)
    // create current question variable
    var currentQuestion = questions[qindex];
    // then empty question container
    containerEl.textContent = "";
    var questionText = document.createElement("p");
    // add current question title to display
    questionText.textContent = currentQuestion.title;
    console.log(currentQuestion.title);
    // append question to container
    containerEl.appendChild(questionText);
    //variable for correct answer
    var answerDiv = document.createElement("div");
    // Loop for remaining questions
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        //create buttons for answers
        var answerBtn = document.createElement("button");
        answerBtn.classList.add("choiceBtn");
        answerBtn.addEventListener("click", checkAnswer);
        answerBtn.textContent = currentQuestion.choices[i];
        answerDiv.appendChild(answerBtn);
    }
    containerEl.appendChild(answerDiv);
};


// checkAnswer FUNCTION CREATED
function checkAnswer(event) {

    //if correct division line appears p tag will display correct and i adds
    console.log(`button text ${event.target.textContent}`);
    console.log(`actual answer ${questions[qindex].answer}`);

    if (qindex < 5) {
        if (event.target.textContent === questions[qindex].answer) {
            qindex++;
            nextQuestion();
            writeMessage("Correct!");
        } else {
            qindex++;
            timer -= 5;
            nextQuestion();
            writeMessage("Incorrect!");
        }
    }
}

function writeMessage(message) {
    var grade = document.createElement("p");
    grade.textContent = message;
    containerEl.append(grade);
    var resultTimer = setTimeout(function () {
        grade.textContent = "";
    }, 3000)

}

function clear() {
    if (qindex > 5 || timer === 0) {
        clearInterval(timerId);
        console.log(timer);
    }
}

function showHighscores() {

    highScores.style.visibility = "visible";
    document.querySelector(".btn").addEventListener("click", function () {
        var name = document.querySelector(".input").value;
        highScores.innerHTML = " ";
        timerDisplay.innerHTML = " ";
        allScores.style.visibility = "visible";

        var tr = document.createElement("tr");
        var tdName = document.createElement("td")
        tdName.textContent = name;
        var tdScore = document.createElement("td");
        tdScore.textContent = timer;
        var table = document.querySelector(".table");
        tr.appendChild(tdName);
        tr.appendChild(tdScore)
        table.append(tr);

    })

}

timerDisplay.innerHTML = " ";

//if incorrect display incorrect + subtract 2 seconds from timer + go to next


//Stop Quiz if timer runs out or all questions are complete

//display results



//********___________________CLICKS________________________******** //

//START QUIZ BUTTON CLICK
startBtn.addEventListener("click", startQuiz);
//CLICK THAT CHECKS ANSWER FOR CORRECTNESS
console.log(document.querySelector(".choiceBtn"));



//CALLS OPENING PAGE TO DISPLAY
openingPage()