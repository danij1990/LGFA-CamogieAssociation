
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
        options: ["9", "8", "9", "7"],
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

const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer");


let currentQuestionIndex = 0;
let score = 0;

function beginQuiz() {
    currentQuestionIndex = 0;
    score = 0;

}

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
                alert("Correct!");
                button.style.backgroundColor = "green";
            } else {
                alert("Incorrect!");
                button.style.backgroundColor = "red";
            }

            // Display the next question
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                displayQuestion(currentQuestionIndex);
            } else {
                alert("Quiz completed!");
            }
        });

        answerContainer.appendChild(button);
    });
}

// Call the displayQuestion function to show the first question
displayQuestion(currentQuestionIndex);



// Get references to HTML elements, home page 
const nameInput = document.getElementById("name");
const saveButton = document.getElementById("name-btn");

// Add click event listener to the Save Name button
saveButton.addEventListener("click", function () {
    const username = nameInput.value;

    if (username.trim() !== "") {
        // Save the username in local storage
        localStorage.setItem("username", username);

        // Redirect the user to the game page
        window.location.href = "quiz.html"; // Replace "quiz.html" with your game page's URL
    } else {
        alert("Please enter a valid username.");
    }
});



