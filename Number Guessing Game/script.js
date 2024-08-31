document.addEventListener("DOMContentLoaded", initializeGame);

function initializeGame() {
    let secretNumber = getRandomInt(1, 100);
    let guessCount = 0;

    const userGuessInput = document.getElementById("guessInput");
    const checkGuessButton = document.getElementById("submitGuess");
    const resultMessage = document.getElementById("feedback");
    const guessCountDisplay = document.getElementById("attempts");
    const newGameButton = document.getElementById("restartGame");

    checkGuessButton.addEventListener("click", handleGuess);
    newGameButton.addEventListener("click", resetGame);

    function handleGuess() {
        const userGuess = parseInt(userGuessInput.value);
        guessCount++;

        if (isInvalidGuess(userGuess)) {
            updateFeedback("Please enter a valid number between 1 and 100.", "red");
        } else if (userGuess < secretNumber) {
            updateFeedback("Try higher!", "orange");
        } else if (userGuess > secretNumber) {
            updateFeedback("Try lower!", "orange");
        } else {
            handleCorrectGuess();
        }

        updateGuessCount();
        clearAndFocusInput();
    }

    function isInvalidGuess(guess) {
        return isNaN(guess) || guess < 1 || guess > 100;
    }

    function updateFeedback(message, color) {
        resultMessage.textContent = message;
        resultMessage.style.color = color;
    }

    function handleCorrectGuess() {
        updateFeedback(`You got it! The number was ${secretNumber}. It took you ${guessCount} tries.`, "green");
        newGameButton.classList.remove("hidden");
        checkGuessButton.disabled = true;
    }

    function updateGuessCount() {
        guessCountDisplay.textContent = `Guesses: ${guessCount}`;
    }

    function clearAndFocusInput() {
        userGuessInput.value = "";
        userGuessInput.focus();
    }

    function resetGame() {
        secretNumber = getRandomInt(1, 100);
        guessCount = 0;
        resultMessage.textContent = "";
        guessCountDisplay.textContent = "";
        userGuessInput.value = "";
        checkGuessButton.disabled = false;
        newGameButton.classList.add("hidden");
        userGuessInput.focus();
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}