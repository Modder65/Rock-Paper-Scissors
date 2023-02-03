let playerChoice = prompt("Choose Rock, Paper, or Scissors");

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
        alert("Paper beats Rock, you lose!");
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        alert("Rock beats Scissors, you win!");
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        alert("Paper beats Rock, you win!");
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        alert("Scissors beats Paper, you lose!");
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        alert("Rock beats scissors, you lose!");
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        alert("Scissors beats Paper, you win!");
    }
}


getComputerChoice();
playRound(playerChoice, getComputerChoice());
