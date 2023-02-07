const playerScoreText = document.getElementById('playerScoreText');
const computerScoreText = document.getElementById('computerScoreText');
const scoreAlertText = document.getElementById('scoreAlertText');
let playerScore = playerScoreText.innerHTML;
let computerScore = computerScoreText.innerHTML;


//function that generates a random number and assigns it to the choice variable
//depending on the number the choice variable will be equal to rock, paper, or scissors
//the choice variable represents the computers choice of rock, paper, or scissors
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


//function to play a single round of rock, paper, scissors with the computer and display the winner of each round
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        scoreAlertText.textContent = 'It\'s a tie!';
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        scoreAlertText.textContent = 'You lose! Paper beats Rock';
        computerScore++;
        document.getElementById('computerScoreText').innerHTML = computerScore;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        scoreAlertText.textContent = 'You win! Rock beats Scissors';
        playerScore++;
        document.getElementById('playerScoreText').innerHTML = playerScore;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        scoreAlertText.textContent = 'You win! Paper beats Rock';
        playerScore++;
        document.getElementById('playerScoreText').innerHTML = playerScore;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        scoreAlertText.textContent = 'You lose! Scissors beats Paper';
        computerScore++;
        document.getElementById('computerScoreText').innerHTML = computerScore;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        scoreAlertText.textContent = 'You lose! Rock beats Scissors';
        computerScore++;
        document.getElementById('computerScoreText').innerHTML = computerScore;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        scoreAlertText.textContent = 'You win! Scissors beats Paper';
        playerScore++;
        document.getElementById('playerScoreText').innerHTML = playerScore;
    } 
}


//the click events below call the playRound() function to play a single round of the game when the user clicks the rock, paper, or scissors button
//after playing each round, a conditional statement checks if either the players score or computers score has reached 5
//if the player score has reached 5, a winner message is displayed and the scores are reset to 0
//if the computer score has reached 5, a loser message is displayed and the scores are reset to 0
const choiceRock = document.querySelector('#rock');
const choicePaper = document.querySelector('#paper');
const choiceScissors = document.querySelector('#scissors');

choiceRock.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
    if (parseInt(playerScore) == 5) {
        scoreAlertText.textContent = 'Winner! You beat the computer first to 5';
        playerScore = 0;
        document.getElementById('playerScoreText').innerHTML = playerScore;
        computerScore = 0;
        document.getElementById('computerScoreText').innerHTML = computerScore;
    } else if (parseInt(computerScore) == 5) {
        scoreAlertText.textContent = 'Loser! The computer beat you first to 5';
        playerScore = 0;
        document.getElementById('playerScoreText').innerHTML = playerScore;
        computerScore = 0;
        document.getElementById('computerScoreText').innerHTML = computerScore;
    }
});

choicePaper.addEventListener('click', function() {
    playRound('paper', getComputerChoice());
    if (parseInt(playerScore) == 5) {
        scoreAlertText.textContent = 'Winner! You beat the computer first to 5';
        playerScore = 0;
        document.getElementById('playerScoreText').innerHTML = playerScore;
        computerScore = 0;
        document.getElementById('computerScoreText').innerHTML = computerScore;
    } else if (parseInt(computerScore) == 5) {
        scoreAlertText.textContent = 'Loser! The computer beat you first to 5';
        playerScore = 0;
        document.getElementById('playerScoreText').innerHTML = playerScore;
        computerScore = 0;
        document.getElementById('computerScoreText').innerHTML = computerScore;
    }
});

choiceScissors.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
    if (parseInt(playerScore) == 5) {
        scoreAlertText.textContent = 'Winner! You beat the computer first to 5';
        playerScore = 0;
        document.getElementById('playerScoreText').innerHTML = playerScore;
        computerScore = 0;
        document.getElementById('computerScoreText').innerHTML = computerScore;
    } else if (parseInt(computerScore) == 5) {
        scoreAlertText.textContent = 'Loser! The computer beat you first to 5';
        playerScore = 0;
        document.getElementById('playerScoreText').innerHTML = playerScore;
        computerScore = 0;
        document.getElementById('computerScoreText').innerHTML = computerScore;
    }
});





