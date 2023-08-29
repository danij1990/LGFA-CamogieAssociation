// Array of quiz questions, each containing question text, options, and the index of the correct answer
let quizQuestions = [
    {
        question: "What year was ‘Camogie’ first played?",
        options: ["1891", "1936", "1904", "1899"],
        correctAnswer: 2
    },
    {
        question: "What province has the most Camogie clubs?",
        options: ["Connacht", "Leinster", "Munster", "Ulster"],
        correctAnswer: 1
    },
    {
        question: "The Camogie All-Stars gained official status in what year?",
        options: ["2004", "2006", "2003", "2005"],
        correctAnswer: 0
    },
    {
        question: "Galway had how many Camogie All-Stars in 2019?",
        options: ["6", "8", "9", "7"],
        correctAnswer: 3
    },
    {
        question: "The Ladies Gaelic Football Association was founded in what year?",
        options: ["1978", "1969", "1974", "1970"],
        correctAnswer: 2
    },
    {
        question: "The Senior LGFA All-Ireland Championship was won in 2001 by who?",
        options: ["Dublin", "Laois", "Offaly", "Waterford"],
        correctAnswer: 1
    },
    {
        question: "Westmeath last won the Intermediate LGFA All-Ireland Championship in what year?",
        options: ["2013", "2011", "2018", "2021"],
        correctAnswer: 3
    },
    {
        question: "The 2021 TG4 Ladies Football All-Star Team had how many Meath Players?",
        options: ["8", "9", "4", "7"],
        correctAnswer: 0
    },
    {
        question: "Who was the referee for the 2023 LGFA All-Ireland Senior Final?",
        options: ["Barry Nea (Westmeath)", "Shane Curley (Galway)", "Sean Stack (Clare)", "Gus Chapman (Sligo)"],
        correctAnswer: 1
    },
    {
        question: "What county has won the most Camogie All Irelands? (Post 2023 Final)",
        options: ["Dublin", "Galway", "Kilkenny", "Cork"],
        correctAnswer: 3
    }

];

// Get the HTML elements for question text and answer options
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer");
// Timer variables
var sec = 120;
var time = setInterval(quizTimer, 1000);



// Index of the current question being displayed
let currentQuestionIndex = 0;

// Player's score
let score = 0;


// Update the score display on the page
function updateScoreDisplay() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${score}`;
}

// Timer function that updates the displayed time and handles time-out
function quizTimer() {
    document.getElementById('timer').innerHTML = sec + "<br>Seconds Left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
        window.location.href = "index.html";  // Redirect to index.html
    }
    // clock keeps going when the user leaves the page 
    localStorage.setItem('remainingTime', sec);
}

// Function to display a question based on its index
function displayQuestion(questionIndex) {
    const currentQuestion = quizQuestions[questionIndex];
    questionText.textContent = currentQuestion.question;

    answerContainer.innerHTML = ""; // Clear previous answer options

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "button";
        button.addEventListener("click", () => {
            // Check if the selected option is correct
            if (index === currentQuestion.correctAnswer) {
                score++; //add up the score
                updateScoreDisplay();// show the score


            } else {
                // Display "Incorrect" message temporarily for wrong answers

                let wrongAns = document.getElementById('incorrect-answer');
                wrongAns.style.display = 'block';
                wrongAns.innerHTML = "<p>Incorrect</p>";
                setTimeout(() => { wrongAns.style.display = 'none'; }, 1000);

            }

            // Display the next question or show the final score modal
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                displayQuestion(currentQuestionIndex);
            } else {

                // After the alert("Quiz completed!"); line
                const modal = document.getElementById("quiz-modal");
                const finalScoreElement = document.getElementById("final-score");
                finalScoreElement.textContent = score; // Set the final score in the modal

                // Show the modal
                modal.style.display = "block";

                // Close the modal when the close button is clicked
                const closeButton = document.querySelector(".close-rules");
                closeButton.addEventListener("click", () => {
                    modal.style.display = "none";
                    // Redirect to index.html
                    window.location.href = "index.html";
                });


            }

        });
        // Add the option button to the answer container

        answerContainer.appendChild(button);
    });

}

// Call the displayQuestion function to show the first question
displayQuestion(currentQuestionIndex);
updateScoreDisplay(); // Display score