let getGamerChoice = prompt("Choose Rock Paper or Scissors").toLowerCase();

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    if(random === 0){
        return "rock";
    } else if(random === 1){
        return "paper";
    } else if(random === 2){
        return "scissors";
    }
}

function playRound(gamerChoice, computerChoice){
    if(gamerChoice === computerChoice){
        console.log("It's a tie!");
    } else if (gamerChoice === "rock" && computerChoice === "paper"){
        console.log("You loose! Paper beats rock");
    } else if (gamerChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats scissors");
    } else if (gamerChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock");
    } else if (gamerChoice === "paper" && computerChoice === "scissors"){
        console.log("You loose! Scissors beats paper");
    } else if (gamerChoice === "scissors" && computerChoice === "rock"){
        console.log("You loose! Rock beats scissors");
    } else if (gamerChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper");
    }
}

function game(){
    for(let i=0; i<5; i++){
        
    }
}
