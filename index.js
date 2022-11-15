/*
1 - Iniciar un juego a a partir del primer click
2 - agregar add event listener a las imagenes cuando haga click se llame a la funcion que genera el juego
3 - Los parrafor de .computerSelection y .winner deben de decir la eleccion de la computadora y quien es el ganador respectivamente
4 - Agregar al conteo de 5 rondas quien fue el ganador y cambiar el resultado en la tabla .playerScore .computerScore
5 - al jugar 5 rondas en el parrafo de .winner debe decir quien fue el ganador de las ultimas 5 jugadas y reiniciar el conteo.
*/ 

let getGamerChoice;

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
