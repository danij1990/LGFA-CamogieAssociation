// Get references to HTML elements

var userNameInput = document.getElementById('name');
let saveButton = document.getElementById("name-btn");

// Add event listener to the save button
saveButton.addEventListener("click", signIn);

// Function to execute when the "Save" button is clicked
function signIn() {
    let username = userNameInput.value;
    if (username.trim() !== "") {
        // Save the username in local storage
        localStorage.setItem("username", username);
        // Redirect the user to the game page
        window.location.href = "quiz.html"; // Replace "quiz.html" with your game page's URL
    } else {
        alert("Please enter a valid username.");
    }
}

// Add event listener to the rules button to open the rules modal
var modal = document.getElementById("rules-modal");
var btn = document.getElementById("rules-button");
var span = document.getElementsByClassName("close-rules")[0];

btn.onclick = function () {
    modal.style.display = "block";
};


// Add event listener to the close button within the rules modal
span.onclick = function () {
    modal.style.display = "none";
};



