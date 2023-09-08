let random = () => Math.floor(Math.random() * 3);

let capitalise = (gameObject) => gameObject.charAt(0).toUpperCase() + gameObject.slice(1);

function getComputerChoice(){
    let choice = random();

    switch(choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){

    playerSelection = capitalise(playerSelection)

    switch (playerSelection){
        case computerSelection:
            return "Tie!"

        case "Rock":
            if (computerSelection == "Paper"){
                computerScore ++;
                return "You lose! Paper beats Rock.";
            }
            else {
                playerScore ++;
                return "You win! Rock beats Scissors.";
            }

        case "Paper":
            if (computerSelection == "Scissors"){
                computerScore ++;
                return "You lose! Scissors beats Paper.";
            }
            else {
                playerScore ++;
                return "You win! Paper beats Rock.";
            }

        case "Scissors":
            if (computerSelection == "Rock"){
                computerScore ++;
                return "You lose! Rock beats Scissors.";
            }
            else {
                playerScore ++;
                return "You win! Scissors beats Paper.";
            }
    }
}

function game(){
    while (computerScore < 5 && playerScore < 5){
        let playerSelection = prompt("Rock, Paper, Scissors?");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (computerScore === 5){
        console.log("Computer Wins!")
    }

    else {
        console.log("Player Wins!")
    }
}

let computerScore = 0;
let playerScore = 0;

//game();