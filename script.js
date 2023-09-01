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

    switch (playerSelection | computerSelection){
        case playerSelection == computerSelection:
            return "Tie!"

        case playerSelection == "Rock":
            if (computerSelection == "Paper"){
                return "You lose! Paper beats Rock.";
            }
            else {
                return "You win! Rock beats Scissors.";
            }

        case playerSelection == "Paper":
            if (computerSelection == "Scissors"){
                return "You lose! Scissors beats Paper.";
            }
            else {
                return "You win! Paper beats Rock.";
            }

        case playerSelection == "Scissors":
            if (computerSelection == "Rock"){
                return "You lose! Rock beats Scissors.";
            }
            else {
                return "You win! Scissors beats Paper.";
            }
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));