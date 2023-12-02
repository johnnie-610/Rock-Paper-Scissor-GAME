


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

    if (choice.toLowerCase().trim() == "rock" || choice.toLowerCase().trim() == "paper" || choice.toLowerCase().trim() == "scissors") {
        return choice
    } else {
        alert("Please enter 'Rock', 'Paper', or 'Scissors'.")
        return getPlayerChoice()
    }
}




/**
 * Determines the outcome of a round in a game of Rock, Paper, Scissors.
 *
 * @param {string} playerSelection - the player's choice of Rock, Paper, or Scissors
 * @param {string} computerSelection - the computer's choice of Rock, Paper, or Scissors
 * @return {string} the result of the round (e.g. "YOU WIN! Rock beats Scissors")
 */
function playRound() {
    let ps = getPlayerChoice().toLowerCase().trim()
    let cs = getComputerChoice().toLowerCase().trim()

    // in a tie, round is replayed
    if (ps === cs) {
        alert("Round is a tie")
        // replay round
        playRound();
    } else if ((ps === "rock" && cs === "scissors") || (ps === "paper" && cs === "rock") || (ps === "scissors" && cs === "paper")) {
        return `YOU WIN! ${ps} beats ${cs}`
    }else {
        return `YOU LOSE! ${cs} beats ${ps}`
    }


}

/**
 * Plays the game until a certain number of rounds are reached. Keeps track of player and computer scores
 * and displays the results after each round. Alerts the final score and game over message at the end.
 *
 * @param {number} rounds - The number of rounds to play.
 * @return {undefined} No return value.
 */
function game() {
    const rounds = 5
    let playerScore = 0
    let computerScore = 0
    let currentRound = 1
    while (currentRound <= rounds) {
        let result = playRound()

        if (result.includes("WIN")) {
            playerScore++
        } else if (result.includes("LOSE")) {
            computerScore++
        }
        if (playerScore === 3 || computerScore === 3) {
            break
        }
        alert(`Round ${currentRound}: ${result}\nScore: You ${playerScore} - ${computerScore} Computer`)
        currentRound++
    }
    if (currentRound <= rounds) {
        if (playerScore > computerScore) {
            alert(`YOU WIN! Final Score: You ${playerScore} - ${computerScore} Computer`)
            alert("Game Over! Thanks for playing!")
            playAgain()

        } else {
            alert(`YOU LOSE! Final Score: You ${playerScore} - ${computerScore} Computer`)
            alert("Game Over! Thanks for playing!")
            playAgain()
        }
    } else {
        if (playerScore > computerScore) {
            alert(`YOU WIN! Final Score: You ${playerScore} - ${computerScore} Computer`)
            alert("Game Over! Thanks for playing!")
            playAgain()
        } else {
            alert(`YOU LOSE! Final Score: You ${playerScore} - ${computerScore} Computer`)
            alert("Game Over! Thanks for playing!")
            playAgain()
        }

    }
}

function playAgain() {
    let restart = confirm("Would you like to play again?")
    if (restart) {
        location.reload()
    }
}

const button = document.querySelector("#play-button")
button.addEventListener("click", game)
