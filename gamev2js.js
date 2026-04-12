
function playGame() {
    // Generate a random decimal between 0 and 1 using Math.random()
    // Multiply by 2 and use Math.floor to get either 0 or 1
    var flipResult = Math.floor(Math.random() * 2);

    // Call the secondary function and pass the random number as a parameter
    processResults(flipResult);
}

/**
 * @param {number} result - The value of the coin flip (0 for heads, 1 for tails).
 */
function processResults(result) {
    // Find the output element on the page
    var display = document.getElementById("game-output");

    // Conditionals: Use if/else if/else to determine the outcome
    if (result === 0) {
        // If the result is 0, the player wins with Heads
        display.innerHTML = "Result: <span style='color: #4CAF50;'>HEADS! You win 10 Pennies!</span>";
    } 
    else if (result === 1) {
        // If the result is 1, the player loses with Tails
        display.innerHTML = "Result: <span style='color: #f44336;'>TAILS! I keeps your pennies. Better luck next time!</span>";
    } 
    else {
        // Fallback case for unexpected errors
        display.innerHTML = "The coin landed on its side? Try again!";
    }
}