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

// create dynamic p tag to display and switch between questions
var questionText = document.createElement("p");

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
    //-----------------todo-create nextQuestion function-------/
    nextQuestion();



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

        // nextQuestion FUNCTION CREATED
        function nextQuestion() {
            // create cureent question variable
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
            
                var answerBtn = document.createElement("button");
                answerBtn.classList.add("choiceBtn");
                answerBtn.textContent = currentQuestion.choices[i];
                answerDiv.appendChild(answerBtn);
            }
            containerEl.appendChild(answerDiv);


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