const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const computerSelectionPar = document.getElementById('computerSelection');
const winnerPar = document.getElementById('winner');
const playerScorePar = document.getElementById('playerScore');
const computerScorePar = document.getElementById('computerScore');

rockButton.addEventListener('click', () => handleClick('rock'));
paperButton.addEventListener('click', () => handleClick('paper'));
scissorsButton.addEventListener('click', () => handleClick('scissors'));

let gameCount = 0;
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "tie"
    }
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      return "win"
    }
    return "lose"
  }

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}

function handleClick(playerSelection){
        let computerSelection = getRandomChoice();
        let result = playRound(playerSelection, computerSelection);
        computerSelectionPar.textContent = "Computer chose " + computerSelection;
        if(result === "tie"){
            winnerPar.textContent = "It's a tie";
            playerScorePar.textContent = playerWins;
            computerScorePar.textContent = computerWins;
        } else if(result === "win"){
            winnerPar.textContent = "You win!";
            playerWins++;
            playerScorePar.textContent = playerWins;
            computerScorePar.textContent = computerWins;
        } else if(result === "lose"){
            winnerPar.textContent = "You lose!";
            computerWins++;
            computerScorePar.textContent = computerWins;
            playerScorePar.textContent = playerWins;
        }

        if(playerWins === 3) {
            computerScorePar.textContent = computerWins;
            playerScorePar.textContent = playerWins;
            winnerPar.textContent = "YOU WIN! You are the winner of the 3 rounds game, click to start again";
            playerWins = 0;
            computerWins = 0;
        } else if(computerWins === 3) {
            computerScorePar.textContent = computerWins;
            playerScorePar.textContent = playerWins;
            winnerPar.textContent = "COMPUTER WINS! It is the winner of the 3 rounds game, click to start again";
            playerWins = 0;
            computerWins = 0;
    }
}
