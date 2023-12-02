


/**
 * Generates a random choice for the computer between "rock", "paper", and "scissors".
 *
 * @return {string} The randomly generated choice for the computer.
 */
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

/**
 * Prompts the user for their choice of 'Rock', 'Paper', or 'Scissors' and returns the choice.
 *
 * @return {string} The user's choice of 'Rock', 'Paper', or 'Scissors'.
 */
function getPlayerChoice() {
    let choice = prompt("'Rock','Paper', 'Scissors'; What do you choose?")
    if (choice.toLowerCase().trim() != ("rock" || "paper" || "scissors")){
        choice = prompt("Enter either of the three, 'Rock', 'Paper', 'Scissors'?")
        if (choice.toLowerCase().trim() != ("rock" || "paper" || "scissors")) {
            alert("Wrongdoing!! Refresh!")
            return
        }
    }
    return choice

}


/**
 * Determines the outcome of a round in a game of Rock, Paper, Scissors.
 *
 * @param {string} playerSelection - the player's choice of Rock, Paper, or Scissors
 * @param {string} computerSelection - the computer's choice of Rock, Paper, or Scissors
 * @return {string} the result of the round (e.g. "YOU WIN! Rock beats Scissors")
 */
function playRound(playerSelection, computerSelection) {
    ps = playerSelection.toLowerCase().trim()
    cs = computerSelection.toLowerCase().trim()
    if (ps === "rock" && cs === "scissors") {
        return "YOU WIN! Rock beats Scissors"
    } else if (ps === "scissors" && cs === "rock") {
        return "YOU LOSE! Rock beats Scissors"
    } else if (ps === "rock" && cs === "paper") {
        return "YOU LOSE! Paper beats Rock"
    } else if (ps === "paper" && cs === "rock") {
        return "YOU WIN! Paper beats Rock"
    } else if (ps === "scissors" && cs === "paper") {
        return "YOU WIN! Scissors beats Paper"
    } else if (ps === "paper" && cs === "scissors") {
        return "YOU LOSE! Scissors beats Paper"
    } else if (ps === cs) {
        return "DRAW"
    }
}

