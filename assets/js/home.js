let nameInput = document.getElementById("local-name");
var userNameInput = document.getElementById('name');
let saveButton = document.getElementById("name-btn");
saveButton.addEventListener("click", signIn);
function signIn() {
    username = userNameInput.value;
    if (username.trim() !== "") {
        // Save the username in local storage
        localStorage.setItem("username", username);
        // Redirect the user to the game page
        window.location.href = "quiz.html"; // Replace "quiz.html" with your game page's URL
    } else {
        alert("Please enter a valid username.");
    }
};

var modal = document.getElementById("rules-modal");
var btn = document.getElementById("rules-button");
var span = document.getElementsByClassName("close-rules")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

