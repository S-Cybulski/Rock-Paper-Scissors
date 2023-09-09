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

let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');
const scoreboard = document.querySelector('.scoreboard');

const player = document.createElement('div');
player.classList.add('playerScore');
player.textContent = 'Player';

const playerScoreDisplay = document.createElement('div');
player.classList.add('playerScore');
playerScoreDisplay.textContent = `${playerScore}`;

const computer = document.createElement('div');
computer.classList.add('computerScore');
computer.textContent = 'Computer';

const computerScoreDisplay = document.createElement('div');
computer.classList.add('computerScore');
computerScoreDisplay.textContent = `${computerScore}`;

const winnerAnnoucement = document.createElement('div');
winnerAnnoucement.classList.add('winnerAnnoucement');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        winnerAnnoucement.textContent = `${playRound(button.id, getComputerChoice())}`;

        if (computerScore === 5){
            winnerAnnoucement.textContent = "Computer Wins!";
            computerScore = 0;
            playerScore = 0;
        }
    
        else if (playerScore === 5){
            winnerAnnoucement.textContent = "Player Wins!";
            computerScore = 0;
            playerScore = 0;
        }
        
        computerScoreDisplay.textContent = `${computerScore}`;
        playerScoreDisplay.textContent = `${playerScore}`;

    });
});

scoreboard.appendChild(player);
scoreboard.appendChild(playerScoreDisplay);
scoreboard.appendChild(computer);
scoreboard.appendChild(computerScoreDisplay);
scoreboard.appendChild(winnerAnnoucement);