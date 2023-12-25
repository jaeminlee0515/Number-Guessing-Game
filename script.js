// Declare variables
let attempts = 0;
let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessedNumbers = [];

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");
const numberGuessed = document.getElementById("numberGuessed");

// Event Listeners
submit.addEventListener("click", checkGuessed);
guess.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default action (form submission)
    checkGuessed();
  }
});

function checkGuessed() {
  const userValue = Number(guess.value);
  attempts++;
  guessedNumbers.push(userValue); // Add the guessed number to the array
  recordedGuess();

  //   Conditionals
  if (userValue === randomNumber) {
    hint.textContent = "Congratulations, you guessed it!";
  } else if (userValue < randomNumber) {
    hint.textContent = "Too low! Aim a bit higher!";
  } else {
    hint.textContent = "Too high! Aim a bit lower!";
  }

  attemptsText.textContent = "Attempts: " + attempts;
}

function recordedGuess() {
  numberGuessed.textContent = "Guessed Numbers: " + guessedNumbers.join(", ");
}
