let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice <= 1) {
        choice = "Rock";
        return choice;
    } else if (choice <= 2) {
        choice = "Paper";
        return choice;
    } else {
        choice = "Scissors";
        return choice;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        alert("It's a tie!");
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        alert("You lose! Paper beats Rock");
        computerScore++;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        alert("You win! Rock beats Scissors");
        playerScore++;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        alert("You win! Paper beats Rock");
        playerScore++;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        alert("You lose! Scissors beats Paper");
        computerScore++;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        alert("You lose! Rock beats scissors");
        computerScore++;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        alert("You win! Scissors beats Paper");
        playerScore++;
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose Rock, Paper, or Scissors");
        getComputerChoice();
        playRound(playerChoice, getComputerChoice());
    }
    if (playerScore > computerScore) {
        alert("You win! You won more rounds than the computer");
    } else if (playerScore < computerScore) {
        alert("You lose! You lost more rounds than the computer");
    } else if (playerScore === computerScore) {
        alert("Nobody wins! You tied against the computer!");
    } 
}

game()


